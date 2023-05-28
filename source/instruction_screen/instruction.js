document.addEventListener("DOMContentLoaded", function() {
    var instructionsList = document.getElementById("instructionsList");
    var instructions = instructionsList.getElementsByClassName("instruction");
    var currentIndex = 0;
  
    showInstruction(currentIndex);
  
    var prevArrow = document.getElementById("prevArrow");
    prevArrow.addEventListener("click", function() {
      hideInstruction(currentIndex);
      currentIndex = (currentIndex - 1 + instructions.length) % instructions.length;
      showInstruction(currentIndex);
    });
  
    var nextArrow = document.getElementById("nextArrow");
    nextArrow.addEventListener("click", function() {
      hideInstruction(currentIndex);
      currentIndex = (currentIndex + 1) % instructions.length;
      showInstruction(currentIndex);
    });
  
    function showInstruction(index) {
      if (index >= 0 && index < instructions.length) {
        instructions[index].style.display = "block";
      }
    }
  
    function hideInstruction(index) {
      if (index >= 0 && index < instructions.length) {
        instructions[index].style.display = "none";
      }
    }
  });

  function play() {
    window.location.href = "/source/cart_screen/cart.html";
  }

  function goBack() {
    window.location.href = "/source/opening_screen/opening-screen.html";
  }
  