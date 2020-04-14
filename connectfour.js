const title = document.createElement('h1')
document.body.appendChild(title)
title.textContent += "Connect Four"

for (let i = 0; i < 42; i++) {
    let emptyBoard = document.createElement('div')
    emptyBoard.classList.add('box')
    document.body.appendChild(emptyBoard)

}

const playerOne = "X"
const playerTwo = "O"
let playerTurn;
let scoreOne = 0
let scoreTwo = 0

const button = document.createElement('button')
document.body.appendChild(button)
button.textContent += "Reset"

for (let i = 0; i < 42; i++) {
    button.addEventListener('click', () => {
        play[i].innerHTML = ""
    })
}
// Score boxes added
let scoreBox1 = document.createElement('div')
scoreBox1.classList.add('boardX')
document.body.appendChild(scoreBox1)

let scoreBox2 = document.createElement('div')
scoreBox2.classList.add('boardO')
document.body.appendChild(scoreBox2)

scoreBox1.innerHTML = 'playerI =' + scoreOne
scoreBox2.innerHTML = 'PlayerII =' + scoreTwo


const play = document.querySelectorAll('.box')

for (let i = 0; i < play.length; i++) {
    play[i].addEventListener('click', () => {
        
        // making first move to bottom row
        if (i < 7) {
            if (play[i + 35].innerHTML == "") {
                if (playerTurn === 'O') {
                    play[i + 35].innerHTML = playerTwo
                    playerTurn = 'X'
                } else {
                    play[i + 35].innerHTML = playerOne
                    playerTurn = 'O'
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
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
                
            } 
            if (play[i].innerHTML == playerOne
                && play[i + 7].innerHTML == playerOne
                && play[i + 14].innerHTML == playerOne
                && play[i + 21].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne


            }
            if (play[i + 7].innerHTML == playerOne
                && play[i + 14].innerHTML == playerOne
                && play[i + 21].innerHTML == playerOne
                && play[i + 28].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne

            }
            if (play[i + 35].innerHTML == playerTwo
                && play[i + 28].innerHTML == playerTwo
                && play[i + 21].innerHTML == playerTwo
                && play[i + 14].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[i].innerHTML == playerTwo
                && play[i + 7].innerHTML == playerTwo
                && play[i + 14].innerHTML == playerTwo
                && play[i + 21].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            // Diagonal winning combo for player two
            if (play[i + 7].innerHTML == playerTwo
                && play[i + 14].innerHTML == playerTwo
                && play[i + 21].innerHTML == playerTwo
                && play[i + 28].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[6].innerHTML == playerTwo
                && play[12].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[12].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[18].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo
                && play[36].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[5].innerHTML == playerTwo
                && play[11].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[11].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[29].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo

            }
            if (play[17].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[29].innerHTML == playerTwo
                && play[35].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[4].innerHTML == playerTwo
                && play[10].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[22].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[10].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[22].innerHTML == playerTwo
                && play[28].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[13].innerHTML == playerTwo
                && play[19].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[19].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo
                && play[37].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[20].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo
                && play[38].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[0].innerHTML == playerTwo
                && play[8].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[8].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[16].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo
                && play[40].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[6].innerHTML == playerTwo
                && play[12].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[1].innerHTML == playerTwo
                && play[9].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[9].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[33].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[17].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[33].innerHTML == playerTwo
                && play[41].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[7].innerHTML == playerTwo
                && play[15].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo

            }
            if (play[15].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo
                && play[39].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[14].innerHTML == playerTwo
                && play[22].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo
                && play[38].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[2].innerHTML == playerTwo
                && play[10].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[10].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo
                && play[34].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[3].innerHTML == playerTwo
                && play[11].innerHTML == playerTwo
                && play[19].innerHTML == playerTwo
                && play[27].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            // Diagonal winning combo for playerOne
            if (play[i + 7].innerHTML == playerOne
                && play[i + 14].innerHTML == playerOne
                && play[i + 21].innerHTML == playerOne
                && play[i + 28].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[6].innerHTML == playerOne
                && play[12].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[24].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[12].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[24].innerHTML == playerOne
                && play[30].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[18].innerHTML == playerOne
                && play[24].innerHTML == playerOne
                && play[30].innerHTML == playerOne
                && play[36].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[5].innerHTML == playerOne
                && play[11].innerHTML == playerOne
                && play[17].innerHTML == playerOne
                && play[23].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[11].innerHTML == playerOne
                && play[17].innerHTML == playerOne
                && play[23].innerHTML == playerOne
                && play[29].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[17].innerHTML == playerOne
                && play[23].innerHTML == playerOne
                && play[29].innerHTML == playerOne
                && play[35].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[4].innerHTML == playerOne
                && play[10].innerHTML == playerOne
                && play[16].innerHTML == playerOne
                && play[22].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[10].innerHTML == playerOne
                && play[16].innerHTML == playerOne
                && play[22].innerHTML == playerOne
                && play[28].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[13].innerHTML == playerOne
                && play[19].innerHTML == playerOne
                && play[25].innerHTML == playerOne
                && play[31].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[19].innerHTML == playerOne
                && play[25].innerHTML == playerOne
                && play[31].innerHTML == playerOne
                && play[37].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[20].innerHTML == playerOne
                && play[26].innerHTML == playerOne
                && play[32].innerHTML == playerOne
                && play[38].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[0].innerHTML == playerOne
                && play[8].innerHTML == playerOne
                && play[16].innerHTML == playerOne
                && play[24].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[8].innerHTML == playerOne
                && play[16].innerHTML == playerOne
                && play[24].innerHTML == playerOne
                && play[32].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[16].innerHTML == playerOne
                && play[24].innerHTML == playerOne
                && play[32].innerHTML == playerOne
                && play[40].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[6].innerHTML == playerOne
                && play[12].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[24].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[1].innerHTML == playerOne
                && play[9].innerHTML == playerOne
                && play[17].innerHTML == playerOne
                && play[25].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[9].innerHTML == playerOne
                && play[17].innerHTML == playerOne
                && play[25].innerHTML == playerOne
                && play[33].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[17].innerHTML == playerOne
                && play[25].innerHTML == playerOne
                && play[33].innerHTML == playerOne
                && play[41].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[7].innerHTML == playerOne
                && play[15].innerHTML == playerOne
                && play[23].innerHTML == playerOne
                && play[31].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[15].innerHTML == playerOne
                && play[23].innerHTML == playerOne
                && play[31].innerHTML == playerOne
                && play[39].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[14].innerHTML == playerOne
                && play[22].innerHTML == playerOne
                && play[30].innerHTML == playerOne
                && play[38].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[2].innerHTML == playerOne
                && play[10].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[26].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[10].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[26].innerHTML == playerOne
                && play[34].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[3].innerHTML == playerOne
                && play[11].innerHTML == playerOne
                && play[19].innerHTML == playerOne
                && play[27].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            // Horizontal winning combo playerTwo
            if (play[35].innerHTML == playerTwo
                && play[36].innerHTML == playerTwo
                && play[37].innerHTML == playerTwo
                && play[38].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + score

            }
            if (play[36].innerHTML == playerTwo
                && play[37].innerHTML == playerTwo
                && play[38].innerHTML == playerTwo
                && play[39].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[37].innerHTML == playerTwo
                && play[38].innerHTML == playerTwo
                && play[39].innerHTML == playerTwo
                && play[40].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[38].innerHTML == playerTwo
                && play[39].innerHTML == playerTwo
                && play[40].innerHTML == playerTwo
                && play[41].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[28].innerHTML == playerTwo
                && play[29].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[29].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[30].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo
                && play[33].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[31].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo
                && play[33].innerHTML == playerTwo
                && play[34].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[21].innerHTML == playerTwo
                && play[22].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[22].innerHTML == playerTwo
                && play[23].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[23].innerHTML == playerTwo
                && play[24].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[24].innerHTML == playerTwo
                && play[25].innerHTML == playerTwo
                && play[26].innerHTML == playerTwo
                && play[27].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[14].innerHTML == playerTwo
                && play[15].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[15].innerHTML == playerTwo
                && play[16].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[16].innerHTML == playerTwo
                && play[17].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[19].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[17].innerHTML == playerTwo
                && play[18].innerHTML == playerTwo
                && play[19].innerHTML == playerTwo
                && play[20].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[7].innerHTML == playerTwo
                && play[8].innerHTML == playerTwo
                && play[9].innerHTML == playerTwo
                && play[10].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[8].innerHTML == playerTwo
                && play[9].innerHTML == playerTwo
                && play[10].innerHTML == playerTwo
                && play[11].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[9].innerHTML == playerTwo
                && play[10].innerHTML == playerTwo
                && play[11].innerHTML == playerTwo
                && play[12].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[10].innerHTML == playerTwo
                && play[11].innerHTML == playerTwo
                && play[12].innerHTML == playerTwo
                && play[13].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[0].innerHTML == playerTwo
                && play[1].innerHTML == playerTwo
                && play[2].innerHTML == playerTwo
                && play[3].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[1].innerHTML == playerTwo
                && play[2].innerHTML == playerTwo
                && play[3].innerHTML == playerTwo
                && play[4].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[2].innerHTML == playerTwo
                && play[3].innerHTML == playerTwo
                && play[4].innerHTML == playerTwo
                && play[5].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            if (play[3].innerHTML == playerTwo
                && play[4].innerHTML == playerTwo
                && play[5].innerHTML == playerTwo
                && play[6].innerHTML == playerTwo) {
                alert('PlayerTwo wins')
                scoreTwo++
                scoreBox2.innerHTML = 'playerII =' + scoreTwo
            }
            // Horizontal winning combo playerOne
            if (play[35].innerHTML == playerOne
                && play[36].innerHTML == playerOne
                && play[37].innerHTML == playerOne
                && play[38].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[36].innerHTML == playerOne
                && play[37].innerHTML == playerOne
                && play[38].innerHTML == playerOne
                && play[39].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[37].innerHTML == playerOne
                && play[38].innerHTML == playerOne
                && play[39].innerHTML == playerOne
                && play[40].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[38].innerHTML == playerOne
                && play[39].innerHTML == playerOne
                && play[40].innerHTML == playerOne
                && play[41].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[28].innerHTML == playerOne
                && play[29].innerHTML == playerOne
                && play[30].innerHTML == playerOne
                && play[31].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[29].innerHTML == playerTwo
                && play[30].innerHTML == playerTwo
                && play[31].innerHTML == playerTwo
                && play[32].innerHTML == playerTwo) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[30].innerHTML == playerOne
                && play[31].innerHTML == playerOne
                && play[32].innerHTML == playerOne
                && play[33].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[31].innerHTML == playerOne
                && play[32].innerHTML == playerOne
                && play[33].innerHTML == playerOne
                && play[34].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
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
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne

            }
            if (play[23].innerHTML == playerOne
                && play[24].innerHTML == playerOne
                && play[25].innerHTML == playerOne
                && play[26].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[24].innerHTML == playerOne
                && play[25].innerHTML == playerOne
                && play[26].innerHTML == playerOne
                && play[27].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[14].innerHTML == playerOne
                && play[15].innerHTML == playerOne
                && play[16].innerHTML == playerOne
                && play[17].innerHTML == playerOne) {
                alert('PlayerOne wins')
                score++
                scoreBox1.innerHTML = 'playerI =' + score
            }
            if (play[15].innerHTML == playerOne
                && play[16].innerHTML == playerOne
                && play[17].innerHTML == playerOne
                && play[18].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[16].innerHTML == playerOne
                && play[17].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[19].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[17].innerHTML == playerOne
                && play[18].innerHTML == playerOne
                && play[19].innerHTML == playerOne
                && play[20].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[7].innerHTML == playerOne
                && play[8].innerHTML == playerOne
                && play[9].innerHTML == playerOne
                && play[10].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[8].innerHTML == playerOne
                && play[9].innerHTML == playerOne
                && play[10].innerHTML == playerOne
                && play[11].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[9].innerHTML == playerOne
                && play[10].innerHTML == playerOne
                && play[11].innerHTML == playerOne
                && play[12].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[10].innerHTML == playerOne
                && play[11].innerHTML == playerOne
                && play[12].innerHTML == playerOne
                && play[13].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[0].innerHTML == playerOne
                && play[1].innerHTML == playerOne
                && play[2].innerHTML == playerOne
                && play[3].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[1].innerHTML == playerOne
                && play[2].innerHTML == playerOne
                && play[3].innerHTML == playerOne
                && play[4].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[2].innerHTML == playerOne
                && play[3].innerHTML == playerOne
                && play[4].innerHTML == playerOne
                && play[5].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne
            }
            if (play[3].innerHTML == playerOne
                && play[4].innerHTML == playerOne
                && play[5].innerHTML == playerOne
                && play[6].innerHTML == playerOne) {
                alert('PlayerOne wins')
                scoreOne++
                scoreBox1.innerHTML = 'playerI =' + scoreOne

            }
        }


    })

}










