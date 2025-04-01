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
                return true;
            } else if(board[0] == board[3] && board[0] == board[6]){
                return true;
            } else if(board[0] == board[4] && board[0] == board[8]){
                return true;
            }
        } 
        if(board[3] != " ") {
            if(board[3] == board[4] && board[3] == board[5]){
                return true;
            }
        } 
        if(board[6] != " ") {
            if(board[6] == board[7] && board[6] == board[8]){
                return true;
            } else if(board[6] == board[4] && board[6] == board[2]){
                return true;
            }
        } 
        if(board[1] != " ") {
            if(board[1] == board[4] && board[1] == board[7]){
                return true;
            }
        } 
        if(board[2] != " ") {
            if(board[2] == board[5] && board[2] == board[8]){
                return true;
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
    let currentPlayer = player1;

    function addEventToPlayFields(){
        const fieldList = document.querySelectorAll(".playing-field");
        for (let i = 0; i < 9; i++){
            fieldList[i].addEventListener("click", () => {
                Gameboard.fillField(parseInt(i), currentPlayer.symbol);
                fieldList[i].textContent = currentPlayer.symbol;
                Gameboard.drawBoard();
                if (Gameboard.checkForWin()){
                    alert(currentPlayer.name + " wins!");
                    return (true);
                }; 
                if (currentPlayer == player1){
                    currentPlayer = player2;
                } else {
                    currentPlayer = player1;
                };
            });
        };
    };

    addEventToPlayFields();
    Gameboard.drawBoard();
    
    // need to implement tie!
})();
