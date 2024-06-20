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
}

const refs = {
  formEl: document.forms[0],
  btnEl: document.querySelector('.btn'),
  ulElem: document.querySelector('.gallery'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const usertext = e.currentTarget.elements.query.value.trim();
  if (!usertext) {
    iziToast.warning({
      position: `topRight`,
      title: `Attention`,
      message: 'Search field must not be empty. Please try again!',
    });
    return;
  }
  params.set('q', usertext);
  const userUrl = 'https://pixabay.com/api/?' + params;

  getImages(userUrl)
    .then(images => {
      console.log(images);
      if (!images.hits.length) return Promise.reject('error');
    })

    .catch(error => {
      iziToast.error({
        position: `topRight`,
        title: `error`,
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    });
});

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
