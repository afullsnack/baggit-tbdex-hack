import { expect, describe, test } from "bun:test";
import { Effect, pipe } from "effect";
import { makeClient } from "./sqlite-db";

describe("SQLite client", () => {
  test("works", () =>
    Effect.gen(function*() {
      const sql = yield* makeClient
      yield* sql`CREATE TABLE test (id INTEGER PRIMARY KEY, name TEXT)`
      yield* sql`INSERT INTO test (name) VALUES ('hello')`
      let rows = yield* sql`SELECT * FROM test`
      expect(rows).toEqual([{ id: 1, name: "hello" }])
      yield* pipe(sql`INSERT INTO test (name) VALUES ('world')`, sql.withTransaction)
      rows = yield* sql`SELECT * FROM test`
      expect(rows).toEqual([
        { id: 1, name: "hello" },
        { id: 2, name: "world" }
      ])
    }).pipe(Effect.scoped, Effect.runPromise))
})
