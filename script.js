
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const searchId = document.getElementById('super_link');
console.log(searchId);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const searchClass = document.querySelectorAll('.card-link');
searchClass.forEach((element) => {
    element.textContent = 'ссылка';
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const searchClassElem = document.querySelector('.card-body');
const searchClassLink = searchClassElem.querySelectorAll('.card-link')
console.log(searchClassLink);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const searchFirstElem = document.querySelector('[data-number="50"]')
console.log(searchFirstElem);

// 5. Выведите содержимое тега title в консоль.

const searchTag = document.querySelector('title')
console.log(searchTag.textContent);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const child = document.querySelector(".card-title")
console.log(child.parentNode);

// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const searchCard = document.querySelector(".card")
const create = document.createElement('p');
create.textContent = "Привет";
searchCard.prepend(create)

// 8. Удалите тег h6 на странице.

const searchH6 = document.querySelector("h6")
searchH6.remove();