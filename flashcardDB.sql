
CREATE DATABASE flashcard_DB;


USE flashcard_DB;

CREATE TABLE flashcards (
	id INTEGER(10) auto_increment NOT NULL,
    flash_text_front VARCHAR(144) NOT NULL,
    flash_back_cloze VARCHAR(144) NOT NULL,
    cloze BOOLEAN,
    user_ID integer(10) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE decks (
	user_ID integer(10) NOT NULL,
    deckName VARCHAR(25) NOT NULL,
    flashCard INTEGER(10) 
  
    -- flashcard is contrainted my flashcards 
);

CREATE TABLE users (
	userName VARCHAR(25) NOT NULL,
    multiPass VARCHAR(25)	NOT NULL,
    user_ID INTEGER(10) auto_increment NOT NULL,
    PRIMARY KEY (user_ID)
)

