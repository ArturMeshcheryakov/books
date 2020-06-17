'use strict';

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const list1 = book[0].querySelectorAll('ul li');
const list2 = book[5].querySelectorAll('ul li');
const list3 = book[2].querySelectorAll('ul li');
const adv = document.querySelector('.adv');
let image = document.querySelector('body');
let book3 = book[4].querySelector('h2 a');
let chapter = document.createElement('li');
chapter.textContent = 'Глава 8: За пределами ES6';

books.prepend(book[1]);
books.append(book[2]);
book[3].before(book[4]);
book3.textContent = '"Книга 3. this и Прототипы Объектов"';

image.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

adv.remove();

list1[3].after(list1[6]);
list1[4].before(list1[8]);
list1[10].before(list1[2]);

list2[1].after(list2[9]);
list2[9].after(list2[3]);
list2[4].after(list2[2]);
list2[8].before(list2[5]);

list3[8].after(chapter);


console.log(book);



