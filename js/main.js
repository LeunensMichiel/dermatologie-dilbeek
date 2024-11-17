const notification = document.querySelector('.notification');
const notificationButton = document.querySelector('#notification-close');
const scrollDownChevron = document.querySelector('#scroll_down');
const cardsSection = document.querySelector('#section_cards');

notificationButton.addEventListener('click', () => {
  setTimeout(function () {
    if (notification.classList.contains('notification--hidden')) {
      notification.style.display = 'none';
    } else {
      notification.style.display = 'flex';
    }
  }, 150);
  notification.classList.toggle('notification--hidden');
});

let done = false;
window.onscroll = () => {
  const scrollLimit = window.innerHeight / 2;
  if (!done && window.scrollY >= scrollLimit) {
    done = true;

    setTimeout(function () {
      notification.classList.toggle('notification--hidden');
    }, 500);
  }
};

scrollDownChevron.addEventListener('click', () => {
  cardsSection.scrollIntoView({
    behavior: 'smooth',
  });
});
