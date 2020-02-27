
function setupGame() {

  const audio = document.querySelector('#audio') 
  const cellsXcells = 20
  let ship = 389
  const totalGrid = cellsXcells * cellsXcells
  const grid = document.querySelector('.grid')
  const cells = []
  const invaders = [7, 9, 11, 13, 26, 28, 30, 32, 34, 47, 49, 51, 53]
  const button = document.querySelector('button')
  const rightWall = [19, 39, 59, 79, 99, 119, 139, 159, 179, 199, 219, 239, 259, 279, 299, 319, 339, 359, 379, 399]
  const leftWall = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380]
  let alienDirection = 'right'
  let life = 3
  const invaderMove = 1
  const miniGrid = document.querySelector('.miniGrid')
  const getLifes = Array.from(document.querySelectorAll('.cellLifes'))
  let invadersMovement
  let generateBomb
  // let dropBombInterval



  // for (let i = 0; i < totalLifes.length; i++) {
  //   lifeCell = document.createElement('div')
  //   lifeCell.classList.add('cellLifes')
  //   lifeCell.classList.add('ship')
  //   lifes.appendChild(lifeCell)
  // }


  // lifes.innerHTML = `${life}`



  for (let i = 0; i < totalGrid; i++) {

    const cell = document.createElement('div')
    // cell.innerHTML = i
    cell.classList.add('cell')
    grid.appendChild(cell)
    cells.push(cell)

  }

  let start = true
  const music = document.querySelector('#music')
  
  const startScreen = document.querySelector('.startScreen')
  const letsGo = document.querySelector('#letsGo')
  const counter = document.querySelector('.display')
  let timer = 11
  grid.style.display = 'none'
  miniGrid.style.display = 'none'
  counter.style.display = 'none'

  letsGo.addEventListener('click', () => {    
    audio.src = 'countdown.mp3'
    audio.play()
    const IntervalID = setInterval(() => {
      if ( timer === 0){
        clearInterval(IntervalID)
        
        grid.style.display = 'flex'
        miniGrid.style.display = 'block'
        startScreen.style.display = 'none'
        counter.style.display = 'none'
      
      } else {
        startScreen.style.display = 'none'
        counter.style.display = 'block'
        timer -= 1
        counter.innerHTML = timer
         
      }
    }, 1000)
    
  })


    
  


  
  //INVAERS MOVEMENT WHAT ARE NOT MOVING DOWN

  button.addEventListener('click', () => {
    

  
    music.src = 'attack.mp3'
    music.play()
    button.blur()  
    
    

    if (start === true) {
      start = false



      //invaders movement

      invadersMovement = setInterval(() => {


        for (let i = 0; i < invaders.length; i++) {
          if (invaders[i] > 380 ){
    
            clearInterval(invadersMovement)
            clearInterval(generateBomb)
            grid.style.display = 'none'
            miniGrid.style.display = 'none'
            audio.src = 'gameOver.mp3'
            audio.play()
            music.pause()
            gameOver.style.display = 'block'
          }
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

      }, 300)

      const gameOver = document.querySelector('.gameOver')
      //bombs generate
      generateBomb = setInterval(() => {
        let bomb = 0
        const invaderFront = invaders.slice(-4)
        const nuke = (Math.floor(Math.random() * invaderFront.length))
        bomb = invaderFront[nuke] += cellsXcells
        audio.src = 'rocket.mp3'
        audio.play()

        const dropBombInterval = setInterval(() => {
         
          if (bomb >= 380) {
            cells[bomb].classList.remove('bomb')
            clearInterval(dropBombInterval)

          } else {
            cells[bomb].classList.remove('bomb')
            bomb += cellsXcells
            cells[bomb].classList.add('bomb')
            // console.log(cells[bomb])
            // console.log(bomb)
          }

          if (ship === bomb) {
            cells[bomb].classList.remove('bomb')
            cells[ship].classList.remove('ship')
            ship = 389
            cells[ship].classList.add('ship')
            life -= 1
            audio.src = 'explosion.mp3'
            audio.play()
            getLifes[life].classList.remove('ship')
            if (life === 0) {
          
              clearInterval(dropBombInterval)
              clearInterval(generateBomb)
              grid.style.display = 'none'
              miniGrid.style.display = 'none'
              music.pause()
              audio.src = 'gameOver.mp3'
              audio.play()
              gameOver.style.display = 'block'
            }
            
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

        } else if (event.code === 'Space') {
          shoot()
          audio.src = 'laser.mp3'
          audio.play()
        }

      })
    }
  })
  const endGame = document.querySelector('.hidden')
  function shoot() {
    let shoots = 0
    // shoots = ship - cellsXcells
    // shoots = shoots - cellsXccells

    shoots = ship - cellsXcells
    cells[shoots].classList.add('shoot')

    // 

    const shootsMovement = setInterval(() => {
      if (invaders.length === 0){
        clearInterval(shootsMovement)
        grid.style.display = 'none'
        miniGrid.style.display = 'none'
        audio.src = 'victory.mp3'
        music.pause()
        audio.play()
        endGame.style.display = 'block'

        clearInterval(invadersMovement)
        clearInterval(generateBomb)
        // clearInterval(dropBombInterval)
      } else if (shoots <= 19) {
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
          audio.src = 'desintegration.mp3'
          audio.play()
          cells[shoots].classList.remove('invader')
          cells[shoots].classList.remove('shoot')
          clearInterval(shootsMovement)
        } 

      }

    }, 200)
  }

  


}


window.addEventListener('DOMContentLoaded', setupGame)




