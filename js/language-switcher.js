const settingLanguageContainer = document.querySelector('.settings__content');
const setLanguageButton = settingLanguageContainer.querySelector('.settings__language-current');
const currentLanguage = setLanguageButton.querySelector('span');
const buttonArrow = setLanguageButton.querySelector('use');
const languageList = settingLanguageContainer.querySelector('.settings__language-list');

let selectedItem = languageList.querySelector('.settings__language-item--current');
let isOpenedList = false;

function setLanguageChange () {
	setLanguageButton.addEventListener('click', () => {
		buttonArrow.setAttribute('xlink:href', '#arrow-up');
		languageList.classList.add('settings__language-list--opened');
	
		if (isOpenedList) {
			hideLanguageList();
			return;
		}

		isOpenedList = true;

		languageList.addEventListener('click', languageListClickHandler);
		document.addEventListener('keydown', escapeKeydownHandler);
		window.addEventListener('click', windowClickHandler);
	});
};

function languageListClickHandler (evt) {
	const item = evt.target;

	selectedItem.classList.remove('settings__language-item--current');
	item.classList.add('settings__language-item--current');
	selectedItem = item;

	currentLanguage.textContent = item.textContent;
	hideLanguageList();
};

function escapeKeydownHandler (evt) {
	if (evt.target.code = 'Escape') {
		hideLanguageList();
	}
};

function windowClickHandler (evt) {
	if (!evt.target.closest('.settings__content')) {
		hideLanguageList();
	}
};

function hideLanguageList () {
	buttonArrow.setAttribute('xlink:href', '#arrow-down');

	languageList.classList.remove('settings__language-list--opened');
	removeLanguageListHandlers();
	isOpenedList = false;
};

function removeLanguageListHandlers () {
	languageList.removeEventListener('click', languageListClickHandler);
	document.removeEventListener('keydown', escapeKeydownHandler);
	window.removeEventListener('click', windowClickHandler);
}

export {setLanguageChange};

