var elOnOneLine = 4;
var numOfElement = elOnOneLine * elOnOneLine;
// ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
//var word = "SKUE ";
var word = "4";
var entryArray = word.split("");

//console.log(entryArray)

for (i = 0; i < numOfElement; i++) {
  var letterIndex = i % entryArray.length;
  var topL = Math.floor((i % numOfElement) / elOnOneLine) * (100 / elOnOneLine);
  var leftL = (i % elOnOneLine) * (100 / elOnOneLine);

  console.log(leftL);

  //var animDelay = 'style=animation-delay:' + -i/10 + 's';
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
  .css("flex-basis", "calc(100% /" + elOnOneLine + ")")
  .css("height", "calc(100% /" + elOnOneLine + ")");


  
// $(document).on("mousemove", function (e) {
//   var x = (e.pageX / window.innerWidth) * 100;
//   var y = (e.pageY / window.innerHeight) * 100;

//   console.log(x + "%, " + y + "%");

//   document.documentElement.style.setProperty("--transform-o-x", x + "%");
//   document.documentElement.style.setProperty("--transform-o-y", y + "%");
// });
