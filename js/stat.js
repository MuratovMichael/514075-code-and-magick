'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_X = 110;
var CLOUD_SHADOW_Y = 20;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var GAP = 10;
var TEXT_GAP = 15;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_GAP);
  ctx.fillText('Список результатов', CLOUD_X + GAP, CLOUD_Y + 2 * (GAP + TEXT_GAP));

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var height = (BAR_HEIGHT * times[i]) / maxTime;
    var roundTime = Math.round(times[i]);

    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT);
    ctx.fillText(roundTime.toString(), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - height - TEXT_GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle ='rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0,	0, 255,' + Math.random() + ')';
    }

    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - height,
      BAR_WIDTH, height - TEXT_GAP);
  }
}
