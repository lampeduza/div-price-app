const toggle = document.querySelector('.switcher__input');
const apps = document.querySelectorAll('.app');
const textOn = document.querySelector('.switcher__text--on');
const textOff = document.querySelector('.switcher__text--off');

const switchTheme = () => {
    toggle.addEventListener('change', () => {
        if (!toggle.checked) {
            apps.forEach((app) => {
                app.classList.remove('app--dark');
                app.classList.add('app--light');
                textOn.style.color = '#3cbc80';
                textOff.style.color = 'rgba(45, 46, 51, 0.2)';
            });
        } else {
            apps.forEach((app) => {
                app.classList.add('app--dark');
                app.classList.remove('app--light');
                textOn.style.color = '#9698A3';
                textOff.style.color = '#70F0B4';
            });
        }
    });
}

export {switchTheme};