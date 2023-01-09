console.log('Hello world');



function addMovie () {
    document.createElement('li');
let movie = document.querySelector('#message');
let movieBtn = document.querySelector('#addbtn');
let inputField = document.querySelector('#textInput');
    movie.textContent += inputField.textContent
    console.log(movie.textContent)
}

console.log (inputField);
console.log(movieBtn);
console.log(movie);
movieBtn.addEventListener('click', addMovie);

console.log('Hello world');
let inputField;
let movie;
let movieTitle;
function addMovie (event) {
    
   inputField = document.querySelector('input')
   movie = document.createElement ('li')
movieTitle = '';
movieTitle.textContent = inputField
movie.appendChild(movieTitle)
}

