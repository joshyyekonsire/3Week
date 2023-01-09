console.log('JS connected');

let freeWheeler = 'Free Wheeler Pizza';

let harborSeafood = 'Harbor Seafood and Steak';

let copperOnion =  'The Copper onion';

let chileTepin = 'Chile-tepin';

let sweetLake = 'Sweet Lake Biscuits & Limeade';

let tradition = 'Tradition'

let sapaSushi = 'Sapa Sushi Bar';

let purgatory = 'Purgatory';

let redIguana = 'Red Iguana';

let capitalGrille = 'The Capital Grille';

let bestRestraunt = [freeWheeler,harborSeafood,copperOnion,chileTepin,tradition,sapaSushi,sweetLake,purgatory,redIguana,capitalGrille];

let restrauntListener = document.querySelector('#restraunts');

restrauntListener.addEventListener('click', () => {
  alert('Go to: ' + randomRestraunt);
});

let randomRestraunt = bestRestraunt[Math.floor(Math.random()*10)]




