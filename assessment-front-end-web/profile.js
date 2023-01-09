console.log('JS connected');

let colorListener = document.querySelector('#color');

colorListener.addEventListener('click', () => {
  alert('My favorite color is teal');
});

let placeListener = document.querySelector('#place');

placeListener.addEventListener('click', () => {
  alert('My favorite place is Lake Powell');
});

let ritualListener = document.querySelector('#ritual');

ritualListener.addEventListener('click', () => {
  alert('My favorite ritual is coffee in the mornings');
});



