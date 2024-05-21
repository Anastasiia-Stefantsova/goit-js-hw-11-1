function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

export function fetchPhotos(input) {
  showLoader();

  const searchParams = new URLSearchParams({
    key: '43903713-409f48a94c7346dbfb07fdc03',
    q: input,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(
        'Sorry, there are no image matching your search query. Please try again!'
      );
    }
    return response.json();
  });
}


