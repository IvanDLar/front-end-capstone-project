CREATE TABLE MenuItem (
    `item_id` INTEGER PRIMARY KEY,
    `name` TEXT,
    `description` TEXT,
    `price` INTEGER
    `section` INTEGER REFERENCES menu-section (section_id)
);
