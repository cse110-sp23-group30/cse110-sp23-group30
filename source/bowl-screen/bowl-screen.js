let selectedCountMain = 0;
let selectedCount = 0;

export function selectImageMain(element) {
    if (element.classList.contains('selected')) {
      element.classList.remove('selected');
      selectedCountMain--;
    } else if (selectedCountMain < 1) {
      element.classList.add('selected');
      selectedCountMain++;
    }
  }

export function selectImage(element) {
  if (element.classList.contains('selected')) {
    element.classList.remove('selected');
    selectedCount--;
  } else if (selectedCount < 2) {
    element.classList.add('selected');
    selectedCount++;
  }
}

 