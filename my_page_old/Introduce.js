var tab1 = document.getElementById('tab1');
var tab2 = document.getElementById('tab2');
var tab3 = document.getElementById('tab3');
var tab4 = document.getElementById('tab4');

var slide = document.getElementById('slide');

function moveToFirst() {
    slide.className = 'move-to-first';
    resetTabStyles();
    tab1.className = 'tab selected';
}

function moveToSecond() {
    slide.className = 'move-to-second';
    resetTabStyles();
    tab2.className = 'tab selected';
}

function moveToThird() {
    slide.className = 'move-to-third';
    resetTabStyles();
    tab3.className = 'tab selected';
}

function moveToFour() {
    slide.className = 'move-to-four';
    resetTabStyles();
    tab4.className = 'tab selected';
}

function resetTabStyles() {
    tab1.className = 'tab';
    tab2.className = 'tab';
    tab3.className = 'tab';
    tab4.className = 'tab';
}

tab1.addEventListener('click', moveToFirst);
tab2.addEventListener('click', moveToSecond);
tab3.addEventListener('click', moveToThird);
tab4.addEventListener('click', moveToFour);

$(window).on('load', function () {
    //テキストごとにspanタグを生成する
    var element = $(".typing");
    var thisChild = ""
    element.each(function () {
      var text = $(this).html();
      var textbox = "";
      text.split('').forEach(function (target) {
        if (target !== " ") {
          textbox += '<span>' + target + '</span>';
        } else {
          textbox += target;
        }
      });
      $(this).html(textbox);
    });
    
    // タイピングアニメーション
     $(element).each(function () {
        thisChild = $(this).children(); //生成したspanタグを取得
        thisChild.each(function (i) {
          var time = 100;
          $(this).delay(time * i * 2).fadeIn(time);
        });
    });
  });