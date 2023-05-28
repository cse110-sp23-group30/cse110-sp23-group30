document.addEventListener('DOMContentLoaded', function() {
  // Get the submit button element
  var submitBtn = document.getElementById('submit');

  // Handle submit button click event
  submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform any required actions here

    // Navigate to another screen or URL
    window.location.href = '/source/cart_screen/cart.html';
  });
});

let selectedCountMain = 0;
let selectedCount = 0;

function selectImageMain(element) {
    if (element.classList.contains('selected')) {
      element.classList.remove('selected');
      selectedCountMain--;
    } else if (selectedCountMain < 1) {
      element.classList.add('selected');
      selectedCountMain++;
    }
  }

function selectImage(element) {
  if (element.classList.contains('selected')) {
    element.classList.remove('selected');
    selectedCount--;
  } else if (selectedCount < 2) {
    element.classList.add('selected');
    selectedCount++;
  }
}




module.exports = {selectImageMain, selectImage}