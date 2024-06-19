import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const params = new URLSearchParams({
  key: '44439688-e504d8637fbba129a9d0d5115',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

function getImages(url) {
  fetch(url).then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  });
};

const refs = {
  form: document.querySelector('.form-request'),
  btn: document.querySelector('.btn'),
  ulElem: document.querySelector('.gallery'),
};

// function imageTamplate(image) {
//   return `<li class="gallery-item">
//             <a class="gallery-link" href=${image.original}>
//                 <img class="gallery-image"
//                 src=${image.preview} 
//                 alt=${image.description}
//                 title=${image.description} />
//             </a>
//         </li>`;
// }
// function imagesTamplate(arr) {
//   return arr.map(imageTamplate).join('');
// }
// const markup = imagesTamplate(images);
// ulElem.innerHTML = markup;

// const options = {
//   captionDelay: 250,
// };
// const lightbox = new SimpleLightbox('.gallery a', options);