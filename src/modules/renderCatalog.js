import filter from './filter';

export default function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card');
    const catalogList = document.querySelector('.catalog-list');
    const catalogBtn = document.querySelector('.catalog-button');
    const catalogWrapper = document.querySelector('.catalog');
    const categories = new Set();
    const filterTitle = document.querySelector('.filter-title h5');

    cards.forEach(card => {
        categories.add(card.dataset.categories);
    });

    categories.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.append(li);
    });
    // все товары в меню
    const allGoods = document.createElement('li');
    allGoods.textContent = 'Все товары';
    catalogList.prepend(allGoods);


    const allLi = catalogList.querySelectorAll('li');

    catalogBtn.addEventListener('click', (event) => {
        if (catalogWrapper.style.display) {
            catalogWrapper.style.display = '';
        } else {
            catalogWrapper.style.display = 'block';
        }

        if (event.target.tagName === 'LI') {
            allLi.forEach((el) => {
                if (el === event.target) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });
            filterTitle.textContent = event.target.textContent;
            filter();
        }
    });
}