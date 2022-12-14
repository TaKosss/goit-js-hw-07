import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery")
const cardsMarkup = createGallaryMarkUp(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)

function createGallaryMarkUp(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
    return`
         <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
     }).join('')
}

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});


