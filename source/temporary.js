const toggleButton = document.querySelector('#toggle-button')
const connectedComponent = document.querySelector('#connected-component')

let isHidden = false

toggleButton.addEventListener('click', () => {
  if (isHidden) {
    connectedComponent.style.display = 'flex'
    isHidden = false
  } else {
    connectedComponent.style.display = 'none'
    isHidden = true
  }
})
