'use strict';

var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон',

];

var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'

];

var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];

var EYE_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');


var getRandomInteger = function (min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


var getRandomItem = function (array) {
    return array[getRandomInteger(0, array.length - 1)];
};


var createPerson = function () {
    return {
        name: getRandomItem(NAMES) + ' ' + getRandomItem(SURNAMES),
        coatColor: getRandomItem(COAT_COLORS),
        eyesColor: getRandomItem(EYE_COLORS)
    }

};

var persons = [];


for (var i = 0; i < 4; i++) {
    persons.push(createPerson())
}


var fillPerson = function (person) {
    var personElement = similarWizardTemplate.cloneNode(true);
    personElement.querySelector('.setup-similar-label').textContent = person.name;
    personElement.querySelector('.wizard-coat').style.fill = person.coatColor;
    personElement.querySelector('.wizard-eyes').style.fill = person.eyesColor;
    return personElement;
};


var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var fragment = document.createDocumentFragment();

for (var i = 0; i < persons.length; i++) {
    fragment.appendChild(fillPerson(persons[i]));
}

similarList.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');

/*
Подготовка
В форке учебного проекта создайте ветку module3-task1 и в этой ветке выполните следующие шаги:

	Создайте файл js/setup.js в вашем учебном проекте. Это файл, в котором вы будете вести работу со всплывающим окном настройки персонажа.
	В файле index.html подключите ваш файл при помощи тега script.
	Задача
В файле setup.js:
Покажите блок .setup, убрав в JS-коде у него класс .hidden.
	Создайте массив, состоящий из 4 сгенерированных JS объектов, которые будут описывать похожих персонажей. Объекты должны содержать следующие поля:
	name, строка — случайно сгенерированное имя персонажа. Имя генерируется из массивов имен и фамилий: нужно случайным образом выбрать из массива имен имя, а из массива фамилий фамилию и сложить их.
	При желании имя и фамилию можно в случайном порядке менять местами:
	Имена

coatColor, строка — случайный цвет мантии на выбор из следующих:
eyesColor, строка — случайный цвет глаз персонажа на выбор из следующих:

На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template создайте DOM-элементы, соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:
	имя персонажа name запишите как текст в блок .setup-similar-label;
цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat;
цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes.
	Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list. Для вставки элементов используйте DocumentFragment.
	Покажите блок .setup-similar, удалив у него CSS-класс hidden.
	Требования к код
Код должен быть разделен на отдельные функции. Стоит отдельно объявить функцию генерации случайных данных, функцию создания DOM-элемента на основе JS-объекта, функцию заполнения блока DOM-элементами на основе массива JS-объектов. Пункты задания примерно соответствуют функциям, которые вы должны создать.

*/