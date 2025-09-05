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

// ======================= render Funktion & Template ==================================

function renderImg() {
  let imageGalleryRef = document.getElementById("imageGallery");
  imageGalleryRef.innerHTML = "";

  for (let index = 0; index < imgArray.length; index++) {
    imageGalleryRef.innerHTML += `<img onclick="openDialog(${index})" 
                                      class="thumbnailGallery" 
                                      src="${imgArray[index]}" alt="">`;
  }
}

// ==================== Dialog öffnen ==================================

function openDialog(index) {
  // renderDialog(index);
  let dialogRef = document.getElementById("dialog");
  dialogRef.showModal();

  let bigPicture = document.getElementById("bigPicture");
  bigPicture.innerHTML = `<img src="${imgArray[index]}" alt="">`;

  // Zähler (z.B. "3 / 15")
  let counterRef = document.getElementById("counter");
  counterRef.innerHTML = index + 1 + " / " + imgArray.length;

  // dialog.addEventListener("click", function (event) {
  //   if (event.target === dialog) {
  //     closeDialog();
  //   }
  // });
}

// ======================= Dialog schließen ============================

function closeDialog() {
  let dialogRef = document.getElementById("dialog");
  dialogRef.close();
}

// ======================= Bubbling Funktion ============================

function bubbling() {}

// ====================== vorwärts swipen ===============================

function forwardImg(index) {
  index++; // index erhöhen - wir wollen zum nächsten Bild springen
  if (index >= imgArray.length) {
    // wenn der Index gleich der Länge des Arrays ist,haben wir das Ende überschritten. Dann setzen wir auf 0
    index = 0; //zurück zum Bild
  }
  openDialog(index); // neues Bild anzeigen
}

// ====================== rückwärts swipen ===============================

function backImg(index) {
  index--;
  if (index < 0) {
    index = imgArray.length - 1; // zurück zum letzen Bild
  }
  openDialog(index);
}

// ============================================================================

function renderDialog(index) {
  let displayDialogRef = document.getElementById("displayDialog");
  displayDialogRef = "";
  displayDialogRef.innerHTML = `<dialog id="dialog" class="dialog">
            <header>
                <h2>Japan Bilder</h2> <!-- hier soll der Name des Bildes rein -->
                <button aria-label="dialogClose" class="btnClose" onclick="closeDialog()">❌</button>

            </header>

            <section id="bigPicture" class="bigPicture">Big Picture></section>

            <footer>
                <button onclick="forwardImg(${index})">Forward</button>
                <span id="counter"></span>
                <button onclick="backImg(${index})">Back</button>
            </footer>
        </dialog>`;
}
