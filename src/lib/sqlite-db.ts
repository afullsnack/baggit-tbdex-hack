import { BunFileSystem } from "@effect/platform-bun"
import { FileSystem } from "@effect/platform/FileSystem"
import { SqliteClient } from "@effect/sql-sqlite-bun"
// import { describe, expect, test } from "bun:test"
import { Effect } from "effect"

export const makeClient = Effect.gen(function*() {
  const fs = yield* FileSystem
  const dir = yield* fs.makeTempDirectoryScoped()
  return yield* SqliteClient.make({
    filename: dir + "/test.db"
  })
}).pipe(Effect.provide(BunFileSystem.layer))
