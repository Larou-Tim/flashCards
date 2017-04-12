

var mysql = require("mysql");

function sqlHandler() {
    var mysql = require("mysql");

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: 'root',
        password: 'M..7608891648',
        database: 'flashcard_DB'
    });

    connection.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            // console.log("connected as id " + connection.threadId);
        }
    });

    this.selectQuery = function () {
        var queryObj = {
            sql: "SELECT flash_text_front,flash_back_cloze,cloze FROM flashcards"

        };

        connection.query(queryObj, function (err, results) {

            if (err) throw err;

            for (var i in results) {

                console.log(results[i].flash_text_front, results[i].flash_back_cloze, results[i].cloze);

                if (results[i].cloze == 1) {


                    var clozeCard1 = new ClozeCard(results[i].flash_text_front, results[i].flash_back_cloze);
                    clozeCard1.displayCard();

                }
            }

        });
    }

}

module.exports = sqlHandler;




function selectQuery() {


}