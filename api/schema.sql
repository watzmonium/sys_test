CREATE TABLE problems(
  id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(50) NOT NULL,
  url text NOT NULL
);

CREATE TABLE tags(
  id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title varchar(50) NOT NULL
);

CREATE TABLE problemTag(
  problem_id int NOT NULL REFERENCES problems(id) ON DELETE CASCADE,
  tag_id int NOT NULL REFERENCES tags(id) ON DELETE CASCADE
);

INSERT INTO tags(title) VALUES
('pointers'), ('dynamic-programming'), ('linked-lists');

INSERT INTO problems(name, url) VALUES
('jump game', 'https://leetcode.com/problems/jump-game/description/'),
('linked list cycle', 'https://leetcode.com/problems/linked-list-cycle/');