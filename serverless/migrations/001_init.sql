CREATE TABLE category_stats (
    category_id Utf8 NOT NULL,
    version Uint64 NOT NULL,
    payload_json Utf8 NOT NULL,
    updated_at Uint64 NOT NULL,
    PRIMARY KEY (category_id)
);

CREATE TABLE vote_batches (
    player_id Utf8 NOT NULL,
    batch_id Utf8 NOT NULL,
    category_id Utf8 NOT NULL,
    vote_count Uint32 NOT NULL,
    received_at Uint64 NOT NULL,
    PRIMARY KEY (player_id, batch_id)
);
