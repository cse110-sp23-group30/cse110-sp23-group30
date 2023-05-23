window.addEventListener('DOMContentLoaded', init)

function init () {
  document.getElementById('settings-button').addEventListener('click', showSettings)
  document.getElementsByClassName('close')[0].addEventListener('click', closeSettings)
  document.getElementById('instructions-button').addEventListener('click', openInstructions)
  document.getElementById('play-button').addEventListener('click', playGame)
}

function openInstructions () {
  // Link to Instructions Screen
}

function playGame () {
  // Link to Food Selection Screen
}

function showSettings () {
  document.getElementById('settings-popup').style.display = 'block'
}

function closeSettings () {
  document.getElementById('settings-popup').style.display = 'none'
}
