ALTER TABLE user_entity
    ADD goal_calories INTEGER;

ALTER TABLE user_entity
    ALTER COLUMN goal_calories SET NOT NULL;