$(document).ready(function () {
  var imgs1, imgs2;
  var img_count1, img_count2;
  var img_position1 = 1,
    img_position2 = 1;

  imgs1 = $("#gallerybox1 .slide ul");
  imgs2 = $("#gallerybox2 .slide ul");
  img_count1 = imgs1.children().length;
  img_count2 = imgs2.children().length;

  // 첫 번째 슬라이드 버튼
  $("#gallerybox1 #back1").click(function () {
    back1();
  });
  $("#gallerybox1 #next1").click(function () {
    next1();
  });

  // 두 번째 슬라이드 버튼
  $("#gallerybox2 #back2").click(function () {
    back2();
  });
  $("#gallerybox2 #next2").click(function () {
    next2();
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

  function updateSlidePosition(imgs, img_position) {
    imgs.css("left", -600 * (img_position - 1) + "px");
  }
});

$(document).ready(function () {
  $(".galleryborder").addClass("animate");
});
