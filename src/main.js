// import { fetchPhotos } from './js/pixabay-api.js';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const searchButton = document.querySelector('.searchButton');
// const input = document.querySelector('.input');
// const loader = document.querySelector('.loader');
// function onSearch(event) {
//   event.preventDefault();
  
//   const searchQuery = event.target.elements.searchKeyword.value.trim();
//   input.innerHTML = '';
//   if (searchQuery === '') {
//     return iziToast.error({
//       message:
//         'Sorry, there are no images matching your search query. Please try again!',
//     });
//   }
//   // input.innerHTML = '';
//   loader.classList.remove('is-hidden');

//   fetchPhotos(searchQuery)
//     .then(imagesData => {
//       if (imagesData.hits.length === 0) {
//         iziToast.error({
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//         });
//       }
//     })
//     .catch(error => console.log(error))
//     .finally(() => {
//       event.target.reset();
//       loader.classList.add('is-hidden');
//     });
// }
// searchButton.addEventListener('submit', onSearch);


// main.js
import { fetchPhotos } from './js/pixabay-api.js';
import { markupInterface } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchButton = document.querySelector('.searchButton');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');

function onSearch(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.searchKeyword.value.trim();
  if (searchQuery === '') {
    return iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
    });
  }
  loader.classList.remove('is-hidden');

  fetchPhotos(searchQuery)
    .then(imagesData => {
      if (imagesData.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        markupInterface(imagesData);
      }
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        message: 'An error occurred while fetching images. Please try again later!',
      });
    })
    .finally(() => {
      event.target.reset();
      loader.classList.add('is-hidden');
    });
}

searchButton.addEventListener('submit', onSearch);
