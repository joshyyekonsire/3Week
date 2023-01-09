
console.log('connected')

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

const baseURL = 'http://localhost:4000'

function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}


function getAll(){
  clearCharacters();
  axios.get(`${baseURL}/characters`).then((res)=>{
console.log(res.data);
res.data.forEach(char => createCharacterCard(char))
  }).catch((err) => {
    console.log(err)
  })
};

function getOne(name){
  clearCharacters();
  axios.get(`${baseURL}/character/${name}`).then((res) => {
    console.log(res.data)
    createCharacterCard(res.data);
  }).chatch((err) => {
    console.log(err);
  })
}

function getOld(e) {
  e.preventDefault();
  clearCharacters();

  axios.get(`${baseURL}/character?age=${ageInput.value}`).then(res => {
    res.data.forEach(char => createCharacterCard(char))
  }).catch((err) => {console.log(err)})
}

function createCharacter (e) {
  e.preventDefault();
  clearCharacters();

let body = {
  firstName: newFirstInput.value,
  lastName: newLastInput.value,
  gender: newGenderDropDown.value,
  age: newAgeInput.value,
  likes: newLikesText.value.split(",")
}

  axios.post(`${baseURL}/character`, body).then(res=>{console.log(res.data)}).catch(err => {console.log(err)})
  res.data.forEach(char => createCharacter(char))
}


ageForm.addEventListener("submit", getOld);
getAllBtn.addEventListener("click", getAll);
charBtns.forEach(charBtn => charBtn.addEventListener('click', () => getOne(charBtn.id)));
