export default function addCart() {
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