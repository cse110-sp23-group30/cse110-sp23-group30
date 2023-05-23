document.addEventListener('DOMContentLoaded', function () {
  const instructionsList = document.getElementById('instructionsList')
  const instructions = instructionsList.getElementsByClassName('instruction')
  let currentIndex = 0

  showInstruction(currentIndex)

  const goBackButton = document.getElementById('goBackButton')
  goBackButton.addEventListener('click', function () {
    window.location.href = 'home.html' // Redirect to home screen
  })

  const proceedButton = document.getElementById('proceedButton')
  proceedButton.addEventListener('click', function () {
    window.location.href = 'cart.html' // Redirect to cart screen
  })

  const prevArrow = document.getElementById('prevArrow')
  prevArrow.addEventListener('click', function () {
    hideInstruction(currentIndex)
    currentIndex = (currentIndex - 1 + instructions.length) % instructions.length
    showInstruction(currentIndex)
  })

  const nextArrow = document.getElementById('nextArrow')
  nextArrow.addEventListener('click', function () {
    hideInstruction(currentIndex)
    currentIndex = (currentIndex + 1) % instructions.length
    showInstruction(currentIndex)
  })

  function showInstruction (index) {
    if (index >= 0 && index < instructions.length) {
      instructions[index].style.display = 'block'
    }
  }

  function hideInstruction (index) {
    if (index >= 0 && index < instructions.length) {
      instructions[index].style.display = 'none'
    }
  }
})
