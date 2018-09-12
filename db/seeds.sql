USE restaurants_db;

INSERT INTO restaurants (name, have_tried, liked) VALUES
("Roka Akor", true, true),
("Super Duper", true, true),
("McDonald's", true, false),
("Sue's Kitchen", true, true),
("Swan Oyster Depot", false, false);

SELECT * FROM restaurants;