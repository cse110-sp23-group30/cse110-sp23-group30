let selectedCount = 0
let selectedCountEntree = 0

function selectImage (element) {
  if (element.classList.contains('selected')) {
    element.classList.remove('selected')
    selectedCount--
  } else if (selectedCount < 1) {
    element.classList.add('selected')
    selectedCount++
  }
}

function selectImageEntree (element) {
  if (element.classList.contains('selected')) {
    element.classList.remove('selected')
    selectedCountEntree--
  } else if (selectedCountEntree < 1) {
    element.classList.add('selected')
    selectedCountEntree++
  }
}

function goToCart () {
  location.href = '/source/cart_screen/cart.html'
  console.log('Function Called!')
}
