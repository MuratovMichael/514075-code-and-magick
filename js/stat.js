var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var CLOUD_WIDTH = 420; 
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_X = 110;
var CLOUD_SHADOW_Y = 20;
var CLOUD_COLOR = '#ffffff';
var COLOR_SHADOW_CLOUD = 'rgba(0, 0, 0, 0.7)';

var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var MY_BAR_COLOR = 'rgba(255, 0, 0, 1)';

var FONT = '20px PT Mono';
var FONT_X = 50;
var FONT_Y = 30;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, COLOR_SHADOW_CLOUD);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  var players = ['Вы', 'Дима', 'Саша', 'Катя'];

};
