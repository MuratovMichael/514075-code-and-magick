'use strict';

// Функция отображения элементов
var showElements = function () {
  var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
};

// Объект конструктор
function Wizard(name, coatColor, eyesColor) {
  this.name = name;
  this.coatColor = coatColor;
  this.eyesColor = eyesColor;
}

var getWizardNames = function () {
  var name = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  return name[Math.floor(Math.random() * name.length)];
};

var getWizardLastName = function () {
  var lastname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  return lastname[Math.floor(Math.random() * lastname.length)];
};

var getFullName = function () {
  return getWizardNames() + ' ' + getWizardLastName();
};

var getColorCoat = function () {
  var colorCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  return colorCoat[Math.floor(Math.random() * colorCoat.length)];
};

var getColorEyes = function () {
  var colorEyes = ['black', 'red', 'blue', 'yellow', 'green'];
  return colorEyes[Math.floor(Math.random() * colorEyes.length)];
};

var getColorsFireball = function () {
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  return fireballColors[Math.floor(Math.random() * fireballColors.length)];
};

var makeWizardsArray = function (player) {
  var localWizards = [];
  for (var i = 1; i <= player; i++) {
    localWizards.push(new Wizard(getFullName(), getColorCoat(), getColorEyes()));
  }
  return localWizards;
};

var wizards = makeWizardsArray(4);

var renderWizard = function (item) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = item.name;
  wizardElement.querySelector('.wizard-coat').style.fill = item.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = item.eyesColor;
  return wizardElement;
};

var renderWizards = function (elements) {
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  elements.forEach(function (wizard) {
    fragment.appendChild(renderWizard(wizard));
  });
  setupSimilarList.appendChild(fragment);
};

showElements();
renderWizards(wizards);

// Обработка событий -----------------------------------------------------

var setup = document.querySelector('.setup'); // Окно
var setupOpen = document.querySelector('.setup-open'); // Кнопка открытия окна
var setupClose = document.querySelector('.setup-close'); // Кнопка закрытия окна
var setupSubmit = document.querySelector('.setup-submit'); // Кнопка отправки данных на сервер
var setupForm = document.querySelector('.setup-wizard-form'); // Форма
var setupUserName = document.querySelector('.setup-user-name'); // Имя персонажа
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat'); // Цвет мантии
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes'); // Цвет глаз
var fireball = document.querySelector('.setup-fireball-wrap'); // Цвет фаербола

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Генерация цвета мантии
wizardCoat.addEventListener('click', function () {
  getColorCoat();
});

// Генерация цвета глаз
wizardEyes.addEventListener('click', function () {
  getColorEyes();
});

fireball.addEventListener('click', function () {
  getColorsFireball();
});

console.log();
