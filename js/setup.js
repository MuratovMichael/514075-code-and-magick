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
