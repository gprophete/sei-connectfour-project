let emptyBoard;
const playerOne = "X"
const playerTwo = "O"
const winCombos = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 5, 10, 15],
    [12, 9, 6, 3],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
]

const play = document.querySelectorAll('.box')

for (let i = 0; i < play.length; i++) {
    play[i].addEventListener('click', () => {
        play[i].innerHTML = playerOne
    })
}


