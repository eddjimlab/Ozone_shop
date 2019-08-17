
'use strict';

// checkbox

const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach((elem)=>{
    elem.addEventListener('change', function () {
        if (this.checked === true) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});
// checkbox
// корзина
const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const cartClose = document.querySelector('.cart-close');

btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex'; 
    document.body.style.overflow = 'hidden';
});
cartClose.addEventListener('click', () => {
    modalCart.style.display = 'none'; 
    document.body.style.overflow = '';

});
// end корзина

// добавление/удаление товара в корзине
const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.querySelector('#cart-empty'),
    countGoods = document.querySelector('.counter');

cards.forEach((card) => {
    const btn = card.querySelector('.btn');
    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.append(cardClone);
        cartEmpty.remove();
        showData();
    });
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
}

// добавление/удаление товара в корзине end