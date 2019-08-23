export default function toggleCart() {
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