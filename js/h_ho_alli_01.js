// JavaScript 코드 (script.js)

document.addEventListener("DOMContentLoaded", function () {
  var imgs1, imgs2, imgs3;
  var img_count1, img_count2, img_count3;
  var img_position1 = 1,
    img_position2 = 1,
    img_position3 = 1;

  imgs1 = $("#gallerybox1 .slide ul");
  imgs2 = $("#gallerybox2 .slide ul");
  imgs3 = $("#gallerybox3 .slide ul");
  img_count1 = imgs1.children().length;
  img_count2 = imgs2.children().length;
  img_count3 = imgs3.children().length;

  // 첫 번째 슬라이드 버튼
  $("#gallerybox1 #back1").click(function () {
    back1();
  });
  $("#gallerybox1 #next1").click(function () {
    next1();
  });

  // 세 번째 슬라이드 버튼
  $("#gallerybox2 #back2").click(function () {
    back2();
  });
  $("#gallerybox2 #next2").click(function () {
    next2();
  });

  // 네 번째 슬라이드 버튼
  $("#gallerybox3 #back3").click(function () {
    back3();
  });
  $("#gallerybox3 #next3").click(function () {
    next3();
  });

  function back1() {
    img_position1--;
    if (img_position1 < 1) {
      img_position1 = img_count1;
    }
    updateSlidePosition(imgs1, img_position1);
  }

  function next1() {
    img_position1++;
    if (img_position1 > img_count1) {
      img_position1 = 1;
    }
    updateSlidePosition(imgs1, img_position1);
  }

  function back2() {
    img_position2--;
    if (img_position2 < 1) {
      img_position2 = img_count2;
    }
    updateSlidePosition(imgs2, img_position2);
  }

  function next2() {
    img_position2++;
    if (img_position2 > img_count2) {
      img_position2 = 1;
    }
    updateSlidePosition(imgs2, img_position2);
  }

  function back3() {
    img_position3--;
    if (img_position3 < 1) {
      img_position3 = img_count3;
    }
    updateSlidePosition(imgs3, img_position3);
  }

  function next3() {
    img_position3++;
    if (img_position3 > img_count3) {
      img_position3 = 1;
    }
    updateSlidePosition(imgs3, img_position3);
  }

  function updateSlidePosition(imgs, img_position) {
    imgs.css("left", -600 * (img_position - 1) + "px");
  }
});

$(document).ready(function () {
  $(".banner__list").each(function (index) {
    var element = $(this);
    setTimeout(function () {
      element.addClass("bannerFadeIn");
    }, 400 * index); // 각 요소를 200ms 간격으로 애니메이션화
  });
});
