'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_X = 110;
var CLOUD_SHADOW_Y = 20;
var TEXT_WIDTH = 40;
var CLOUD_COLOR = '#ffffff';
var COLOR_SHADOW_CLOUD = 'rgba(0, 0, 0, 0.7)';

var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var MY_BAR_COLOR = 'rgba(255, 0, 0, 1)';

var FONT = '20px PT Mono';

window.renderStatistics = function (ctx, players, times) {

  ctx.fillStyle = COLOR_SHADOW_CLOUD;
  ctx.fillRect(CLOUD_SHADOW_X, CLOUD_SHADOW_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = CLOUD_COLOR;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = FONT;
  ctx.textBaseline = 'hanging';
  ctx.strokeText('Ура вы победили!', 120, 30);
  ctx.strokeText('Список результатов:', 120, 60);

  var players = ['Вы', 'Дима', 'Катя', 'Таня'];

  ctx.fillStyle = MY_BAR_COLOR;
  ctx.font = FONT;

  ctx.strokeText('Вы', 20, 100);
  ctx.fillRect(200, 90, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillStyle = '#0000CD';
  ctx.strokeText('Дима', 20, 100);
  ctx.fillRect(250, 90, BAR_WIDTH, BAR_HEIGHT);

  for (var i = 0; i < players.length; i++) {
    ctx.(BAR_WIDTH + BAR_GAP) * players[i];
  }

};
