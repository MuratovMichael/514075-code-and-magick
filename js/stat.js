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

var congratulation = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + 40, CLOUD_Y + GAP + TEXT_GAP);
  ctx.fillText('Список результатов', CLOUD_X + GAP + 40, CLOUD_Y + 2 * (GAP + TEXT_GAP));
}

var renderHistograms = function (ctx) {
  players.forEach(function(i) {
    var height = (BAR_HEIGHT * times[i]) / maxTime;
    var roundTime = Math.round(times[i]);
    var sizes = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;

    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], sizes, CLOUD_HEIGHT);
    ctx.fillText(roundTime.toString(), sizes, CLOUD_HEIGHT - height - TEXT_GAP);


    players[i] === 'Вы' ? ctx.fillStyle ='rgba(255, 0, 0, 1)' : ctx.fillStyle = 'rgba(0,	0, 255,' + Math.random() + ')';

    ctx.fillRect(sizes, CLOUD_HEIGHT - height,
      BAR_WIDTH, height - TEXT_GAP);
  });
}

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  congratulation(ctx);

  var maxTime = getMaxElement(times);

}
