"use strict";

import actionPage from './modules/actionPage';
import addCart from './modules/addCart';
import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCart from './modules/toggleCart';
import toggleCheckbox from './modules/toggleCheckbox';


(async function () {
   const db = await getData()
        renderCards(db);
        renderCatalog();
        actionPage();
        addCart();
        toggleCart();
        toggleCheckbox();
}());