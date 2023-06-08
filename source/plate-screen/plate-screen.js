let selectedCount = 0;
let selectedCountMain = 0;

function selectImageMain(element) {
  if (element.classList.contains("selected")) {
    element.classList.remove("selected");
    selectedCountMain--;
  } else if (selectedCountMain < 1) {
    element.classList.add("selected");
    selectedCountMain++;
  }
}

function selectImage(element) {
  if (element.classList.contains("selectedEntree")) {
    element.classList.remove("selectedEntree");
    selectedCount--;
  } else if (selectedCount < 2) {
    element.classList.add("selectedEntree");
    selectedCount++;
  }
}

function goToCart() {
  location.href = "/source/cart_screen/cart.html";
}

function saveSelectedItems() {
  // Create a either a new list or a list with everything in local storage
  let dishes;
  if (localStorage.getItem("dishes") === null) {
    dishes = [];
  } else {
    dishes = JSON.parse(localStorage.getItem("dishes"));
  }

  const selectedItems = {
    main: getSelectedItems(".menu-card.selected"),
    entree: getSelectedItems(".menu-card.selectedEntree"),
  };

  // Check if user got one main and two entrees
  if (selectedItems.main.length < 1 || selectedItems.entree.length < 2) {
    alert("Plate is not full");
    return;
  }

  // Add selectedItems to list
  dishes.push(selectedItems);

  // Store list in LocalStorage as JSON
  localStorage.setItem("dishes", JSON.stringify(dishes));

  // Store selected items in LocalStorage as JSON
  // localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
}

function getSelectedItems(selector) {
  const selectedItems = [];

  const selectedElements = document.querySelectorAll(selector);
  selectedElements.forEach((element) => {
    const itemDetails = {
      src: element.querySelector("img").getAttribute("src"),
      name: element.querySelector("h3").innerText,
      price: element.querySelector("p:nth-child(3)").innerText,
    };
    selectedItems.push(itemDetails);
  });

  return selectedItems;
}
