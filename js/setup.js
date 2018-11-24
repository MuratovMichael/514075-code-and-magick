'use strict'

// 1

var setup = document.querySelector('.setup');
setup.className.remove('hidden');

// 2

function Wizards (name, coatColor, eyesColor) {
  this.name = name;
  this.coatColor = coatColor;
  this.eyesColor = eyesColor;
}

var getWizardNames = function () {
  var name = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  return name[Math.floor(Math.random() * name.length)];
}

var getWizardLastname = function () {
  var lastname = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  return lastname[Math.floor(Math.random() * surname.length)];
}

var resultName = getWizardNames() + ' ' + getWizardLastname();
alert(resultName);

var getColorCoat = function () {
  var colorCoat = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  return colorCoat[Math.floor(Math.random() * colors.length)];
}

var getColorEyes = function () {
  var colorEyes = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  return colorEyes[Math.floor(Math.random() * colorsEyes.length)];
}

var wizardsArray = [];

for (var i = 0; i < 4; i++) {
  var wizards = new Wizards(resultName, getColorCoat(), getColorEyes());
  wizardsArray.push(new Picture(i));
}

// 3

var getElements = function () {
  var nameWizard = document.querySelector('.setup-similar-label');
  nameWizard.textContent = wizards[0];

  var wizardCoat = document.querySelector('.wizard-coat');
  wizardCoat.style.fill = wizard[1];

  var wizardEyes = document.querySelector('.wizard-eyes');
  wizardEyes.style.fill = wizard[2];
}

// 4

var addsElements = function () {
  var fragment = document.createElementFragment();
  var setupSimilarList = document.querySelector('.setup-similar-list');
  fragment.appendChild(nameWizard);
  fragment.appendChild(wizardCoat);
  fragment.appendChild(wizardEyes);
  setupSimilarList.appendChild(fragment);
}

// 5

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
