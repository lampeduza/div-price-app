/* all stores */

const list = document.querySelector('.favorite__filter-list--example');
const items = list.querySelectorAll('.favorite__filter-item');

const allStoresList = document.querySelector('.all-stores');
const allStoresButton = list.querySelector('.favorite__filter-item--all-stores button');
const allStoresArrow = allStoresButton.querySelector('use');
const byMonthsList = document.querySelector('.by-months');
const byMonthsButton = list.querySelector('.favorite__filter-item--by-months button')
const byMonthsArrow = byMonthsButton.querySelector('use');

const allStoresLinks = allStoresList.querySelectorAll('.all-stores__link');
const byMonthsLinks = byMonthsList.querySelectorAll('.by-months__link');


function dropLists () {
	items.forEach((item) => {
		const button = item.querySelector('button');
		
		button.addEventListener('click', () => {
			if (button === allStoresButton) {
				byMonthsList.classList.remove('by-months--opened');
				byMonthsArrow.setAttribute('xlink:href', '#arrow-down');

				allStoresList.classList.add('all-stores--opened');
				allStoresArrow.setAttribute('xlink:href', '#arrow-up');
			} else {
				byMonthsList.classList.add('by-months--opened');
				byMonthsArrow.setAttribute('xlink:href', '#arrow-up');

				allStoresList.classList.remove('all-stores--opened');
				allStoresArrow.setAttribute('xlink:href', '#arrow-down');
			}
		});
	});
};

function changeStoresTitle () {
	let currentHeaderAllStores = allStoresList.querySelector('.all-stores__title--title');
	const span = allStoresButton.querySelector('span');

	allStoresLinks.forEach((link) => {
		const header = link.querySelector('h4');

		link.addEventListener('click', (evt) => {
			evt.preventDefault();

			currentHeaderAllStores.style.color = 'var(--primary-text)';
			header.style.color = 'var(--primary)';
			currentHeaderAllStores = header;

			allStoresList.classList.remove('all-stores--opened');
			allStoresArrow.setAttribute('xlink:href', '#arrow-down');
			span.textContent = header.textContent;
		});
	});
};


function changeByMonthsTitle () {
	let currentHeaderByMonths = byMonthsList.querySelector('.by-months__title--title');
	const span = byMonthsButton.querySelector('span');

	byMonthsLinks.forEach((link) => {
		const header = link.querySelector('h4');

		link.addEventListener('click', (evt) => {
			evt.preventDefault();

			currentHeaderByMonths.style.color = 'var(--primary-text)';
			header.style.color = 'var(--primary)';
			currentHeaderByMonths = header;

			byMonthsList.classList.remove('by-months--opened');
			byMonthsArrow.setAttribute('xlink:href', '#arrow-down');
			span.textContent = header.textContent;
		});
	});
};

window.addEventListener('click', (evt) => {
	if (!evt.target.closest('.favorite__filter')) {
		byMonthsList.classList.remove('by-months--opened');
		byMonthsArrow.setAttribute('xlink:href', '#arrow-down');

		allStoresList.classList.remove('all-stores--opened');
		allStoresArrow.setAttribute('xlink:href', '#arrow-down');
	}
});

document.addEventListener('keydown', (evt) => {
	if (evt.code === 'Escape') {
		byMonthsList.classList.remove('by-months--opened');
		byMonthsArrow.setAttribute('xlink:href', '#arrow-down');

		allStoresList.classList.remove('all-stores--opened');
		allStoresArrow.setAttribute('xlink:href', '#arrow-down');
	}
});

export {dropLists, changeStoresTitle, changeByMonthsTitle};

