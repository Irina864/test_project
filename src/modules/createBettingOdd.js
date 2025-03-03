export function createBettingOdd(bet, container) {
  const article = document.createElement('article');
  article.className = 'bet';

  const countryDiv = document.createElement('div');
  countryDiv.className = 'country';

  const flagImg = document.createElement('img');
  flagImg.className = 'country__flag';
  flagImg.src = bet.country.flag;
  flagImg.alt = 'flag';

  const countryName = document.createElement('span');
  countryName.className = 'country__name';
  countryName.textContent = bet.country.name;

  countryDiv.appendChild(flagImg);
  countryDiv.appendChild(countryName);
  article.appendChild(countryDiv);

  const oddDiv = document.createElement('div');
  oddDiv.className = 'odd';

  const oddHeader = document.createElement('div');
  oddHeader.className = 'odd__header';

  const winTitle = document.createElement('span');
  winTitle.className = 'odd__title';
  winTitle.textContent = 'W';

  const lossTitle = document.createElement('span');
  lossTitle.className = 'odd__title';
  lossTitle.textContent = 'L';

  oddHeader.appendChild(winTitle);
  oddHeader.appendChild(lossTitle);
  oddDiv.appendChild(oddHeader);

  bet.odds.forEach((odd) => {
    const oddBox = document.createElement('div');
    oddBox.className = 'odd__box';

    const oddTop = document.createElement('div');
    oddTop.className = 'odd__top';

    const oddText = document.createElement('span');
    oddText.className = 'odd__text';
    oddText.textContent = odd.win;

    const arrowImg = document.createElement('img');
    arrowImg.className = 'odd__arrow';
    arrowImg.src = './img/icon-up-arrow.svg';
    arrowImg.alt = 'up';

    oddTop.appendChild(oddText);
    oddTop.appendChild(arrowImg);

    const oddBottom = document.createElement('span');
    oddBottom.className = 'odd__bottom';
    oddBottom.textContent = odd.loss;

    oddBox.appendChild(oddTop);
    oddBox.appendChild(oddBottom);
    oddDiv.appendChild(oddBox);
  });

  article.appendChild(oddDiv);
  container.appendChild(article);
}
