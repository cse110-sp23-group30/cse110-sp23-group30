function addPlate() {
  location.href = "plate.html";
}

function addBowl() {
  location.href = "bowl.html";
}

function purchase() {
  location.href = "confirm.html";
}

function deleteItem() {
  const confirmClear = document.getElementById("confirm-delete");
  confirmClear.style.display =
    confirmClear.style.display === "none" ? "block" : "none";
}

function confirmDelete() {
  deleteItem();
}

function popUp() {
  const confirmClear = document.getElementById("confirm-clear");
  confirmClear.style.display =
    confirmClear.style.display === "none" ? "block" : "none";
}

function confirmClear() {
  const items = document.getElementById("items");
  items.innerHTML = "";
  popUp();
}
