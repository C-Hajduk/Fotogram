const imgArray = [
  "assets/img/Aussicht_Kirschblüten.jpg",
  "assets/img/Bonsai_Tempel.jpg",
  "assets/img/Fluss_Kirschblüten.jpg",
  "assets/img/Fuji.jpg",
  "assets/img/Gasshō-Zukuri-Haus.jpg",
  "assets/img/Gedenken_Schrein.jpg",
  "assets/img/Jigokudani Affenpark.jpg",
  "assets/img/Jizō-Statuen.jpg",
  "assets/img/Lichterspiel_Wald.jpg",
  "assets/img/Matcha_Tee.jpg",
  "assets/img/Mini_Wasserfall.jpg",
  "assets/img/Schrein_Garten.jpg",
  "assets/img/Tempel hinter Kirschblüten.jpg",
  "assets/img/Tempel_Statue.jpg",
  "assets/img/Weg_zum_Gedenken_Schrein.jpg",
];

let imgArrayindex = 0;

// ======================= render Funktion & Template ==================================

function renderImg() {
  let imageGalleryRef = document.getElementById("imageGallery");
  imageGalleryRef.innerHTML = "";

  for (let index = 0; index < imgArray.length; index++) {
    imageGalleryRef.innerHTML += `<img onclick="openDialog(${[index]})" 
                                    class="thumbnailGallery" src="${
                                      imgArray[index]
                                    }" alt="">`;
  }
}

// ==================== Dialog öffnen ==================================

function openDialog(index) {
  imgArrayindex = index;
  let dialog = document.getElementById("dialog");
  dialog.showModal();

  let bigPicture = document.getElementById("bigPicture");
  bigPicture.innerHTML = `<img src="${imgArray[index]}" alt="">`;

  // Zähler (z.B. "3 / 15")
  let counterRef = document.getElementById("counter");
  counterRef.textContent = imgArrayindex + 1 + " / " + imgArray.length;

  let headlineRef = document.getElementById("headerDialog");

  let pathParts = imgArray[imgArrayindex].split("/");
  let filename = pathParts[pathParts.length - 1];
  headlineRef.textContent = filename;

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      closeDialog();
    }
  });
}

// ======================= Dialog schließen ============================

function closeDialog() {
  let dialogRef = document.getElementById("dialog");
  dialogRef.close();
}

// ======================= Bubbling Funktion ============================

// Klick außerhalb des Bildes -> Overlay schließen
function bubbling() {}

// ====================== vorwärts swipen ===============================

function forwardImg() {
  imgArrayindex++; // index erhöhen - wir wollen zum nächsten Bild springen
  if (imgArrayindex >= imgArray.length) {
    // wenn der Index gleich der Länge des Arrays ist,haben wir das Ende überschritten. Dann setzen wir auf 0
    imgArrayindex = 0; //zurück zum Bild
  }
  openDialog(imgArrayindex); // neues Bild anzeigen
}

// ====================== rückwärts swipen ===============================

function backImg() {
  imgArrayindex--;
  if (imgArrayindex < 0) {
    imgArrayindex = imgArray.length - 1; // zurück zum letzen Bild
  }
  openDialog(imgArrayindex);
}

// ============================================================================
