import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

const galery = document.querySelector('.gallery');

function createMarkup(arr) {
    const markup = arr.map(item => {
        return `
        <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    }).join('');
    return markup;
}
galery.innerHTML = createMarkup(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay:250, alertError: false});