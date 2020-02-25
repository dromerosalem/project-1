
function setupGame(){

  
  const cellsXcells = 20
  let ship = 389
  let shoots = 0
  const bombs = 0
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

    // 1) Have a single setInterval, that loops/foreeaches through invaders and moves them
    // 2) When a rocket hits an invader, clear the interval, and remove that invader from the array
    // 3) Start your interval again, with one less invader.

  
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
        } //else if (alienDirection === 'left') {
        //   if (leftWall.includes(invaders[i])) {
        //     for (let i = 0; i < invaders.length; i++) {
        //       cells[invaders[i]].classList.remove('invader')
              
        //     }
        //     for (let i = 0; i < invaders.length; i++) {
        //       invaders[i] += cellsXcells 
        //       cells[invaders[i]].classList.add('invader')
        //     }
            
        //     alienDirection = 'right' 
        //   } else {
        //     cells[invaders[i]].classList.remove('invader')
        //     invaders[i] -= invaderMove
        //     cells[invaders[i]].classList.add('invader')
        //   }
        // } 
      }
      // cells[invader].classList.add('invader')    
  
    }, 500)
  })
  // setInterval(() => {
    
  //   // for (let i = 0; i < invaders.length; i++) {
  //   let invaderFront = invaders.slice(-4)
  //   let nuke = (Math.floor(Math.random() * invaderFront.length))

  //   // console.log(invaderFront)
  //   // console.log(nuke)
      
  //   // if (bombs === 0){
  //   bombs = invaderFront[nuke] + cellsXcells
  //   cells[bombs].classList.add('bomb')
  //   // } else { 
  //   //   cells[bombs].classList.remove('bomb')
  //   //   bombs = bombs + cellsXcells
  //   //   cells[bombs].classList.add('bombs')
  //   // }

  //   // }
  // }, 2000)
  

  cells[ship].classList.add('ship')
  //SHIP CODE
  function shoot(){
    
    // shoots = ship - cellsXcells
    // shoots = shoots - cellsXccells
    
    shoots = ship - cellsXcells
    cells[shoots].classList.add('shoot')  

    // 
  
    const shootsMovement = setInterval(() => {

      console.log(shoots)
      // if (shootMove === true){
      //   invaders.forEach(invader => {
      //     if (invader === shoots) {
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
    
            
      // clearInterval(shootsMovement)
      // shootMove = false
      // invaders.splice( invaders.indexOf(invader), 1 )
      // console.log(invaders)
      // cells[invader].classList.remove('shoot')
      // console.log('hello evryone')
      // cells[invader].classList.remove('invader')
                  
      // }
      // })
       
      // if (shoots === 0) {
      // shoots = ship - cellsXcells
      // cells[shoots].classList.add('shoot')  
      // } else  {
      //   cells[shoots].classList.remove('shoot')
      //   shoots = shoots - cellsXcells
      //   cells[shoots].classList.add('shoot')  
      // }
      // } 
     
      
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

  


  
}


window.addEventListener('DOMContentLoaded', setupGame)