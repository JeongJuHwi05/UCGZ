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
