
function setupGame(){

  
  const cellsXcells = 20
  let ship = 389
  let shoots = 0
  const totalGrid = cellsXcells * cellsXcells
  const grid = document.querySelector('.grid')
  const cells = []
  const invaders = [7, 9, 11, 13, 26, 28, 30, 32, 34, 47, 49, 51, 53]
  const button = document.querySelector('button')
  // const rightWall = [19]
  const rightWall = [19, 39, 59, 79, 99, 119, 139, 159, 179, 199, 219, 239, 259, 279, 299, 319, 339, 359, 379, 399]
  const leftWall = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380]
  console.log(cells)
  let alienDirection = 'right'
  
  const invaderMove = 1

  for (let i = 0; i < totalGrid; i++) {
    
    const cell = document.createElement('div')
    cell.innerHTML = i
    cell.classList.add('cell') 
    grid.appendChild(cell)
    cells.push(cell)
    

  }
  //INVAERS MOVEMENT WHAT ARE NOT MOVING DOWN
  button.addEventListener('click',() => {

    invaders.forEach((invader)=> {
      cells[invader].classList.add('invader')
  
      setInterval(() => {
        if (alienDirection === 'right') {
          
          if (rightWall.includes(invader)) {
           
            cells[invader].classList.remove('invader')
            invader += cellsXcells
            cells[invader].classList.add('invader')
            alienDirection = 'left' 
            
            
          } else {
            cells[invader].classList.remove('invader')
            invader += invaderMove
            cells[invader].classList.add('invader')
          }
        } else if (alienDirection === 'left') {
          if (leftWall.includes(invader)) {
            cells[invader].classList.remove('invader')
            invader += cellsXcells 
            cells[invader].classList.add('invader')
            alienDirection = 'right' 
          } else {
            cells[invader].classList.remove('invader')
            invader -= invaderMove
            cells[invader].classList.add('invader')
          }
        } 
  
      }, 500)
    })
  })

  cells[ship].classList.add('ship')
  //SHIP CODE
  function shoot(){
    
    // shoots = ship - cellsXcells
    // shoots = shoots - cellsXccells

    setInterval(() => {
      if (shoots === 0) {
        shoots = ship - cellsXcells
        cells[shoots].classList.add('shoot')  
      } else {
        cells[shoots].classList.remove('shoot')
        shoots = shoots - cellsXcells
        cells[shoots].classList.add('shoot')  
      }
      // if (cells.contains('invader') && cells.contains('shoot')){
      //   cells[shoots].classList.remove('shoot')
      //   cells[invaders].classList.remove('invader')
      // }
    }, 500)
  }


  document.addEventListener('keydown', (event) => {
    // console.log(event)
    if (event.key === 'ArrowRight') {
      if (ship === cells.length - 1) {
        return
      }
      cells[ship].classList.remove('ship')
      ship += 1
      cells[ship].classList.add('ship')
    } else if (event.key === 'ArrowLeft') {
      if (ship === 380) {
        return
      }
      cells[ship].classList.remove('ship')
      ship -= 1
      cells[ship].classList.add('ship')

    } else if (event.code === 'Space'){
      shoot()
    }
      
  })


  //COLISION

  if (shoots === invaders) {
    console.log('hello evryone')
    cells[shoots].classList.remove('shoot')
    cells[invaders].classList.remove('invader')
  }
}


window.addEventListener('DOMContentLoaded', setupGame)