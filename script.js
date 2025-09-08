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

const altTagimage = [
  "Aussicht_Kirschblüten",
  "Bonsai_Tempel",
  "Fluss_Kirschblüten",
  "Fuji",
  "Gasshō-Zukuri-Haus",
  "Gedenken_Schrein",
  "Jigokudani Affenpark",
  "Jizō-Statuen",
  "Lichterspiel_Wald",
  "Matcha_Tee",
  "Mini_Wasserfall",
  "Schrein_Garten",
  "Tempel_hinter_Kirschblüten",
  "Tempel_Statue",
  "Weg_zum_Gedenken_Schrein",
];

let imgArrayindex = 0; // speichert, welches Bild gerade aktiv ist.

// ======================= render Funktion & Template ==================================

function renderImg() {
  //definiert die Funktion, die die Galerie auf der Seite neu zeichnet
  let imageGalleryRef = document.getElementById("imageGallery"); //sucht im HTML nach einem Element mit der ID imageGallery
  imageGalleryRef.innerHTML = ""; //bedeutet: den alten Inhalt löschen, damit die Galiere nicht doppelt gefüllt wird.

  for (let index = 0; index < imgArray.length; index++) {
    //eine Schleife: Sie läuft so oft, wie es Bilder im Array gibt
    imageGalleryRef.innerHTML += generateImgHtml(index);
  }
}

// ==================== Dialog öffnen ==================================

function openDialog(index) {
  //Funktion zeigt ein Bild gross im Dialog an. index ist der Wert, den wir beim Klicken übergeben haben
  imgArrayindex = index; //speichert, welches Bild aktuell angezeigt wird
  let dialog = document.getElementById("dialog"); //sucht das HTML-Element mit der ID dialog
  dialog.showModal(); //schowMoadal() öffnet den Dialog(so eine Art Popup-Fenster über der Seite)

  let bigPicture = document.getElementById("bigPicture");
  bigPicture.innerHTML = generateBigImg(index);

  let counterRef = document.getElementById("counter");
  counterRef.textContent = imgArrayindex + 1 + " / " + imgArray.length;

  let headlineRef = document.getElementById("headerDialog");

  let pathParts = imgArray[imgArrayindex].split("/");
  let filename = pathParts[pathParts.length - 1];
  let filenameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  filenameWithoutExt = filenameWithoutExt.replace(/_/g, " ");
  headlineRef.textContent = filenameWithoutExt;

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
