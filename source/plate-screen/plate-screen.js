let selectedCount = 0;
let selectedCountMain = 0;

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