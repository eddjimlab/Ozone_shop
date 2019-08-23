"use strict";

// checkbox
function toggleCheckbox() {
    const checkbox = document.querySelectorAll(".filter-check_checkbox");

    checkbox.forEach(elem => {
        elem.addEventListener("change", function () {
            if (this.checked === true) {
                this.nextElementSibling.classList.add("checked");
            } else {
                this.nextElementSibling.classList.remove("checked");
            }
        });
    });
}

// checkbox
// корзина
function toggleCart() {
    const btnCart = document.getElementById("cart");
    const modalCart = document.querySelector(".cart");
    const cartClose = document.querySelector(".cart-close");

    btnCart.addEventListener("click", () => {
        modalCart.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
    cartClose.addEventListener("click", () => {
        modalCart.style.display = "none";
        document.body.style.overflow = "";
    });
}

// end корзина



// добавление/удаление товара в корзине
function addCart() {
    const cards = document.querySelectorAll(".goods .card"),
        cartWrapper = document.querySelector(".cart-wrapper"),
        cartEmpty = document.querySelector("#cart-empty"),
        countGoods = document.querySelector(".counter");




    cards.forEach(card => {
        const btn = card.querySelector(".btn");
        btn.addEventListener("click", () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.append(cardClone);
            showData();

            const removeBtn = cardClone.querySelector(".btn");
            removeBtn.textContent = "Удалить из корзины";
            removeBtn.style.cssText = "background: red; border: 1px solid red";
            removeBtn.addEventListener("click", () => {
                cardClone.remove();
                showData();
            });
        });
    });

    function showData() {
        const cardsCart = cartWrapper.querySelectorAll(".card"),
            cardsPrice = cartWrapper.querySelectorAll(".card-price"),
            cardTotal = document.querySelector(".cart-total span");
        let sum = 0;

        countGoods.textContent = cardsCart.length;

        cardsPrice.forEach(cardPrice => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
        });

        cardTotal.textContent = sum;

        if (cardsCart.length !== 0) {
            cartEmpty.remove();
        } else {
            cartWrapper.append(cartEmpty);
        }
    }
}

// добавление/удаление товара в корзине end

// фильтр акции
function actionPage() {
    const cards = document.querySelectorAll(".goods .card"),
        discountCheckbox = document.getElementById("discount-checkbox"),
        goods = document.querySelector(".goods"),
        min = document.getElementById("min"),
        max = document.getElementById("max"),
        search = document.querySelector(".search-wrapper_input"),
        searchBtn = document.querySelector(".search-btn"),
        inputSearch = document.querySelector('input');

    discountCheckbox.addEventListener("click", filter);
    max.addEventListener("change", filter);
    min.addEventListener("change", filter);





    //===================================================    
    // search engine
    function searchFunc() {
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach(card => {
            const title = card.querySelector(".card-title");
            if (!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
    }
    //button search
    searchBtn.addEventListener("click", () => {
        searchFunc();
    });
    //enter search
    inputSearch.addEventListener('keydown', (ev) => {
        if (ev.keyCode === 13) {
            searchFunc();
        }
    });
    //==============================================    
}
// фильтр акции end
function filter() {
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
//получение данных с сервера
function getData() {
    const goodsWrapper = document.querySelector('.goods');
    return fetch('../db/db.json').then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.status);
            }
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.warn(err);
            goodsWrapper.innerHTML = '<div style="color: red; font-size: 30px">Упс, что -то пошло не так ...</div>'

        });

}

// вывод карточек товара
function renderCards(data) {
    const goodsWrapper = document.querySelector('.goods');
    data.goods.forEach(good => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
        card.innerHTML =
            `
                                <div class="card" data-categories="${good.category}">
                                ${
                                    good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''
                                }
									<div class="card-img-wrapper">
										<span class="card-img-top"
											style="background-image: url('${good.img}')"></span>
									</div>
									<div class="card-body justify-content-between">
										<div class="card-price" style=${good.sale ? 'color:red' : ''}>${good.price} ₽</div>
										<h5 class="card-title">${good.title}</h5>
										<button class="btn btn-primary">В корзину</button>
									</div>
								</div>
        `;
        goodsWrapper.append(card);
    });

}

//получение данных с сервера end

// render Каталога
function renderCatalog() {
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
// render Каталога end


getData().then((data) => {
    renderCards(data);
    renderCatalog();
    actionPage();
    addCart();
    toggleCart();
    toggleCheckbox();
});