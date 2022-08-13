const accounts = document.querySelectorAll('.account');


const showPages = () => {
	accounts.forEach((account) => {
		const button = account.querySelector('.account__sign-in');
		const accountWindow = account.querySelector('.account__create');
		const closeButton = accountWindow.querySelector('.account__close');

		button.addEventListener('click', () => {
			accountWindow.classList.add('account__create--opened');
			button.disabled = true;
			closeButton.addEventListener('click', () => {
				accountWindow.classList.remove('account__create--opened');
				button.disabled = false;
			}, {once: true});
		});
	});
}


export {showPages};