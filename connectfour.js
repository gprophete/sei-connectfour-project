for (let i = 0; i < 42; i++) {
    let emptyBoard = document.createElement('div')
    emptyBoard.classList.add('box')
    document.body.appendChild(emptyBoard)

}

const playerOne = "X"
const playerTwo = "O"


let playerTurn;


const play = document.querySelectorAll('.box')


for (let i = 0; i < play.length; i++) {
    play[i].addEventListener('click', () => {

        // making first move to bottom row
        if (i < 7) {
            if (play[i + 35].innerHTML == "") {
                if (playerTurn === 'X') {
                    play[i + 35].innerHTML = playerOne
                    playerTurn = 'O'
                } else {
                    play[i + 35].innerHTML = playerTwo
                    playerTurn = 'X'
                }


            } else if (play[i + 28].innerHTML == "") {
                if (playerTurn === 'X') {
                    play[i + 28].innerHTML = playerOne
                    playerTurn = 'O'
                } else {
                    play[i + 28].innerHTML = playerTwo
                    playerTurn = 'X'
                }

            } else if (play[i + 21].innerHTML == "") {
                if (playerTurn === 'X') {
                    play[i + 21].innerHTML = playerOne
                    playerTurn = 'O'
                } else {
                    play[i + 21].innerHTML = playerTwo
                    playerTurn = 'X'
                }
            } else if (play[i + 14].innerHTML == "") {
                if (playerTurn === 'X') {
                    play[i + 14].innerHTML = playerOne
                    playerTurn = 'O'
                } else {
                    play[i + 14].innerHTML = playerTwo
                    playerTurn = 'X'
                }
            } else if (play[i + 7].innerHTML == "") {
                if (playerTurn === 'X') {
                    play[i + 7].innerHTML = playerOne
                    playerTurn = 'O'
                } else {
                    play[i + 7].innerHTML = playerTwo
                    playerTurn = 'X'
                }
            } else {
                if (playerTurn === 'X') {
                    play[i].innerHTML = playerOne
                    playerTurn = 'O'
                } else {
                    play[i].innerHTML = playerTwo
                    playerTurn = 'X'

                }
            }
            if (play[i + 35].innerHTML == playerOne
                && play[i + 28].innerHTML == playerOne
                && play[i + 21].innerHTML == playerOne
                && play[i + 14].innerHTML == playerOne) {
                alert('win')
            }
            if (play[i].innerHTML == playerOne
                && play[i + 7].innerHTML == playerOne
                && play[i + 14].innerHTML == playerOne
                && play[i + 21].innerHTML == playerOne) {
                alert('win')
            }
            if (play[i + 7].innerHTML == playerOne
                && play[i + 14].innerHTML == playerOne
                && play[i + 21].innerHTML == playerOne
                && play[i + 28].innerHTML == playerOne) {
                alert('win')
            }
            if (play[i + 35].innerHTML == playerTwo
                && play[i + 28].innerHTML == playerTwo
                && play[i + 21].innerHTML == playerTwo
                && play[i + 14].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[i].innerHTML == playerTwo
                && play[i + 7].innerHTML == playerTwo
                && play[i + 14].innerHTML == playerTwo
                && play[i + 21].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[i + 7].innerHTML == playerTwo
                && play[i + 14].innerHTML == playerTwo
                && play[i + 21].innerHTML == playerTwo
                && play[i + 28].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[6].innerHTML == playerTwo
                && play[12].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo) {
                alert('win')
            }
            





        }



    })






}



