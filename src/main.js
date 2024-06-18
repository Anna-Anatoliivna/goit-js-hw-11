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
  input: document.querySelector(input[(name = 'query')]),
  btn: document.querySelector('.btn'),
  gallery: document.querySelector('.gallery'),
};
