CREATE DATABASE library;

CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(40),
    editorial VARCHAR(40),
    author VARCHAR(40),
    published VARCHAR(10)
);

INSERT INTO books (title, editorial, author, published) VALUES
    ('In Search of Lost Time', 'Editions Gallimard', 'Marcel Proust', '1913'),
    ('Ulysses', 'Sylvia Beach', 'James Joyce', '1904');