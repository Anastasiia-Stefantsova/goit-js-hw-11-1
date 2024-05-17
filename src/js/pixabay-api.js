function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

export function searchPhotos(input) {
  showLoader(); 

  const searchParams = new URLSearchParams({
    key: '43903713-409f48a94c7346dbfb07fdc03',
    q: input.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url);
}