// // 폼 제출 이벤트 처리
// var form = document.querySelector(".reservation-form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // 폼 기본 동작 방지

//   // 여기에 폼 제출 로직을 추가하세요

//   // 예약 성공 시 메시지 표시
//   alert("예약이 완료되었습니다!");

//   // 폼 초기화
//   form.reset();
// });

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".reservation-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  var consentForm = document.querySelector(".consent-form");
  consentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("예약이 완료되었습니다!");
  });
});
