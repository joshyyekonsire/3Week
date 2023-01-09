

console.log ('JS connected')


let counter = document.querySelector('#counter');
let themeBtn = document.querySelectorAll('.theme-buttons')
const plusBtn = document.querySelector('#plus-btn')
let count = 0;
const increase = () => {
    count++
    console.log(count)
    counter.textContent = count
}
plusBtn.addEventListener('click', increase)

const minusBtn = document.querySelector('#minus-btn')
const decrease = () => {
    count--
    console.log(count)
    counter.textContent = count
}
minusBtn.addEventListener('click', decrease)

const resetBtn = document.querySelector('#reset-btn')
const reset = (event) => {
    console.log(event)
    count = 0;
    console.log(count)
    counter.textContent = count
}
resetBtn.addEventListener('click', reset)

function selectTheme (event) {
    console.log(event.target.textContent);
    themeBtn[i].addEventListener('click', selectTheme);
    
}


// for (let i = 0; i<theeBtn.length; i++){
//     console.log(themeBtn[i].textContent)
// }