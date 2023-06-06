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
  if (element.classList.contains('selectedEntree')) {
    element.classList.remove('selectedEntree')
    selectedCountEntree--
  } else if (selectedCountEntree < 1) {
    element.classList.add('selectedEntree')
    selectedCountEntree++
  }
}

function goToCart () {
  location.href = '/source/cart_screen/cart.html'
  console.log('Function Called!')
}

function saveSelectedItems () {
  const selectedItems = {
    main: getSelectedItems('.menu-card.selected'),
    entree: getSelectedItems('.menu-card.selectedEntree')
  }

  // Store selected items in LocalStorage as JSON
  localStorage.setItem('selectedItems', JSON.stringify(selectedItems))
}

function getSelectedItems (selector) {
  const selectedItems = []

  const selectedElements = document.querySelectorAll(selector)
  selectedElements.forEach((element) => {
    const itemDetails = {
      name: element.querySelector('h3').innerText,
      price: element.querySelector('p:nth-child(3)').innerText
    }
    selectedItems.push(itemDetails)
  })

  return selectedItems
}
