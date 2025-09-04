const imgArray = [
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

let imgArrayindex = 0;

// ======================= img bilder in HTMl erstellen ===============================

// ======================= render Funktion & Template ==================================

function renderImg() {
  let imageGalleryRef = document.getElementById("imageGallery");
  imageGalleryRef.innerHTML = "";

  for (let index = 0; index < imgArray.length; index++) {
    imageGalleryRef.innerHTML += `<img onclick="openDialog(${[
      index,
    ]})" class="thumbnailGallery" src="${imgArray[index]}" alt="">`;
  }
}

// ==================== Overlay für das Popup ==================================

function renderDialog() {
  // fuers rendern des Dialog
}

// per click auf das Bild, öffnet sich ein dialog
function openDialog(index) {
  let dialog = document.getElementById("dialog");
  dialog.showModal();

  let bigPicture = document.getElementById("bigPicture");
  bigPicture.innerHTML += `<img src="${imgArray[index]}" alt="">`;

  // wenn ich auf das img klicke, dann öffnet sich der Dialog
  // ansonsten kann ich den Dialog nicht oeffnen
}

// Klick auf OverlayButton = schließen
function closeDialog() {
  // wenn ich den Button klicke, dann schliesst sich der Dialog
}

// Klick außerhalb des Bildes -> Overlay schließen
function bubbling() {}

// pfeiltaste zum swipen

function forwardImg() {
  // wenn ich den button klicke, dann swipe ich nach links
  // was ist mein vorheriges Bild -> globale variable
}

function backImg() {
  // wenn ich den button klicke, dann swipe ich nach rechts
}

// ============================================================================
