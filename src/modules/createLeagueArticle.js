export function createLeagueArticle({
  imgSrc,
  leagueName,
  countryFlagSrc,
  countryName,
  matchesCount,
}) {
  const article = document.createElement('article');
  article.className = 'league';

  const headerDiv = document.createElement('div');
  headerDiv.className = 'league__header';

  const titleDiv = document.createElement('div');
  titleDiv.className = 'league__title';

  const imgWrapDiv = document.createElement('div');
  imgWrapDiv.className = 'league__img-wrap';

  const leagueImg = document.createElement('img');
  leagueImg.className = 'league__img';
  leagueImg.src = imgSrc;
  leagueImg.alt = 'league';

  imgWrapDiv.appendChild(leagueImg);
  titleDiv.appendChild(imgWrapDiv);

  const leagueH3 = document.createElement('h3');
  leagueH3.className = 'league__name';
  leagueH3.textContent = leagueName;
  titleDiv.appendChild(leagueH3);

  const countryDiv = document.createElement('div');
  countryDiv.className = 'country';

  const flagWrapDiv = document.createElement('div');
  flagWrapDiv.className = 'country__flag-wrap';

  const countryFlag = document.createElement('img');
  countryFlag.className = 'country__flag';
  countryFlag.src = countryFlagSrc;
  countryFlag.alt = 'flag';

  flagWrapDiv.appendChild(countryFlag);
  countryDiv.appendChild(flagWrapDiv);

  const countryP = document.createElement('p');
  countryP.className = 'country__name';
  countryP.textContent = countryName;

  countryDiv.appendChild(countryP);
  titleDiv.appendChild(countryDiv);

  const matchesDiv = document.createElement('div');
  matchesDiv.className = 'matches';

  const matchesTitleSpan = document.createElement('span');
  matchesTitleSpan.className = 'matches__title';
  matchesTitleSpan.textContent = 'Matches:';

  const matchesCountSpan = document.createElement('span');
  matchesCountSpan.className = 'matches__count';
  matchesCountSpan.textContent = matchesCount;

  matchesDiv.appendChild(matchesTitleSpan);
  matchesDiv.appendChild(matchesCountSpan);
  titleDiv.appendChild(matchesDiv);

  headerDiv.appendChild(titleDiv);

  const button = document.createElement('button');
  button.className = 'league__button';

  const closeImg = document.createElement('img');
  closeImg.src = './img/icon-arrow-group.svg';
  closeImg.alt = 'close';
  closeImg.className = 'league__close-img';

  button.appendChild(closeImg);
  headerDiv.appendChild(button);

  article.appendChild(headerDiv);

  const matchesSection = document.createElement('div');
  matchesSection.className = 'league__matches';
  article.appendChild(matchesSection);

  document.querySelector('.league-group').appendChild(article);
}
