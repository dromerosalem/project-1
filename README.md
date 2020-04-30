### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive
# SPACE Z <img src= assets/enemy.png height=50 width=50 />

## Overview

Let's start out with something fun - **a game!**

As part of the software engineering bootcamp program the first project is to build a game from the scratch with the techlogies we have learned in the previous 3 weeks of intensive **JavaScript** so we could chalenge ourselfs with our adquired skills.

I always was facinated with the space so from the selection of games to choose, I deceided to go for the classic arcade game Space Invaders and make an adaptation of it with sounds effects taken from the movies Star Wars and inspared from Idepennce Day movie for the styling the final product I got is somehting that I ca be proud of.

 
You can play the game [here](https://dromerosalem.github.io/project-1/) 

This game was later adapted and shared by a blogger with my permission, and went viral in Mexico in his facebook fan page with more than 4 million followers. You can check the adaptation [here](https://coronagame.net/)   


## The Brief 

- **Render a game in the browser**
- **Design logic for winning & visually display which player won**
- **Include separate HTML / CSS / JavaScript files**
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **Javascript** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
- Use **semantic markup** for HTML and CSS (adhere to best practices)


## The Technologies used 

- HTML5
- CSS3
- JavaScript (ES6)
- Git and GitHub
- Google Fonts

### The Grid

The game is built using a grid. A 20 x 20 square is created using JavaScript. HTML divs are created using a for loop and appended as children of the grid.

 ```js

  const cellsXcells = 20
  const totalGrid = cellsXcells * cellsXcells
  const grid = document.querySelector('.grid')
  const cells = []


 for (let i = 0; i < totalGrid; i++) {

    const cell = document.createElement('div')
    // cell.innerHTML = i
    cell.classList.add('cell')
    grid.appendChild(cell)
    cells.push(cell)

  }

 ```
 During actual gameplay, the grid isn't visible, but is highlighed below for demonstration purposes:
 
 ![](./assets/grid.png)



