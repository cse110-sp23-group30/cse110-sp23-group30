let selectedCount = 0
let selectedCountEntree = 0

module.exports = { selectImage, selectImageEntree };

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
  // Create a either a new list or a list with everything in local storage
  let dishes
  if (localStorage.getItem('dishes') === null) {
    dishes = []
  } else {
    dishes = JSON.parse(localStorage.getItem('dishes'))
  }

  const selectedItems = {
    main: getSelectedItems('.menu-card.selected'),
    entree: getSelectedItems('.menu-card.selectedEntree')
  }

  // Add selectedItems to list
  dishes.push(selectedItems)

  // Store list in LocalStorage as JSON
  localStorage.setItem('dishes', JSON.stringify(dishes))

  // Store selected items in LocalStorage as JSON
  // localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
}

function getSelectedItems (selector) {
  const selectedItems = []

  const selectedElements = document.querySelectorAll(selector)
  selectedElements.forEach((element) => {
    const itemDetails = {
      src: element.querySelector('img').getAttribute('src'),
      name: element.querySelector('h3').innerText,
      price: element.querySelector('p:nth-child(3)').innerText
    }
    selectedItems.push(itemDetails)
  })

  return selectedItems
}
