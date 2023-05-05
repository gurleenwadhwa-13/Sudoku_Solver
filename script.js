document.addEventListener('DOMContentLoaded', () => {
    const width = 10;
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector('#score')
    const startStopBttn = document.querySelector('#start-button')
    let nextRandom = 0

    
    //The tetriminoes
    const lTetrimino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width]
    ]

    const zTetriminoes = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0,width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ]

    const tTetriminoes = [
        [1, width, width+1, width*2+1],
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

    let currentPosition = 4
    let currentRotation = 2

    //randomly pick a tetrimino and its first rotation. 
    let random = Math.floor(Math.random()*theTetriminoes.length)
    let current = theTetriminoes[random][currentRotation]

    //draw the rotation from a random tetrimino
    function draw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    function undraw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }

    //making the tetrimino move down every second. 
    timerID = setInterval(moveDown, 1000)

    //assigning functions to keyCodes
    function control(e) {
        if(e.keyCode === 37){
            moveLeft()
        }else if(e.keyCode === 38){
            rotate()
        }else if(e.keyCode === 39){
            moveRight()
        }else if(e.keyCode === 40){
            moveDown()
        }
    }
    document.addEventListener('keyup', control)


    function moveDown(){
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

    function freeze(){
        if(current.some(index => squares[currentPosition + index + width].classList.contains('occupied'))){
            current.forEach(index => squares[currentPosition + index].classList.add("occupied"))

            //start a new tetrimino sequence from here on
            random = nextRandom
            nextRandom = Math.floor(Math.random() * theTetriminoes.length)
            current = theTetriminoes[random][currentRotation]
            currentPosition = 4
            draw()
            displayMiniGrid()
        }
    }

    //Moving our tetrimino left, unless there is a blockage or end of grid has been reached. 
    function moveLeft(){
        undraw()
        const isAtLeftPos = current.some(index => (currentPosition+index) % width == 0)

        //Allowing the tetrimino to go left if its current position is not the extreme left
        if(!isAtLeftPos) currentPosition -= 1
            
        //if the last row is reached/ the current blocks are already occupied with existing tetrimino, then 
        if(current.some(index => squares[currentPosition + index].classList.contains('occupied'))){
            currentPosition += 1
        }
        draw()
    }


    function moveRight(){
        undraw()
        const isAtRightPos = current.some(index => (currentPosition+index) % width == width-1)

        //Allowing the tetrimino to go right if its current position is not the extreme right
        if(!isAtRightPos) currentPosition += 1

        if(current.some(index => squares[currentPosition+index].classList.contains('occupied'))){
            currentPosition -=1
        }
        draw()
    }

    function rotate(){
        undraw()
        currentRotation++
        
        //If the current rotation gets to 4, make it go back to 0. 
        if(currentRotation === current.length){
            currentRotation = 0 
        }

        //Assigning the new rotated tetrimino as the new current. 
        current = theTetriminoes[random][currentRotation]
        draw()
    }

    const displayMiniGrid = document.querySelectorAll('.mini-grid div')
    const displayWidth = 4
    let displayIndex = 0

    //the tetrominos without rotations
    const upNextTetrominoes = [
        [1, displayWidth+1, displayWidth*2+1, 2],
        [0, displayWidth, displayWidth+1, displayWidth*2+1],
        [1, displayWidth, displayWidth+1, displayWidth+2],
        [0, 1, displayWidth, displayWidth+1],
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1]
    ]

    function displayNext(){
        displayMiniGrid.forEach(square => {
            square.classList.remove('tetromino')
        })

        upNextTetrominoes[nextRandom].forEach(index => {
            displayMiniGrid[displayIndex]
        })
    }















    







})