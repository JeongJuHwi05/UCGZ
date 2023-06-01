// 팝업;
$(function () {
  //팝업 열기
  $(".galleryborder__description2:eq(0)>button").click(function () {
    window.open(
      "https://www.legoland.kr/security-privacy/%EC%9E%A5%EC%95%A0%EC%9D%B8-%EB%B3%B4%ED%98%B8%EC%9E%90-%EC%9A%B0%EB%8C%80-%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80/",
      "_blank"
    );
  });

  $(".galleryborder__description2:eq(2)>button").click(function () {
    window.open("/p_cus/p_cus_con_01.html", "_blank");
  });

  //버튼으로 팝업 닫기
  $(".pop_up_can>a").click(function () {
    $(".pop_up").hide();
  });
});
//외부 레이아웃눌러서 팝업 닫기
$(document).mouseup(function (e) {
  var container = $(".pop_up");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.css("display", "none");
  }
});

// function openWindow1() {
//   window.open("/p_cus/p_cus_con_01.html", "_blank");
// }

$(document).ready(function () {
  $(".galleryborder").addClass("animate");
});

const res = document.querySelector(".gotores");
res.addEventListener("click", function () {
  localStorage.setItem("load", JSON.stringify({ page: 6 }));
  window.open("/t_use/t_use_reser01_0.html", "_blank");
});
