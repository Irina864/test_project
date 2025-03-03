// создание карточки матча
export function createMatchCard({
  clockTimeText,
  clockGmtText,
  stateTextText,
  iconUrlState,
  teamCountFirst,
  teamFlagFirst,
  teamCountSecond,
  teamFlagSecond,
  countryFirst,
  countrySecond,
  infoItems,
  iconLeague,
  setPinup,
  container,
  isMobile,
}) {
  const article = document.createElement('article');
  article.className = 'match';
  if (!isMobile) {
    article.classList.add('live');
  }
  const infoDiv = document.createElement('div');
  infoDiv.className = 'info';

  const clockDiv = document.createElement('div');
  clockDiv.className = 'clock';

  const clockTime = document.createElement('span');
  clockTime.className = 'clock__time';
  clockTime.textContent = clockTimeText;

  const clockGmt = document.createElement('span');
  clockGmt.className = 'clock__gmt';
  clockGmt.textContent = clockGmtText;

  clockDiv.append(clockTime, clockGmt);

  const stateDiv = document.createElement('div');
  stateDiv.className = 'state';

  const stateIcon = document.createElement('div');
  stateIcon.className = 'state__icon';
  stateIcon.style.backgroundImage = `url('${iconUrlState}')`;

  const stateText = document.createElement('span');
  stateText.className = 'state__text';
  if (stateTextText === 'Upcoming') {
    stateDiv.classList.add('upcoming');
    article.classList.add('upcoming');
  }
  stateText.textContent = stateTextText;

  stateDiv.append(stateIcon, stateText);

  const favoriteDiv = document.createElement('div');
  favoriteDiv.className = 'favorite';

  const favoriteIcon = document.createElement('i');
  favoriteIcon.className = 'favorite__icon fa-solid fa-star';

  favoriteDiv.appendChild(favoriteIcon);

  infoDiv.append(clockDiv, stateDiv, favoriteDiv);

  const matchCardDiv = document.createElement('div');
  matchCardDiv.className = 'match__card';

  const teamsDiv = document.createElement('div');
  teamsDiv.className = 'match__teams';

  const teamsWrapDiv = document.createElement('div');
  teamsWrapDiv.className = 'teams-wrap';

  const team1 = document.createElement('div');
  team1.className = 'team';

  const team1FlagWrap = document.createElement('div');
  team1FlagWrap.className = 'team__flag-wrap';

  const team1Flag = document.createElement('img');
  team1Flag.src = teamFlagFirst;
  team1Flag.alt = 'flag';
  team1Flag.className = 'team__flag';

  const team1Count = document.createElement('p');
  team1Count.className = 'team__count';
  teamCountFirst
    ? (team1Count.textContent = teamCountFirst)
    : (team1Count.innerHTML = `<div class="team__nocount"></div>`);

  team1FlagWrap.appendChild(team1Flag);
  team1.append(team1FlagWrap, team1Count);

  const vsText = document.createElement('div');
  vsText.className = 'vs';
  vsText.textContent = 'vs';

  const team2 = document.createElement('div');
  team2.className = 'team';

  const team2Count = document.createElement('p');
  team2Count.className = 'team__count';
  teamCountSecond
    ? (team2Count.textContent = teamCountSecond)
    : (team2Count.innerHTML = `<div class="team__nocount"></div>`);

  const team2FlagWrap = document.createElement('div');
  team2FlagWrap.className = 'team__flag-wrap';

  const team2Flag = document.createElement('img');
  team2Flag.src = teamFlagSecond;
  team2Flag.alt = 'flag';
  team2Flag.className = 'team__flag';

  team2FlagWrap.appendChild(team2Flag);
  team2.append(team2Count, team2FlagWrap);

  teamsWrapDiv.append(team1, vsText, team2);
  teamsDiv.append(teamsWrapDiv);

  const countriesDiv = document.createElement('div');
  countriesDiv.className = 'match__countries';

  const country1 = document.createElement('p');
  country1.className = 'match__country';
  country1.textContent = countryFirst;

  const country2 = document.createElement('p');
  country2.className = 'match__country';
  country2.textContent = countrySecond;

  countriesDiv.append(country1, country2);
  teamsDiv.appendChild(countriesDiv);

  matchCardDiv.appendChild(teamsDiv);

  const matchInfoList = document.createElement('ul');
  matchInfoList.className = 'match__info';

  const matchPointsData = [
    { icon: './img/vs.svg', text: infoItems[0] },
    { icon: 'calendar_today', isMaterialIcon: true, text: infoItems[1] },
    { icon: 'stadium', isMaterialIcon: true, text: infoItems[2] },
    { icon: iconLeague, text: infoItems[3], isLeagueIcon: true },
  ];

  matchPointsData.forEach((point) => {
    const matchPoint = document.createElement('li');
    matchPoint.className = 'match__point';

    let matchIcon;
    if (point.isMaterialIcon) {
      matchIcon = document.createElement('span');
      matchIcon.className = 'match__icon material-symbols-outlined';
      matchIcon.textContent = point.icon;
    } else {
      matchIcon = document.createElement('img');
      matchIcon.className = point.isLeagueIcon
        ? 'match__icon-league'
        : 'match__icon';
      matchIcon.src = point.icon;
      matchIcon.alt = 'icon';
    }

    const matchItem = document.createElement('span');
    matchItem.className = 'match__item';
    matchItem.textContent = point.text;

    matchPoint.append(matchIcon, matchItem);
    matchInfoList.appendChild(matchPoint);
  });

  matchCardDiv.appendChild(matchInfoList);

  article.append(infoDiv, matchCardDiv);

  if (setPinup) {
    article.style.paddingBottom = '0px';
    const pinupDiv = document.createElement('div');
    pinupDiv.className = 'pinup';

    const pinupBox = document.createElement('div');
    pinupBox.className = 'pinup__box';

    const pinupText = document.createElement('p');
    pinupText.className = 'pinup__text';
    pinupText.textContent = 'Best odds from:';

    const pinupImg = document.createElement('img');
    pinupImg.className = 'pinup__img';
    pinupImg.src = './img/logo-pin-up.svg';
    pinupImg.alt = 'pin-up';

    pinupBox.append(pinupText, pinupImg);
    pinupDiv.appendChild(pinupBox);

    const pinupButton = document.createElement('button');
    pinupButton.className = 'pinup__button';
    pinupButton.textContent = 'BET NOW';

    pinupDiv.appendChild(pinupButton);

    article.append(pinupDiv);
  }

  container.appendChild(article);
}
