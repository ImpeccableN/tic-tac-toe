const Gameboard = (function () {
    let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    const emptyBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

    const fillField = function(fieldNum, symbol) {
        if (board[fieldNum] != " ") {
            let input = prompt("This field is already in use. Choose another.");
            fillField(input, symbol);
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
        if(board[0] != " "){
            if(board[0] == board[1] && board[0] == board[2]){
                //need to change
                alert("You won!");
            } else if(board[0] == board[3] && board[0] == board[6]){
                //need to change
                alert("You won!");
            } else if(board[0] == board[4] && board[0] == board[8]){
                //need to change
                alert("You won!");
            }
        } 
        if(board[3] != " ") {
            if(board[3] == board[4] && board[3] == board[5]){
                //need to change
                alert("You won!");
            }
        } 
        if(board[6] != " ") {
            if(board[6] == board[7] && board[6] == board[8]){
                //need to change
                alert("You won!");
            } else if(board[6] == board[4] && board[6] == board[2]){
                //need to change
                alert("You won!");
            }
        } 
        if(board[1] != " ") {
            if(board[1] == board[4] && board[1] == board[7]){
                //need to change
                alert("You won!");
            }
        } 
        if(board[2] != " ") {
            if(board[2] == board[5] && board[2] == board[8]){
                //need to change
                alert("You won!");
            }
        } 
        if(!board.includes(" ")) {
            alert("It's a tie!");
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
    for (i = 0; i < 5; i++){
        let input = prompt(player1.name + ", your turn.");
        Gameboard.fillField(parseInt(input), player1.symbol)
        Gameboard.drawBoard();
        Gameboard.checkForWin();
        let input2 = prompt(player2.name + ", your turn.");
        Gameboard.fillField(parseInt(input2), player2.symbol);
        Gameboard.drawBoard();
        Gameboard.checkForWin();
    }



    return {player1, player2}
})();
