import { createLeagueArticle } from './createLeagueArticle';
import { createMatchCard } from './createMatchCard';

// получение и ренедринг данных о матчах
export function getMatches() {
  fetch('../data/footballData.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((leagueItem, indexLeague) => {
        createLeagueArticle({
          imgSrc: leagueItem.league__img,
          leagueName: leagueItem.league__name,
          countryFlagSrc: leagueItem.country__flag,
          countryName: leagueItem.country__name,
          matchesCount: leagueItem.matches__count,
        });
        leagueItem.matches.forEach((match) => {
          createMatchCard({
            clockTimeText: match.clock__time,
            clockGmtText: match.clock__gmt,
            stateTextText: match.state__text,
            iconUrlState: match.state__icon,
            teamCountFirst: match.team__count[0],
            teamFlagFirst: match.team__flag[0],
            teamCountSecond: match.team__count[1],
            teamFlagSecond: match.team__flag[1],
            countryFirst: match.match__country[0],
            countrySecond: match.match__country[1],
            infoItems: match.match__item,
            iconLeague: match.match__icon_league,
            setPinup: match.pinup,
            container:
              document.querySelectorAll('.league__matches')[indexLeague],
            isMobile: match.for_mobile,
          });
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
