/**
 * Redirects to the plate screen.
 */
function addPlate () {
  location.href = '/source/plate-screen/plate-screen.html'
}

/**
 * Redirects to the bowl screen.
 */
function addBowl () {
  location.href = '/source/bowl-screen/bowl-screen.html'
}

/**
 * Redirects to the cookie screen for purchase.
 */
function purchase () {
  location.href = '/source/cookie_screen/cookie_screen.html'
}

/**
 * Toggles the display of the confirm-delete element and logs the value attribute of the clicked element.
 * @param {HTMLElement} e - The clicked element.
 */
function deleteItem (e) {
  const confirmClear = document.getElementById('confirm-delete')
  confirmClear.style.display =
    confirmClear.style.display === 'none' ? 'block' : 'none'
  console.log(e.getAttribute('value'))
}

/**
 * Confirms the deletion of an item from the dishes array.
 * @param {HTMLElement} e - The clicked element.
 */
function confirmDelete (e) {
  const dishes = JSON.parse(localStorage.getItem('dishes'))
  console.log(e.getAttribute('value'))
  const valueAt = this.value
  console.log(valueAt)
  if (valueAt > -1) {
    dishes.splice(valueAt, 1)
  }
  deleteItem()
}

/**
 * Toggles the display of the confirm-clear element.
 */
function popUp () {
  const confirmClear = document.getElementById('confirm-clear')
  confirmClear.style.display =
    confirmClear.style.display === 'none' ? 'block' : 'none'
}

/**
 * Clears the cart by removing all items from the items element and clearing localStorage.
 */
function confirmClear () {
  const items = document.getElementById('items')
  items.innerHTML = ''
  localStorage.clear()
  popUp()
}

/**
 * Loads the cart by retrieving items from localStorage and populating the items element.
 */
function loadCart () {
  const items = document.getElementById('items')

  // Get list from local Storage, if it exists
  let dishes
  if (localStorage.getItem('dishes') === null) {
    console.log('Local Storage has no dishes')
  } else {
    dishes = JSON.parse(localStorage.getItem('dishes'))
    let i = 0
    for (const dish of dishes) {
      console.log(dish)
      const main = dish.main
      const entree = dish.entree
      const newSection = document.createElement('section')
      newSection.setAttribute('value', `${i}`)

      if (entree.length == 2) {
        newSection.innerHTML = `
          <h4>Plate</h4>
          <div class="food">
              <div class="individual-item">
                  <img src="${main[0].src}" alt="${main[0].name}" class="photos">
                  <p>Main: ${main[0].name}</p> 
                  <p>${main[0].price}</p>
              </div>
              <div class="individual-item">
                  <img src="${entree[0].src}" alt="${entree[0].name}" class="photos">
                  <p>Side 1: ${entree[0].name}</p>
                  <p>${entree[0].price}</p>
              </div>
              <div class="individual-item">
                  <img src="${entree[1].src}" alt="${entree[1].name}" class="photos">
                  <p>Side 2: ${entree[1].name}</p>
                  <p>${entree[1].price}</p>
              </div>
          </div>
          <button onclick="deleteItem(this)" class="deletebtn">Delete</button>
        `
      } else {
        newSection.innerHTML = `
          <h4>Bowl</h4>
          <div class="food">
              <div class="individual-item">
                  <img src="${main[0].src}" alt="${main[0].name}" class="photos">
                  <p>Main: ${main[0].name}</p>
                  <p>${main[0].price}</p>
              </div>
              <div class="individual-item">
                  <img src="${entree[0].src}" alt="${entree[0].name}" class="photos">
                  <p>Side 1: ${entree[0].name}</p>
                  <p>${entree[0].price}</p>
              </div>
          </div>
          <button onclick="deleteItem(this)" class="deletebtn">Delete</button>
        `
      }

      items.appendChild(newSection)
      i++
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadCart()
})
