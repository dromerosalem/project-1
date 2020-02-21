function setupGame(){

  
  const cellsXcells = 20
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

  button.addEventListener('click',() => {

    invaders.forEach((invader)=> {
      cells[invader].classList.add('invader')
  
      setInterval(() => {
        if (alienDirection === 'right') {
          invaders.forEach(invader => {
            
          })
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


}


window.addEventListener('DOMContentLoaded', setupGame)