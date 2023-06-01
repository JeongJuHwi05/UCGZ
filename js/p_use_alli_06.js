// function openWindow1() {
//   window.open("/t_hotel/t_hotel_reser01.html", "_blank");
// }

$(document).ready(function () {
  $(".galleryborder").addClass("animate");
});

const res = document.querySelector(".gotores");
res.addEventListener("click", function () {
  localStorage.setItem("load", JSON.stringify({ page: 1 }));
  window.open("/t_use/t_use_char01.html", "_blank");
});
