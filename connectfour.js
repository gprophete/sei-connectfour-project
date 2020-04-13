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
            // Vertical winnig combo
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
            // Diagonal winning combo for player two
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
            if (play[12].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[18].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo
                && play[36].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[5].innerHTML == playerTwo
                && play[11].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[11].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[29].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[17].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[29].innerHTML == playerTwo
                && play[35].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[4].innerHTML == playerTwo
                && play[10].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[22].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[10].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[22].innerHTML == playerTwo
                && play[28].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[13].innerHTML == playerTwo
                && play[19].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[19].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo
                && play[37].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[20].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo
                && play[38].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[0].innerHTML == playerTwo
                && play[8].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[8].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[16].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo
                && play[40].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[6].innerHTML == playerTwo
                && play[12].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[1].innerHTML == playerTwo
                && play[9].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[9].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[33].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[17].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[33].innerHTML == playerTwo
                && play[41].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[7].innerHTML == playerTwo
                && play[15].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[15].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo
                && play[39].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[14].innerHTML == playerTwo
                && play[22].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo
                && play[38].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[2].innerHTML == playerTwo
                && play[10].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[10].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo
                && play[34].innerHTML == playerTwo) {
                alert('win')
            }
            if (play[3].innerHTML == playerTwo
                && play[11].innerHTML == playerTwo
                && play[19].innerHTML == playerTwo
                && play[27].innerHTML == playerTwo) {
                alert('win')
            }


            







        }



    })






}



