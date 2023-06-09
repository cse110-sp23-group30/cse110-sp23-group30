let selectedCount = 0;
let selectedCountEntree = 0;

function selectImageMain(element) {
  console.log(selectedCount)
  if (element.classList.contains("selected")) {
    element.classList.remove("selected");
    selectedCount--;
  } else if (selectedCount < 1) {
    element.classList.add('selected');
    selectedCount++;
  } else if (selectedCount == 1){
    const fullPlateModal = document.getElementById("fullPlate");
    fullPlateModal.style.display = "none" ? "block" : "none";
  }
}

function selectImage(element) {
  if (element.classList.contains('selectedEntree')) {
    element.classList.remove('selectedEntree');
    selectedCountEntree--;
  } else if (selectedCountEntree < 2) {
    element.classList.add('selectedEntree');
    selectedCountEntree++;
  } else if (selectedCountEntree == 2){
    const fullPlateModal = document.getElementById("fullPlate");
    fullPlateModal.style.display = "none" ? "block" : "none";
  }
}

function goToCart() {
  location.href = '../cart_screen/cart.html';
}

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

  // Check if user got one main and two entrees
  if (selectedItems.main.length < 1 || selectedItems.entree.length < 2) {
    alert('Plate is not full');
    return;
  }

  // Add selectedItems to list
  dishes.push(selectedItems);

  // Store list in LocalStorage as JSON
  localStorage.setItem('dishes', JSON.stringify(dishes));

  // Store selected items in LocalStorage as JSON
  // localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  const popupModal = document.querySelector(".popup-modal");
  popupModal.style.display = "none" ? "block" : "none";

  clearSelectedOptions();
}

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
