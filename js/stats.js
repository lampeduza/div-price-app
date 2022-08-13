const button = document.querySelector('.statistics__button');
const buttonIcon = button.querySelector('svg use');
const statistics = document.querySelector('.statistics');

button.addEventListener('click', () => {
     if (!statistics.matches('.statistics--hidden')) {
          statistics.classList.add('statistics--hidden');
          button.classList.remove('statistics__button--showed');
          buttonIcon.setAttribute('xlink:href', '#statistics-arrow-down');
     } else {
          statistics.classList.remove('statistics--hidden');
          button.classList.add('statistics__button--showed');
          buttonIcon.setAttribute('xlink:href', '#statistics-arrow-up');
     }
});

export {button, buttonIcon, statistics};