// ==UserScript==
// @name         Highlight Yandex Ads
// @namespace    https://github.com/1-Mysty-1/hya
// @version      highlightads.js
// @description  Highlight Ads in Yandex Search
// @description:ru Подсветка рекламы при выдаче результатов
// @license      MIT
// @author       Mysty
// @match        https://yandex.ru/*
// @match        https://ya.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yandex.ru
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    switch(window.location.host) {
            case("ya.ru"):
            var spans = document.getElementsByTagName("span");
            for (var i = 0; i < spans.length; i++) {
                if (spans[i].innerText.startsWith("Реклама · ") || spans[i].innerText.trim().toLowerCase() === "реклама") {
                    spans[i].style.color = 'red';
                    let li_el = spans[i];
                    while (li_el.tagName !== 'LI') {
                        li_el = li_el.parentElement;
                    }
                    li_el.style.border = '2pt groove red';
                }
            }
            break;
            case("yandex.ru"):
            var items = document.getElementsByTagName("span");
            for (i = 0; i < items.length; i++) {
                if (items[i].innerText.startsWith("Реклама · ") || items[i].innerText.trim() === "Реклама") {
                    let li_el = items[i];
                    while (li_el.tagName !== 'LI') {
                        li_el = li_el.parentElement;
                    }
                    li_el.style.border = '2pt groove red';
                }

            }
            break;

    }

})();