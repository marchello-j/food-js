function tabs(
	tabsSelector,
	tabsContentSelector,
	tabsParentsSelector,
	activeClass
) {
	const tabs = document.querySelectorAll(tabsSelector),
		tabsContents = document.querySelectorAll(tabsContentSelector),
		tabsParents = document.querySelector(tabsParentsSelector);

	function hideTabContent() {
		tabsContents.forEach((item) => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach((item) => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		tabsContents[i].classList.add('show', 'fade');
		tabsContents[i].classList.remove('hide');
		tabs[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	tabsParents.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item, i) => {
				if (target === item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

export default tabs;
