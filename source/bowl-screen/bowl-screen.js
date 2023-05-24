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

const imgLinks = ["source/bowl-screen/Panda-Express-Beef-and-Broccoli.jpg",
                  "source/bowl-screen/panda-express-beijing-beef.jpg",
                  "source/bowl-screen/Panda-Express-Chow-Mein.jpg",
                  "source/bowl-screen/Panda-Express-Fried-Rice.jpg",
                  "source/bowl-screen/panda-express-honey-walnut-shrimp.jpg",
                  "source/bowl-screen/panda-express-kung-pao-chicken.jpg",
                  "source/bowl-screen/panda-express-orange-chicken.jpg",
                  "source/bowl-screen/panda-express-veggies.jpg"];

localStorage.setItem("image links", imgLinks);
