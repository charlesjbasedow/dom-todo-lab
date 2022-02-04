const tdInput = document.getElementById('inp')
const submitBtn = document.getElementById('submit-button')
const tdList = document.getElementById('todo-list')
const resetBtn = document.getElementById('reset-button')


submitBtn.addEventListener('click', function(evt) {
  const newLi = document.createElement('li')
  newLi.textContent = tdInput.value
  document.querySelector('ul').appendChild(newLi)
  tdInput.value = ''
})

resetBtn.addEventListener('click', function(evt) {
  tdInput.value = '' 
  tdList.innerHTML = ''
})