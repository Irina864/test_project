const leagueItems = {
  closeButtons: document.querySelectorAll('.league__button'),
  arrows: document.querySelectorAll('.league__close-img'),
  matches: document.querySelectorAll('.league__matches'),
};

leagueItems.closeButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    leagueItems.arrows[index].classList.toggle('transform_180');
    leagueItems.matches[index].classList.toggle('none');
  });
});
