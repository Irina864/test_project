import { removeClass } from './helpers';

const weekItems = {
  dateContainers: document.querySelectorAll('.week__date'),
  dayContainers: document.querySelectorAll('.week__day'),
  containers: document.querySelectorAll('.week__item'),
  circles: document.querySelectorAll('.week__circle'),
};

// установка дат и дней недели
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

// показать форму выбора даты
document.querySelector('.calendar__icon-wrap').addEventListener('click', () => {
  document.querySelector('.calendar__date').classList.toggle('none');
});

// выбор даты в неделе
weekItems.containers.forEach((weekItem, index) => {
  weekItem.addEventListener('click', () => {
    weekItems.containers.forEach((item) => removeClass('week_active', item));
    weekItems.dateContainers.forEach((item) =>
      removeClass('week_active', item)
    );
    weekItems.dayContainers.forEach((item) => removeClass('week_active', item));
    weekItems.circles.forEach((item) => removeClass('week_active', item));

    weekItem.classList.add('week_active');
    weekItems.dateContainers[index].classList.add('week_active');
    weekItems.dayContainers[index].classList.add('week_active');
    weekItems.circles[index].classList.add('week_active');
  });
});
