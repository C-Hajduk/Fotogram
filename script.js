// Array mit Bild-URLs
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
  let dropImg = document.getElementById("dropImg");
  // 2. Bilder im LocalStorage speichern
  //    -> wir wandeln das Array in einen String um
  localStorage.setItem("dropImg", JSON.stringify(imgArray));
  // 3. Bilder wieder aus LocalStorage abrufen
  let saveImg = JSON.parse(localStorage.getItem("myImg"));

  if (saveImg && saveImg.lengt > 0) {
    for (let index = 0; index < saveImg.length; index++) {
      let img = document.createElement("img");
      img.src = saveImg[i];
      img.alt = "japanBilder";
      img.classList.add(`img-${i + 1}`);
      dropImg.appendChild(img);
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
