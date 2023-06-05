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

function openWindow1() {
  window.open("/t_use/t_use_char01.html", "_blank");
}
function openWindow2() {
  window.open("/t_use/t_use_char01.html", "_blank");
}
function openWindow3() {
  window.open("/p_use/p_use_ext_02.html", "_blank");
}

$(document).ready(function () {
  $(".card_title").addClass("animate");
});
$(document).ready(function () {
  showGallery("1");
  $(".galleryborder").addClass("animate");
});

function showGallery(tab) {
  // 모든 갤러리 박스 숨기기
  $(".gallerybox").hide();

  // 선택된 탭에 해당하는 갤러리 박스 보여주기
  $("#gallerybox" + tab).show();

  // 갤러리 박스 효과 추가
  $(".galleryborder").addClass("animate");
}
