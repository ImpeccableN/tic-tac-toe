const Gameboard = (function () {
    let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const emptyBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

    const fillField = function(fieldNum, symbol) {
        if (board[fieldNum] != " ") {
            alert("This field is already in use. Choose another.");
        } else {
            board[fieldNum] = symbol;
        }
    };

    const drawBoard = function() {
        console.log("|" + board[0] + "|" + board[1] + "|" + board[2] + "|");
        console.log("-------");
        console.log("|" + board[3] + "|" + board[4] + "|" + board[5] + "|");
        console.log("-------");
        console.log("|" + board[6] + "|" + board[7] + "|" + board[8] + "|");
    };

    const resetBoard = () => {board = emptyBoard};

    const checkForWin = function() {
        if(board[0] !=" "){
            if(board[0] == board[1] && board[0] == board[2]){
                //need to change
                alert("You won!");
            } else if(board[0] == board[3] && board[0] == board[5]){
                //need to change
                alert("You won!");
            } 
        } else if(board[3] != " ") {
            if(board[3] == board[4] && board[3] == board[5]){
                //need to change
                alert("You won!");
            }
        }
    };

    return {fillField, drawBoard, resetBoard, checkForWin}
})();

function createPlayer (name, symbol) {
    return {name, symbol}
};

const Gameloop = (function() {
    const player1 = createPlayer("Antje", "X");
    const player2 = createPlayer("Niels", "O");

    Gameboard.drawBoard();
    let input = prompt(player1.name + ", your turn.");
    Gameboard.fillField(parseInt(input), player1.symbol);
    Gameboard.drawBoard();
})();
