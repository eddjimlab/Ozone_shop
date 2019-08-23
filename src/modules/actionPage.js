import filter from './filter';

export default function actionPage() {
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