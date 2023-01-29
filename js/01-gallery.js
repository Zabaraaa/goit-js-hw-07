import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const gallery = document.querySelector('.gallery')

const markupGallery = galleryItems
    .map(({ preview, original, description }) =>
        `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
  )
            .join("");

gallery.insertAdjacentHTML("afterbegin", markupGallery);

// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
gallery.addEventListener('click', openOriginalImage)

function openOriginalImage(e) {
    e.preventDefault();
    
    if (e.target.tagName !== "IMG") {
        return
    } 

    const dataSrc = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${dataSrc}">
`)

    instance.show()
    
   
//    close ESC
    
    gallery.addEventListener('keydown', onCloseEsc)

    function onCloseEsc(e) {
        if (e.code === "Escape") {
            gallery.removeEventListener('keydown', onCloseEsc)
            instance.close()
        }
    }

}



