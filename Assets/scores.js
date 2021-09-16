const existingInitials = JSON.parse(localStorage.getItem('initials')) || [];

const initial = document.getElementById('initials').value;
const scoreObject = {
    initial: initial,
    highScore: score
}

localStorage.setItem("initials", JSON.stringify(existingInitials));

const scores = document.getElementById('content')
const ol = document.querySelector('ol')
const button = document.getElementById('clear-button')
let listArray = localStorage.getItem('initials')


localStorage.setItem('items', JSON.stringify(listArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = (text) => {
  const li = document.createElement('li')
  li.textContent = text
  ol.appendChild(li)
}

submitButton.addEventListener('submit', function (e) {
  e.preventDefault()

  listArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(listArray))
  liMaker(input.value)
  input.value = ''
})

data.forEach((item) => {
  liMaker(item)
})

button.addEventListener('click', function () {
  localStorage.clear()
  while (ol.firstChild) {
    ol.removeChild(ul.firstChild)
  }
})