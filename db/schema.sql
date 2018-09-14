### Schema

USE sdlmhvgy5sebbjdn;

CREATE TABLE shows
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    have_started BOOLEAN DEFAULT false,
    watched_all BOOLEAN DEFAULT false,
    liked BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
