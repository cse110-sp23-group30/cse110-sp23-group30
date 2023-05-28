

function addPlate() {
  window.location.href = '/source/plate-screen/plate-screen.html';
}

function addBowl() {
  window.location.href = '/source/bowl-screen/bowl-screen.html';
}

function purchase() {
  window.location.href = '/source/cookie_screen/cookie_screen.html';
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
