// adding and removing favorites
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('favorite__icon')) {
    event.target.classList.toggle('active');
  }
});
