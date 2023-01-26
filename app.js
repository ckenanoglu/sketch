const input = document.getElementById('sizeAdjust').value;
let on = true;
function fillBoard(size) {
    let canvas = document.querySelector('.canvas');
    let cells = canvas.querySelectorAll('div');
    cells.forEach((div) => div.remove());
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
         
    let totalCells = size * size;
    for(let i=0; i<totalCells; i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', colorCell)
        cell.style.backgroundColor = 'white';
        canvas.insertAdjacentElement('beforeend', cell);
    }
}

fillBoard(input);

function changeSize(input){
    if (input >= 2 && input <= 200){
        fillBoard(input);
    }else{
        alert('Please enter a value between 3 and 100');
        return
    }
}
function colorCell(){
    if (on){
        
    if (color === 'rainbow'){
        this.style.backgroundColor = `hsl(${Math.random() *360}, 100% , 50%)`;
    }else{
        this.style.backgroundColor = color; 
    }
    }
}
function changeColor(choice){
    color = choice;
}

function reset() {
    let canvas = document.querySelector('.canvas');
    let cells = canvas.querySelectorAll('div');
    cells.forEach((div) =>div.style.backgroundColor = 'white');
}
document.querySelector('.canvas').addEventListener('click', ()=>{
    on = !on;
})