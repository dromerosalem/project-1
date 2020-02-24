function setupGame() {
  const cellsXcells = 20
  const totalGrid = cellsXcells * cellsXcells
  const grid = document.querySelector('.grid')
  const cells = []
  const invadersPositions = [7, 9, 11, 13, 26, 28, 30, 32, 34, 47, 49, 51, 53]
  const button = document.querySelector('button')
  const rightWall = [19, 39, 59, 79, 99, 119, 139, 159, 179, 199, 219, 239, 259, 279, 299, 319, 339, 359, 379, 399]
  const leftWall = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380]
  const invaderMove = 1
  for (let i = 0; i < totalGrid; i++) {
    const cell = document.createElement('div')
    cell.innerHTML = i
    cell.classList.add('cell')
    grid.appendChild(cell)
    cells.push(cell)
  }
  for (let i = 0; i < rightWall.length; i++) {
    cells[rightWall[i]].classList.add('rightWall')
  }
  for (let i = 0; i < leftWall.length; i++) {
    cells[leftWall[i]].classList.add('leftWall')
  }
  let alienDirection = 'right'
  button.addEventListener('click', () => {
    
    setInterval(() => {
      if (alienDirection === 'right') {

        for (let i = 0; i < invadersPositions.length; i++) {

          if (cells[invadersPositions[i]].classList.contains('rightWall')) {

            for (let i = 0; i < invadersPositions.length; i++) {
              
              cells[parseInt(invadersPositions[i])].classList.remove('invader')
              invadersPositions[i] += cellsXcells
              cells[parseInt(invadersPositions[i])].classList.add('invader')
            }
            alienDirection = 'left'
          } else {
            cells[parseInt(invadersPositions[i])].classList.remove('invader')
            invadersPositions[i] += invaderMove
            cells[parseInt(invadersPositions[i])].classList.add('invader')
          }
        }
      } //else if (alienDirection === 'left') {
      //   for (let i = 0; i < invadersPositions.length; i++) {
      //     if (cells[invadersPositions[i]].classList.contains('leftWall')) {
      //       for (let i = 0; i < invadersPositions.length; i++) {
      //         cells[parseInt(invadersPositions[i])].classList.remove('invader')
      //         invadersPositions[i] += cellsXcells
      //         cells[parseInt(invadersPositions[i])].classList.add('invader')
      //       }
      //       alienDirection = 'right'
      //     } else {
      //       cells[parseInt(invadersPositions[i])].classList.remove('invader')
      //       invadersPositions[i] -= invaderMove
      //       cells[parseInt(invadersPositions[i])].classList.add('invader')
      //     }
      //   }
      //}
    }, 200)
  })
}
window.addEventListener('DOMContentLoaded', setupGame)
