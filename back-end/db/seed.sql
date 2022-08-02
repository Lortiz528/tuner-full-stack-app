--step 1 connect to database
\c tuner;

--step 2 add pre made data to be able to add
INSERT INTO song (name, artist, album, time, is_favorite) VALUES 
('Running up that hill','Kate Bush','Hounds of Love', '4 minutes', false ),
('Argentina Dreams','Archer violet','Gemini', '4 minutes', true ),
('Titi me Pregunto','Bad Bunny','Un verano sin ti', '3 minutes', false   ),
('Brain Damage','Eminem','The slim shady LP', '4 minutes', true   );

-- psql -U postgres -f db/seed.sql; 