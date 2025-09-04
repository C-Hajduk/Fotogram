let imgArray = [
  "assets/img/20230331_102806.jpg",
  "assets/img/20230331_102941.jpg",
  "assets/img/20230331_154828.jpg",
  "assets/img/20230402_102032.jpg",
  "assets/img/20230402_155314.jpg",
  "assets/img/20230403_152724.jpg",
  "assets/img/20230403_154436.jpg",
  "assets/img/20230403_204057.jpg",
  "assets/img/20230404_103648.jpg",
  "assets/img/20230404_125938.jpg",
  "assets/img/20230404_155440.jpg",
  "assets/img/20230404_161925.jpg",
  "assets/img/20230405_105337.jpg",
  "assets/img/20230405_150408.jpg",
  "assets/img/20230405_152108.jpg",
];

let bigImgArray = [
  "assets/img/20230331_102806.jpg",
  "assets/img/20230331_102941.jpg",
  "assets/img/20230331_154828.jpg",
  "assets/img/20230402_102032.jpg",
  "assets/img/20230402_155314.jpg",
  "assets/img/20230403_152724.jpg",
  "assets/img/20230403_154436.jpg",
  "assets/img/20230403_204057.jpg",
  "assets/img/20230404_103648.jpg",
  "assets/img/20230404_125938.jpg",
  "assets/img/20230404_155440.jpg",
  "assets/img/20230404_161925.jpg",
  "assets/img/20230405_105337.jpg",
  "assets/img/20230405_150408.jpg",
  "assets/img/20230405_152108.jpg",
];

function loadImages() {
  let images;

  if (localStorage.getItem("images")) {
    images = JSON.parse(localStorage.getItem("images"));
  } else {
    localStorage.setItem("images", JSON.stringify(imgArray));
    images = imgArray;
  }

  render(images);

  function render(images) {
    let dropImg = document.getElementById("dropImg");
    dropImg.innerHTML = "";

    if (images && images.length > 0) {
      for (let index = 0; index < images.length; index++) {
        let img = document.createElement("img");
        img.src = images[index];
        img.alt = "japanBild" + (index + 1);
        img.loading = "charge";
        img.style.width = "300px";
        img.style.margin = "5px";
        dropImg.appendChild(img);
      }
    }
  }
}

// Overlay für das Popup
function toggleOverlay() {
  let overlayRef = document.getElementById("bigImgOverlay");

  overlayRef.classList.toggle("d_none");
}

// Großes Bild im Overlay anzeigen

// Klick auf OverlayButton = schließen

// Klick außerhalb des Bildes -> Overlay schließen
