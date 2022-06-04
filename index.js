window.onload = function() {
    createTiles()
    setEventListeners()
}

createTiles = function(dimension = 16) {
    const container = document.getElementById('tile-container')
    for (let i = 0; i < dimension * dimension; i++){
        const newDiv = document.createElement('div')
        newDiv.className = 'tiles'

        //-1 pixel for each side because of the border
        newDiv.style.height = `${800 / dimension - 2}px`
        newDiv.style.width = `${800 / dimension - 2}px`
        container.appendChild(newDiv)
    }
    setEventListeners()
}

setEventListeners = function(){
  const tiles = document.getElementsByClassName('tiles')

    for(let i = 0; i < tiles.length; i++){
        tiles[i].addEventListener('mouseenter', () =>{

            const colorArray = []
            for(let i = 0; i < 3; i++){
            colorArray[i] = Math.floor(Math.random() * 256 + 1)
            }
            
            tiles[i].style.backgroundColor = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`
        })
    }
}

changeDimensions = function(){
    const newBoard = prompt('How many tiles would you like to have? Max. 100')
    if(newBoard > 0 && newBoard <= 100){
        clearTiles()
        createTiles(newBoard)
    } else{
        alert('Invalid number')
    }
}

clearTiles = function(){
    const parent = document.getElementById('tile-container')
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}






