/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
let selectedCount = 0;

function selectImage(element) {
  if (element.classList.contains('selected')) {
    element.classList.remove('selected');
    selectedCount -= 1;
  } else if (selectedCount < 2) {
    element.classList.add('selected');
    selectedCount += 1;
  }
}
