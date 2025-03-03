import { createBettingOdd } from './createBettingOdd';

// получение и ренедринг данных о ставках
export function getOdds() {
  fetch('../data/oddsData.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((bet) => {
        createBettingOdd(bet, document.querySelector('.odds__content'));
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
