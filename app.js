document.addEventListener('DOMContentLoaded', () => {
    const width = 10;
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector('#score')
    const startStopBttn = document.querySelector('#start-button')

    
    //The tetriminoes
    const lTetrimino = [
        [1, width, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width, width*2+1, width*2],
        [width, width*2, width]
    ]

    const zTetriminoes = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0,width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ]

    const tTetriminoes = [
        [1, width, width+1, width*2+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ]

    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]

    const iTetrimino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width*2, width*3], 
        [1, width+1, width*2+1, width*3+1, width*3+1],
        [width, width*1, width+2, width*3]
    ]

    const theTetriminoes = [lTetrimino, zTetriminoes, tTetriminoes, oTetromino, iTetrimino]

    let currentPosition = 4;
    let current = theTetriminoes[0][0];






})