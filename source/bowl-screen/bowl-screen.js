let selectedCount = 0;
let selectedCountEntree = 0;

/**
 * Selects an image (main dish) to be added to the bowl.
 * @param {*} element The main dish to be added to the bowl.
 */
function selectImage(element) {
  if (element.classList.contains('selected')) {
    element.classList.remove('selected');
    selectedCount--;
  } else if (selectedCount < 1) {
    element.classList.add('selected');
    selectedCount++;
  } else if (selectedCount == 1){
    const fullPlateModal = document.getElementById("fullPlate");
    fullPlateModal.style.display = "none" ? "block" : "none";
  }
}

/**
 * Selects an image (entree dish) to be added to the bowl.
 * @param {*} element The entree dish to be added to the bowl.
 */
function selectImageEntree(element) {
  if (element.classList.contains('selectedEntree')) {
    element.classList.remove('selectedEntree');
    selectedCountEntree--;
  } else if (selectedCountEntree < 1) {
    element.classList.add('selectedEntree');
    selectedCountEntree++;
  }  else if (selectedCountEntree == 1){
    const fullPlateModal = document.getElementById("fullPlate");
    fullPlateModal.style.display = "none" ? "block" : "none";
  }
}

/**
 * Routes the page to the cart screen.
 */
function goToCart() {
  location.href = '../cart_screen/cart.html';
  console.log('Function Called!');
}

/**
 * Gets the items that have been selected and stores them in local storage to be used later.
 * @returns null if not all items are selected, 
 */
function saveSelectedItems() {
  // Create a either a new list or a list with everything in local storage
  let dishes;
  if (localStorage.getItem('dishes') === null) {
    dishes = [];
  } else {
    dishes = JSON.parse(localStorage.getItem('dishes'));
  }

  const selectedItems = {
    main: getSelectedItems('.menu-card.selected'),
    entree: getSelectedItems('.menu-card.selectedEntree'),
  };

  // Check if user got one main and one entree
  if (selectedItems.main.length < 1 || selectedItems.entree.length < 1) {
    alert('Bowl is not full');
    return;
  }

  // Add selectedItems to list
  dishes.push(selectedItems);

  // Store list in LocalStorage as JSON
  localStorage.setItem('dishes', JSON.stringify(dishes));

  const popupModal = document.querySelector(".popup-modal");
  popupModal.style.display = "none" ? "block" : "none";

  clearSelectedOptions();
}

/**
 * Retrieves the selected items in the bowl
 * @param {} selector the elements that have been selected by the user
 * @returns the items that have been selected by the user
 */
function getSelectedItems(selector) {
  const selectedItems = [];

  const selectedElements = document.querySelectorAll(selector);
  selectedElements.forEach((element) => {
    const itemDetails = {
      src: element.querySelector('img').getAttribute('src'),
      name: element.querySelector('h3').innerText,
      price: element.querySelector('p:nth-child(3)').innerText,
    };
    selectedItems.push(itemDetails);
  });

  return selectedItems;
}

/**
 * Closes the settings popup from the header.
 */
function closePopup() {
  const popupModal = document.querySelector('.popup-modal');
  popupModal.style.display = 'none';
}

function closeWarningPopup() {
  const fullPlateModal = document.getElementById("fullPlate");
  fullPlateModal.style.display = "none";
}

function clearSelectedOptions() {
  const selectedElements = document.querySelectorAll(".selected, .selectedEntree");
  selectedElements.forEach((element) => {
    element.classList.remove("selected", "selectedEntree");
  });
  selectedCount = 0;
  selectedCountEntree = 0;
}
