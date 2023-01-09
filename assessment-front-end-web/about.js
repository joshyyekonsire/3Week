console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submission was successful');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let photoListener = document.querySelector('#duckPhoto');

photoListener.addEventListener('mouseover', () => {
  alert('You are a cool duckling');
});


