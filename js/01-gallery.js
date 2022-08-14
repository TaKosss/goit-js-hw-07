import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")
const cardsMarkup = createGallaryMarkUp(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)

function createGallaryMarkUp(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
    return`
         <div class="gallery__item">
             <a class="gallery__link" href="${original}">
                 <img
                 class="gallery__image"
                 src="${preview}"
                 data-source="${original}"
                 alt="${description}"/>
             </a>
         </div>`
     }).join('')
}

galleryContainer.addEventListener('click', (onCardGallery))

function onCardGallery(e) {
    e.preventDefault()
    if (e.target.nodeName !== "IMG") {
        return
    }

    const urlPhoto = e.target.dataset.source
    const instance = basicLightbox.create(`<img src="${urlPhoto}">`)

    instance.show()

    const lightboxVisible = basicLightbox.visible()
    galleryContainer.addEventListener("keydown", onEscape)

    function onEscape(e) {
        if (!lightboxVisible) {
            return
        }
        if (e.key === 'Escape') {
            instance.close()
            galleryContainer.removeEventListener("keydown", onEscape)
        }
    }
}

