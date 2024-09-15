import {Effect, Context, Layer } from "effect";
import { BunRuntime } from "@effect/platform-bun";
import type * as ParseResult from "@effect/schema/ParseResult";
import * as Schema from "@effect/schema/Schema";
import { HttpBody, HttpClient, HttpClientError, HttpClientRequest, HttpClientResponse } from "@effect/platform";


// TODO: user/did creation service
class User extends Schema.Class<User>("User")({
  id: Schema.UUID,
  did: Schema.String,
  email: Schema.String,
  username: Schema.String,
  vs: Schema.optional(Schema.String)
}) {};

const UserWithoutId = Schema.Struct(User.fields).pipe(Schema.omit("id"));
type UserWithoutId = Schema.Schema.Type<typeof UserWithoutId>;


interface UserService {
  readonly create: (
    _: UserWithoutId
  ) => Effect.Effect<User, HttpClientError.HttpClientError | HttpBody.HttpBodyError | ParseResult.ParseError>
};
const UserService = Context.GenericTag<UserService>("@baggit/UserService");

const makeUserService = Effect.gen(function* () {
  // TODO: replace with call to the database
  const defaultClient = yield* HttpClient.HttpClient;
  const clientWithBaseUrl = defaultClient.pipe(
    HttpClient.filterStatusOk,
    HttpClient.mapRequest(HttpClientRequest.prependUrl("https://jsonplaceholder.typeicode.com"))
  )

  const addUserWithoutId = HttpClientRequest.schemaBody(UserWithoutId);
  const create = (user: UserWithoutId) =>
    addUserWithoutId(
      HttpClientRequest.post("/user"),
      user
    ).pipe(
      Effect.flatMap(clientWithBaseUrl),
      HttpClientResponse.schemaBodyJsonScoped(User)
    )

  return UserService.of({ create });
})

const UserServiceDev = Layer.effect(UserService, makeUserService).pipe(
  Layer.provide(HttpClient.layer)
)


Effect.flatMap(
  UserService,
  (userService) => userService.create({
    did: "",
    username: "",
    email: "",
  })
).pipe(
  Effect.tap(Effect.log),
  Effect.provide(UserServiceDev),
  BunRuntime.runMain
)
