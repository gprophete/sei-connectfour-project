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
        // console.log(i)
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
                alert('PlayerOne wins')
            }
            if (play[i].innerHTML == playerOne
                && play[i + 7].innerHTML == playerOne
                && play[i + 14].innerHTML == playerOne
                && play[i + 21].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[i + 7].innerHTML == playerOne
                && play[i + 14].innerHTML == playerOne
                && play[i + 21].innerHTML == playerOne
                && play[i + 28].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[i + 35].innerHTML == playerTwo
                && play[i + 28].innerHTML == playerTwo
                && play[i + 21].innerHTML == playerTwo
                && play[i + 14].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[i].innerHTML == playerTwo
                && play[i + 7].innerHTML == playerTwo
                && play[i + 14].innerHTML == playerTwo
                && play[i + 21].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            // Diagonal winning combo for player two
            if (play[i + 7].innerHTML == playerTwo
                && play[i + 14].innerHTML == playerTwo
                && play[i + 21].innerHTML == playerTwo
                && play[i + 28].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[6].innerHTML == playerTwo
                && play[12].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[12].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[18].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo
                && play[36].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[5].innerHTML == playerTwo
                && play[11].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[11].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[29].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[17].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[29].innerHTML == playerTwo
                && play[35].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[4].innerHTML == playerTwo
                && play[10].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[22].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[10].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[22].innerHTML == playerTwo
                && play[28].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[13].innerHTML == playerTwo
                && play[19].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[19].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo
                && play[37].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[20].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo
                && play[38].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[0].innerHTML == playerTwo
                && play[8].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[8].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[16].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo
                && play[40].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[6].innerHTML == playerTwo
                && play[12].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[1].innerHTML == playerTwo
                && play[9].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[9].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[33].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[17].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[33].innerHTML == playerTwo
                && play[41].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[7].innerHTML == playerTwo
                && play[15].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[15].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo
                && play[39].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[14].innerHTML == playerTwo
                && play[22].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo
                && play[38].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[2].innerHTML == playerTwo
                && play[10].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[10].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo
                && play[34].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[3].innerHTML == playerTwo
                && play[11].innerHTML == playerTwo
                && play[19].innerHTML == playerTwo
                && play[27].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            // Diagonal winning combo for playerOne
            if (play[i + 7].innerHTML == playerOne
                && play[i + 14].innerHTML == playerOne
                && play[i + 21].innerHTML == playerOne
                && play[i + 28].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[6].innerHTML == playerOne
                && play[12].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[24].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[12].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[24].innerHTML == playerOne
                && play[30].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[18].innerHTML == playerOne
                && play[24].innerHTML == playerOne
                && play[30].innerHTML == playerOne
                && play[36].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[5].innerHTML == playerOne
                && play[11].innerHTML == playerOne
                && play[17].innerHTML == playerOne
                && play[23].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[11].innerHTML == playerOne
                && play[17].innerHTML == playerOne
                && play[23].innerHTML == playerOne
                && play[29].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[17].innerHTML == playerOne
                && play[23].innerHTML == playerOne
                && play[29].innerHTML == playerOne
                && play[35].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[4].innerHTML == playerOne
                && play[10].innerHTML == playerOne
                && play[16].innerHTML == playerOne
                && play[22].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[10].innerHTML == playerOne
                && play[16].innerHTML == playerOne
                && play[22].innerHTML == playerOne
                && play[28].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[13].innerHTML == playerTwo
                && play[19].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo) {
                alert('PlayerOne wins')
            }
            if (play[19].innerHTML == playerOne
                && play[25].innerHTML == playerOne
                && play[31].innerHTML == playerOne
                && play[37].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[20].innerHTML == playerOne
                && play[26].innerHTML == playerOne
                && play[32].innerHTML == playerOne
                && play[38].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[0].innerHTML == playerOne
                && play[8].innerHTML == playerOne
                && play[16].innerHTML == playerOne
                && play[24].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[8].innerHTML == playerOne
                && play[16].innerHTML == playerOne
                && play[24].innerHTML == playerOne
                && play[32].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[16].innerHTML == playerOne
                && play[24].innerHTML == playerOne
                && play[32].innerHTML == playerOne
                && play[40].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[6].innerHTML == playerOne
                && play[12].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[24].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[1].innerHTML == playerOne
                && play[9].innerHTML == playerOne
                && play[17].innerHTML == playerOne
                && play[25].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[9].innerHTML == playerOne
                && play[17].innerHTML == playerOne
                && play[25].innerHTML == playerOne
                && play[33].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[17].innerHTML == playerOne
                && play[25].innerHTML == playerOne
                && play[33].innerHTML == playerOne
                && play[41].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[7].innerHTML == playerOne
                && play[15].innerHTML == playerOne
                && play[23].innerHTML == playerOne
                && play[31].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[15].innerHTML == playerOne
                && play[23].innerHTML == playerOne
                && play[31].innerHTML == playerOne
                && play[39].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[14].innerHTML == playerOne
                && play[22].innerHTML == playerOne
                && play[30].innerHTML == playerOne
                && play[38].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[2].innerHTML == playerOne
                && play[10].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[26].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[10].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[26].innerHTML == playerOne
                && play[34].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[3].innerHTML == playerOne
                && play[11].innerHTML == playerOne
                && play[19].innerHTML == playerOne
                && play[27].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            // Horizontal winning combo playerTwo
            if (play[35].innerHTML == playerTwo
                && play[36].innerHTML == playerTwo
                && play[37].innerHTML == playerTwo
                && play[38].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[36].innerHTML == playerTwo
                && play[37].innerHTML == playerTwo
                && play[38].innerHTML == playerTwo
                && play[39].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[37].innerHTML == playerTwo
                && play[38].innerHTML == playerTwo
                && play[39].innerHTML == playerTwo
                && play[40].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[38].innerHTML == playerTwo
                && play[39].innerHTML == playerTwo
                && play[40].innerHTML == playerTwo
                && play[41].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[28].innerHTML == playerTwo
                && play[29].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[29].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[30].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo
                && play[33].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[31].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo
                && play[33].innerHTML == playerTwo
                && play[34].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[21].innerHTML == playerTwo
                && play[22].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[22].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[23].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[24].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo
                && play[27].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[14].innerHTML == playerTwo
                && play[15].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[15].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[16].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[19].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[17].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[19].innerHTML == playerTwo
                && play[20].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[7].innerHTML == playerTwo
                && play[8].innerHTML == playerTwo
                && play[9].innerHTML == playerTwo
                && play[10].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[8].innerHTML == playerTwo
                && play[9].innerHTML == playerTwo
                && play[10].innerHTML == playerTwo
                && play[11].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[9].innerHTML == playerTwo
                && play[10].innerHTML == playerTwo
                && play[11].innerHTML == playerTwo
                && play[12].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[10].innerHTML == playerTwo
                && play[11].innerHTML == playerTwo
                && play[12].innerHTML == playerTwo
                && play[13].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[0].innerHTML == playerTwo
                && play[1].innerHTML == playerTwo
                && play[2].innerHTML == playerTwo
                && play[3].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[1].innerHTML == playerTwo
                && play[2].innerHTML == playerTwo
                && play[3].innerHTML == playerTwo
                && play[4].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[2].innerHTML == playerTwo
                && play[3].innerHTML == playerTwo
                && play[4].innerHTML == playerTwo
                && play[5].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            if (play[3].innerHTML == playerTwo
                && play[4].innerHTML == playerTwo
                && play[5].innerHTML == playerTwo
                && play[6].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
            }
            // Horizontal winning combo playerOne
            if (play[35].innerHTML == playerOne
                && play[36].innerHTML == playerOne
                && play[37].innerHTML == playerOne
                && play[38].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[36].innerHTML == playerOne
                && play[37].innerHTML == playerOne
                && play[38].innerHTML == playerOne
                && play[39].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[37].innerHTML == playerOne
                && play[38].innerHTML == playerOne
                && play[39].innerHTML == playerOne
                && play[40].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[38].innerHTML == playerOne
                && play[39].innerHTML == playerOne
                && play[40].innerHTML == playerOne
                && play[41].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[28].innerHTML == playerOne
                && play[29].innerHTML == playerOne
                && play[30].innerHTML == playerOne
                && play[31].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[29].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo) {
                alert('PlayerOne wins')
            }
            if (play[30].innerHTML == playerOne
                && play[31].innerHTML == playerOne
                && play[32].innerHTML == playerOne
                && play[33].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[31].innerHTML == playerOne
                && play[32].innerHTML == playerOne
                && play[33].innerHTML == playerOne
                && play[34].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[21].innerHTML == playerOne
                && play[22].innerHTML == playerOne
                && play[23].innerHTML == playerOne
                && play[24].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[22].innerHTML == playerOne
                && play[23].innerHTML == playerOne
                && play[24].innerHTML == playerOne
                && play[25].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[23].innerHTML == playerOne
                && play[24].innerHTML == playerOne
                && play[25].innerHTML == playerOne
                && play[26].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[24].innerHTML == playerOne
                && play[25].innerHTML == playerOne
                && play[26].innerHTML == playerOne
                && play[27].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[14].innerHTML == playerOne
                && play[15].innerHTML == playerOne
                && play[16].innerHTML == playerOne
                && play[17].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[15].innerHTML == playerOne
                && play[16].innerHTML == playerOne
                && play[17].innerHTML == playerOne
                && play[18].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[16].innerHTML == playerOne
                && play[17].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[19].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[17].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[19].innerHTML == playerOne
                && play[20].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[7].innerHTML == playerOne
                && play[8].innerHTML == playerOne
                && play[9].innerHTML == playerOne
                && play[10].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[8].innerHTML == playerOne
                && play[9].innerHTML == playerOne
                && play[10].innerHTML == playerOne
                && play[11].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[9].innerHTML == playerOne
                && play[10].innerHTML == playerOne
                && play[11].innerHTML == playerOne
                && play[12].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[10].innerHTML == playerOne
                && play[11].innerHTML == playerOne
                && play[12].innerHTML == playerOne
                && play[13].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[0].innerHTML == playerOne
                && play[1].innerHTML == playerOne
                && play[2].innerHTML == playerOne
                && play[3].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[1].innerHTML == playerOne
                && play[2].innerHTML == playerOne
                && play[3].innerHTML == playerOne
                && play[4].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[2].innerHTML == playerOne
                && play[3].innerHTML == playerOne
                && play[4].innerHTML == playerOne
                && play[5].innerHTML == playerOne) {
                alert('PlayerOne wins')
            }
            if (play[3].innerHTML == playerOne
                && play[4].innerHTML == playerOne
                && play[5].innerHTML == playerOne
                && play[6].innerHTML == playerOne) {
                alert('PlayerOne wins')

            }
        } 


    })

}
const button = document.createElement('button')

document.body.appendChild(button)
button.textContent += "Start Game"



for (let i= 0; i< 42; i++){
    button.addEventListener('click', () => {
        play[i].innerHTML = ""
    })
}
function scoreTrack()
