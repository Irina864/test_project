// hiding and opening blocks with match cards
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('league__close-img')) {
    event.target.classList.toggle('transform_180');
    const index = Array.from(
      document.querySelectorAll('.league__close-img')
    ).indexOf(event.target);
    document
      .querySelectorAll('.league__matches')
      [index].classList.toggle('none');
  }
});
