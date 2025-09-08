function generateImgHtml(index) {
  return `<img onclick="openDialog(${[index]})" 
                                    class="thumbnailGallery" 
                                    src="${imgArray[index]}" 
                                    alt="${altTagimage[index]}">`;
}

function generateBigImg(index) {
  return `<img src="${imgArray[index]}" alt="${altTagimage[index]}">`;
}
