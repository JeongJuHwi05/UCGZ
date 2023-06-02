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

$(document).ready(function () {
  $(".card_title").addClass("animate");
});

function openWindow1() {
  window.open("/t_use/t_use_char01.html", "_blank");
}
function openWindow2() {
  window.open("/t_use/t_use_char01.html", "_blank");
}
