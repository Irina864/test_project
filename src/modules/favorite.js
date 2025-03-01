const favoriteItems = document.querySelectorAll('.favorite__icon');

// выбор элемента в избранное
favoriteItems.forEach((fav) => {
  fav.addEventListener('click', () => {
    fav.classList.toggle('active');
  });
});
