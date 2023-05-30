let win=3
let draw=1
let loss=0

function footballPoints(wins, draws, losses) {
    return win * wins + draw * draws + loss * losses
}



console.log( footballPoints(3, 4, 2)) 
console.log(footballPoints(5, 0, 2)) 
console.log(footballPoints(5, 8, 1)) 