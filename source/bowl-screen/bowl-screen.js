/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
let selectedCount = 0;
let selectedCountEntree = 0;

function selectImage(element) {
  if (element.classList.contains('selected')) {
    element.classList.remove('selected');
    selectedCount -= 1;
  } else if (selectedCount < 1) {
    element.classList.add('selected');
    selectedCount += 1;
  }
}

function selectImageEntree(element) {
  if (element.classList.contains('selected')) {
    element.classList.remove('selected');
    selectedCountEntree -= 1;
  } else if (selectedCountEntree < 1) {
    element.classList.add('selected');
    selectedCountEntree += 1;
  }
}

function goToCart() {
  location.href = '/source/cart_screen/cart.html';
  console.log('Function Called!');
}
