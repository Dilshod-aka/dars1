
CREATE DATABASE lesson25;

\c lesson25;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(32) NOT NULL,
    created_at timestamp default current_timestamp,
    updated_at timestamp default null,
    deleted_at timestamp default null
);

INSERT INTO users(username) VALUES ('ALi'), ('HIKMAt');