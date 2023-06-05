// JavaScript 코드 (script.js)

document.addEventListener("DOMContentLoaded", function () {
  var imgs1, imgs3, imgs4;
  var img_count1, img_count3, img_count4;
  var img_position1 = 1,
    img_position3 = 1,
    img_position4 = 1;

  imgs1 = $("#gallerybox1 .slide ul");
  imgs3 = $("#gallerybox3 .slide ul");
  imgs4 = $("#gallerybox4 .slide ul");
  img_count1 = imgs1.children().length;
  img_count3 = imgs3.children().length;
  img_count4 = imgs4.children().length;

  // 첫 번째 슬라이드 버튼
  $("#gallerybox1 #back1").click(function () {
    back1();
  });
  $("#gallerybox1 #next1").click(function () {
    next1();
  });

  // 세 번째 슬라이드 버튼
  $("#gallerybox3 #back3").click(function () {
    back3();
  });
  $("#gallerybox3 #next3").click(function () {
    next3();
  });

  // 네 번째 슬라이드 버튼
  $("#gallerybox4 #back4").click(function () {
    back4();
  });
  $("#gallerybox4 #next4").click(function () {
    next4();
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

  function back4() {
    img_position4--;
    if (img_position4 < 1) {
      img_position4 = img_count4;
    }
    updateSlidePosition(imgs4, img_position4);
  }

  function next4() {
    img_position4++;
    if (img_position4 > img_count4) {
      img_position4 = 1;
    }
    updateSlidePosition(imgs4, img_position4);
  }

  function updateSlidePosition(imgs, img_position) {
    imgs.css("left", -600 * (img_position - 1) + "px");
  }
});

// 탭
showGallery(1);
function showGallery(index) {
  // Hide all gallery boxes
  var galleryboxes = document.getElementsByClassName("gallerybox");
  for (var i = 0; i < galleryboxes.length; i++) {
    galleryboxes[i].style.display = "none";
  }

  // Show the selected gallery box
  var selectedGallery = document.getElementById("gallerybox" + index);
  if (selectedGallery) {
    selectedGallery.style.display = "block";
  }
}

function showGallery(tabId) {
  // 탭 클릭 시 해당 패키지로 스크롤 애니메이션 적용
  const packageElement = document.getElementById(`gallerybox${tabId}`);
  packageElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
