function openWindow1() {
  window.open("/p_use/p_use_alli_02.html", "_blank");
}

function openWindow2() {
  window.open("/p_use/p_use_alli_03.html", "_blank");
}

function openWindow3() {
  window.open("/p_use/p_use_alli_04.html", "_blank");
}

$(document).ready(function () {
  $(".galleryborder").addClass("animate");
});

$(function () {
  /* ---------------탭--------------- */

  $("#tab02").hide(); /* 로드 직후에는 다이닝 content 안보이게 */
  $("#tab_01").addClass("active"); /* 로드 직후에는 쇼핑 탭 활성화 */

  // tab_01 - 쇼핑 - 쇼핑탭
  // tab_02 - 쇼핑 - 다이닝
  // tab_03 - 다이닝 - 쇼핑
  // tab_04 - 다이닝 - 다이닝

  /* 쇼핑 탭일 때 탭 동작 */
  $("#tab_01").on("click", function () {
    $("#tab02").hide();
    $("#tab01").show();

    $("#tab_01").addClass("active");

    $("#tab_02").removeClass("active");
    $("#tab_03").removeClass("active");
    $("#tab_04").removeClass("active");
  });
  $("#tab_02").on("click", function () {
    $("#tab01").hide();
    $("#tab02").show();
    $("#tab_04").addClass("active");

    $("#tab_01").removeClass("active");
    $("#tab_02").removeClass("active");
    $("#tab_03").removeClass("active");
  });
  /* 다이닝 탭일 때 탭 동작 */
  $("#tab_03").on("click", function () {
    $("#tab02").hide();
    $("#tab01").show();
    $("#tab_01").addClass("active");

    $("#tab_02").removeClass("active");
    $("#tab_03").removeClass("active");
    $("#tab_04").removeClass("active");
  });
  $("#tab_04").on("click", function () {
    $("#tab01").hide();
    $("#tab02").show();
    $("#tab_04").addClass("active");

    $("#tab_01").removeClass("active");
    $("#tab_02").removeClass("active");
    $("#tab_03").removeClass("active");
  });
});
