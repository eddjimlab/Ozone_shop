export default function filter() {
    const cards = document.querySelectorAll(".goods .card"),
        discountCheckbox = document.getElementById("discount-checkbox"),
        min = document.getElementById("min"),
        max = document.getElementById("max"),
        activeLi = document.querySelector('.catalog-list li.active'),
        allGoods = 'Все товары';

    cards.forEach((card) => {
        const cardPrice = card.querySelector(".card-price");
        const price = parseFloat(cardPrice.textContent);
        const discount = card.querySelector('.card-sale');
        card.parentNode.style.display = '';

        if ((min.value && price < min.value) ||
            (max.value && price > max.value)) {
            card.parentNode.style.display = 'none';
        } else if (discountCheckbox.checked && !discount) {
            card.parentNode.style.display = 'none';
        } else if (activeLi) {
            if (activeLi.textContent === allGoods) {
                card.parentNode.style.display = '';
            } else if (card.dataset.categories !== activeLi.textContent) {
                card.parentNode.style.display = 'none';
            }
        } else {
            card.parentNode.style.display = '';
        }
    });
}