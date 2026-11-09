
/* ============================================================
 *  script.js
 * ============================================================ */

var elOnOneLine = 6;
var numOfElement = elOnOneLine * elOnOneLine;
var word = "4";
var entryArray = word.split("");

/* ---------- Генерация сетки ---------- */
for (var i = 0; i < numOfElement; i++) {
  var letterIndex = i % entryArray.length;
  var topL =
    Math.floor((i % numOfElement) / elOnOneLine) * (100 / elOnOneLine);
  var leftL = (i % elOnOneLine) * (100 / elOnOneLine);

  var animDelay =
    'style="animation-delay: ' +
    -i / 12 +
    "s; top: " +
    -topL +
    "vh; left: " +
    -leftL +
    'vw"';

  var letter =
    '<div class="letter" style="flex: 0 0 calc(100% / ' +
    elOnOneLine +
    ');"><div class="letter__el" ' +
    animDelay +
    ">" +
    word +
    "</div></div>";

  $(".main").append($(letter));
}

$(".main")
  .find(".letter")
  .css("flex-basis", "calc(100% / " + elOnOneLine + ")")
  .css("height", "calc(100% / " + elOnOneLine + ")");

/* ==========================================================
 *  Сенсорное управление (замена mousemove)
 *
 *  — touchmove  : палец двигается по экрану
 *  — touchstart : первое касание тоже обновляет origin
 *
 *  Поддержка мульти-тач: берём первый палец (touches[0]).
 * ========================================================== */

function updateOriginFromTouch(e) {
  // Предотвращаем скролл / зум страницы
  e.preventDefault();

  var touch = e.touches ? e.touches[0] : e; // fallback если вдруг pointer

  var x = (touch.pageX / window.innerWidth) * 100;
  var y = (touch.pageY / window.innerHeight) * 100;

  document.documentElement.style.setProperty("--transform-o-x", x + "%");
  document.documentElement.style.setProperty("--transform-o-y", y + "%");
}

// Слушатели сенсорных событий
document.addEventListener("touchstart", updateOriginFromTouch, {
  passive: false,
});
document.addEventListener("touchmove", updateOriginFromTouch, {
  passive: false,
});

/* ==========================================================
 *  Кнопки Play / Stop
 * ========================================================== */

var $letters = $(".letter__el");
var isPlaying = true; // анимация запущена по умолчанию

var btnPlay = document.getElementById("btnPlay");
var btnStop = document.getElementById("btnStop");

// Подсветим Play при старте
btnPlay.classList.add("active");

btnPlay.addEventListener("click", handlePlay);
btnPlay.addEventListener("touchend", handlePlay);

btnStop.addEventListener("click", handleStop);
btnStop.addEventListener("touchend", handleStop);

function handlePlay(e) {
  e.preventDefault();
  if (isPlaying) return;
  isPlaying = true;

  // Возобновляем CSS-анимацию
  $letters.each(function () {
    this.style.animationPlayState = "running";
  });

  btnPlay.classList.add("active");
  btnStop.classList.remove("active");
}

function handleStop(e) {
  e.preventDefault();
  if (!isPlaying) return;
  isPlaying = false;

  // Ставим CSS-анимацию на паузу
  $letters.each(function () {
    this.style.animationPlayState = "paused";
  });

  btnStop.classList.add("active");
  btnPlay.classList.remove("active");
}
