
function setupGame(){

  
  const cellsXcells = 20
  let ship = 389
  
  // let bombs = 0
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

  let start = true

 
 


  //INVAERS MOVEMENT WHAT ARE NOT MOVING DOWN
  
  
    
  button.addEventListener('click',() => {
    
    button.blur()

    if (start === true){
      start = false
        
        
       
      //invaders movement
      
      setInterval(() => {

        for (let i = 0; i < invaders.length; i++) {
          if (alienDirection === 'right') {
          
            if (rightWall.includes(invaders[i])) {
              for (let i = invaders.length - 1; i >= 0; i--) {
                cells[invaders[i]].classList.remove('invader')
                invaders[i] += cellsXcells
                cells[invaders[i]].classList.add('invader')       
              }
              return alienDirection = 'left' 
            } else {
              cells[invaders[i]].classList.remove('invader')
              invaders[i] += invaderMove
              cells[invaders[i]].classList.add('invader')
            }
          } else if (alienDirection === 'left') {
            if (leftWall.includes(invaders[i])) {
              for (let i = 0; i < invaders.length; i++) {
                cells[invaders[i]].classList.remove('invader')
              
              }
              for (let i = 0; i < invaders.length; i++) {
                invaders[i] += cellsXcells 
                cells[invaders[i]].classList.add('invader')
              }
            
              alienDirection = 'right' 
            } else {
              cells[invaders[i]].classList.remove('invader')
              invaders[i] -= invaderMove
              cells[invaders[i]].classList.add('invader')
            }
          } 
        }
        // cells[invader].classList.add('invader')    
  
      }, 500)

    
      //bombs generate
      const generateBomb = setInterval(() => { 
        let bomb = 0
        const invaderFront = invaders.slice(-4)
        const nuke = (Math.floor(Math.random() * invaderFront.length))
        bomb = invaderFront[nuke] += cellsXcells
      
      
        const dropBombInterval = setInterval(() => {
          if (bomb >= 380){
            cells[bomb].classList.remove('bomb')
            clearInterval(dropBombInterval)
          
          } else {
            cells[bomb].classList.remove('bomb')
            bomb += cellsXcells
            cells[bomb].classList.add('bomb')
            console.log(cells[bomb])
            console.log(bomb)
          }
        
        }, 200)
            
      }, 2000)
      cells[ship].classList.add('ship')
      
      //SHIP CODE
      
  


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
    }
  })
  function shoot() {
    let shoots = 0
    // shoots = ship - cellsXcells
    // shoots = shoots - cellsXccells

    shoots = ship - cellsXcells
    cells[shoots].classList.add('shoot')  

    // 

    const shootsMovement = setInterval(() => {

      console.log(shoots)
      if (shoots <= 19){
        clearInterval(shootsMovement)
        cells[shoots].classList.remove('shoot')
      } else {

        cells[shoots].classList.remove('shoot')
        shoots -= 20
        cells[shoots].classList.add('shoot')  

        if (cells[shoots].classList.contains('invader') === true) {    
          //  const elem = invaders.length
          invaders.splice(invaders.indexOf(cells[shoots]))
          console.log(invaders)    
          cells[shoots].classList.remove('invader')
          cells[shoots].classList.remove('shoot')
          clearInterval(shootsMovement)
        }
  
      }
    
    }, 500)
  }
  
  
  
  
}


window.addEventListener('DOMContentLoaded', setupGame)