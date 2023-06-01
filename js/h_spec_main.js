$(document).ready(function () {
  var imgs;
  var img_count;
  var img_position = 1;

  imgs = $(".slide ul");
  img_count = imgs.children().length;

  // 버튼을 클릭했을 때 함수 실행
  $("#back").click(function () {
    back();
  });
  $("#next").click(function () {
    next();
  });

  function back() {
    img_position--;
    if (img_position < 1) {
      img_position = img_count;
    }
    updateSlidePosition();
  }

  function next() {
    img_position++;
    if (img_position > img_count) {
      img_position = 1;
    }
    updateSlidePosition();
  }

  function updateSlidePosition() {
    imgs.css("left", -700 * (img_position - 1) + "px");
  }
});
$(document).ready(function () {
  $(".galleryborder").addClass("animate");
});

// onclick 연결

// Bricktastic Birthday/ Awesome Choice/LEGO® NINJAGO® DAYS 슬립오버
function openWindow5() {
  window.open("/h_ho/h_ho_spec_02.html", "_blank");
}
function openWindow6() {
  window.open("/h_ho/h_ho_spec_03.html", "_blank");
}
function openWindow7() {
  window.open("/h_ho/h_ho_spec_04.html", "_blank");
}
