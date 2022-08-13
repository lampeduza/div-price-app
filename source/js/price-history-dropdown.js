const title = document.querySelector('.history__title-emphasized--clicked');
const list = document.querySelector('.history__dropdown-list--contrete');
const buttons = list.querySelectorAll('.history__dropdown-button');

const changeTitle = () => {
    let currentItem = list.querySelector('.history__dropdown-item--current');
    for (const button of buttons) {
        button.addEventListener('click', () => {
            const span = title.querySelector('.history__header');

            span.textContent = button.textContent;
            currentItem.classList.remove('history__dropdown-item--current');
            currentItem = button.parentElement;
            currentItem.classList.add('history__dropdown-item--current');
        });
    }
}

export {changeTitle};