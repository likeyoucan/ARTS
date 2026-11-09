// ================= НАСТРОЙКИ =================
var pauseTime = 300;     // Старт и пауза между циклами: 0.3 секунды (300 мс)
var animDuration = 2500; // Длительность одного переворота (2.5 сек)
var staggerDelay = 35;   // Задержка волны между кусочками
var elOnOneLine = 6;     // Сетка 6x6
var word = "4";          // Изначальный символ
// =============================================

var numOfElement = elOnOneLine * elOnOneLine;
var $main = $('.main');

// Очищаем и строим точную сетку
$main.empty();

for (var i = 0; i < numOfElement; i++) {
  var topL = Math.floor(i / elOnOneLine) * (100 / elOnOneLine);
  var leftL = (i % elOnOneLine) * (100 / elOnOneLine);

  var delaySec = (i * staggerDelay) / 1000;
  var animDelay = 'style="animation-delay: ' + delaySec + 's; top: ' + -topL + 'vh; left: ' + -leftL + 'vw;"';
  
  var letter = '<div class="letter" style="flex: 0 0 calc(100% / ' + elOnOneLine + '); height: calc(100% / ' + elOnOneLine + ');"><div class="letter__el" ' + animDelay + '>' + word + '</div></div>';
  
  $main.append($(letter));
}

// Движение центра вращения за мышкой
$(document).on('mousemove', function(e) {
  var x = ((e.pageX / window.innerWidth) * 100);
  var y = ((e.pageY / window.innerHeight) * 100);
  
  document.documentElement.style.setProperty('--transform-o-x', x + '%');
  document.documentElement.style.setProperty('--transform-o-y', y + '%');
});

var totalWaveTime = animDuration + (numOfElement * staggerDelay);

// Бесконечный цикл: 0.3s пауза -> анимация -> 0.3s пауза
function startLoop() {
  setTimeout(function() {
    $main.addClass('active');

    setTimeout(function() {
      $main.removeClass('active');
      startLoop();
    }, totalWaveTime);

  }, pauseTime);
}

startLoop();