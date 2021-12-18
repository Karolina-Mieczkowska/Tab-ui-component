const tabs = document.querySelectorAll('.component__tab');
const tabsContainer = document.querySelector('.component__tab-container');
const contentContainers = document.querySelectorAll('.component__content');

tabsContainer.addEventListener('click', function(ev) {
    const clicked = ev.target.closest('.component__tab');

    if (!clicked) return;

    tabs.forEach(function(tab) {
        tab.classList.remove('component__tab--active');
    })

    contentContainers.forEach(function(container) {
        container.classList.remove('component__content--active')
    })

    clicked.classList.add('component__tab--active');
    document.querySelector(`.component__content--${clicked.dataset.tab}`).classList.add('component__content--active');
})