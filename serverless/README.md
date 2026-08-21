# World statistics backend

Serverless backend for shared anonymous item statistics.

## Yandex Cloud resources

- Managed Service for YDB: Serverless, OLTP.
- Cloud Function runtime: Node.js 22.
- Function entrypoint: `index.handler`.
- Function memory: 256 MB.
- Function timeout: 10 seconds.
- Function service account: grant only `ydb.editor` for the `rating-stats` database.
- Environment variable `YDB_CONNECTION_STRING`: the full YDB gRPC connection string.

The function uses the service account metadata endpoint. Do not create or upload an
authorized key for the runtime service account.

## Database initialization

Run `migrations/001_init.sql` once in the YDB query editor.

## Catalog update

`catalog.js` is generated from the client source of truth:

```powershell
node serverless/scripts/export-catalog.mjs
```

Regenerate it whenever item or category IDs change.

## Sync request

```json
{
  "playerId": "local-player-abcd1234",
  "categoryVersions": {},
  "pendingBatches": [
    {
      "id": "frukty-1234567890-abc123",
      "categoryId": "frukty",
      "votes": [
        { "winnerId": "yabloko", "loserId": "banan" }
      ]
    }
  ]
}
```

The response acknowledges every batch ID, including a previously accepted duplicate.
Only categories newer than `categoryVersions` are returned.
