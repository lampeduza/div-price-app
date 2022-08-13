const body = document.body;
const menu = body.querySelectorAll('.navigation__list');
const menuItems = body.querySelectorAll('.navigation__item');

function click () {
	const green = '.navigation__item--green';
	const red = '.navigation__item--red';
	const blue = '.navigation__item--blue';
	const active = '.navigation__item--active';
	let currentItem = body.querySelector('.navigation__item--active') || null;

	menuItems.forEach((item) => {
		const button = item.querySelector('button');

		if (!item.matches(active)) {
			button.style.cssText = 'background: none; box-shadow: none';
		}

		item.addEventListener('click', () => {
			if (item.matches(active)) {
				item.classList.remove('navigation__item--active');
				button.style.cssText = 'background: none; box-shadow: none';
				currentItem = null;
			} else {
				if (currentItem !== null) {
						currentItem.classList.remove('navigation__item--active');

						const currentButton = currentItem.querySelector('button');

						currentButton.style.cssText = 'background: none; box-shadow: none';
				}

				currentItem = item;

				item.classList.add('navigation__item--active');

				if (item.matches(green)) {
					button.style.cssText = 'background: linear-gradient(135deg, #70F0B4 14.06%, #53BDF6 59.9%, #5381E3 100%);';
				}

				if (item.matches(red)) {
					button.style.cssText = 'background: linear-gradient(135.78deg, #F1A83D 12.01%, #EB692C 43.96%, #D95B65 72.5%);';
				}

				if (item.matches(blue)) {
					button.style.cssText = 'background: linear-gradient(135.78deg, #4FB6F9 13.03%, #4D7CEB 43.87%, #553DDA 73.53%);';
				}
			}
		});

	});
}


export {click};