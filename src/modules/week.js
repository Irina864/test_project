import { removeClass } from './helpers';

const weekItems = {
  containers: document.querySelectorAll('.week__item'),
  dateContainers: document.querySelectorAll('.week__date'),
  dayContainers: document.querySelectorAll('.week__day'),
  circles: document.querySelectorAll('.week__circle'),
};

// setting dates and days of the week
export function setCurrentDates() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const weekDates = [];
  for (let i = -1; i <= 5; i++) {
    const date = new Date();
    date.setDate(new Date().getDate() + i);
    weekDates.push(date);
  }
  weekDates.forEach((date, index) => {
    weekItems.dateContainers[index].textContent = date.getDate();
    if (index !== 0 && index !== 1 && index !== 2)
      weekItems.dayContainers[index].textContent = daysOfWeek[date.getDay()];
  });
}

// select the date of the week
weekItems.containers.forEach((weekItem, index) => {
  weekItem.addEventListener('click', () => {
    weekItems.containers.forEach((item) =>
      removeClass('week__item_active', item)
    );
    weekItems.dateContainers.forEach((item) =>
      removeClass('week__date_active', item)
    );
    weekItems.dayContainers.forEach((item) =>
      removeClass('week__day_active', item)
    );
    weekItems.circles.forEach((item) =>
      removeClass('week__circle_active', item)
    );

    weekItem.classList.add('week__item_active');
    weekItems.dateContainers[index].classList.add('week__date_active');
    weekItems.dayContainers[index].classList.add('week__day_active');
    weekItems.circles[index].classList.add('week__circle_active');
  });
});
