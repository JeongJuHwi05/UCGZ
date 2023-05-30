function validateForm(event) {
    event.preventDefault(); // 폼 제출의 기본 동작 중지
    
    var cusEmail = document.getElementById("order_email_text").value;
    var cusTel = document.getElementById("order_tel_text").value;
    if (cusEmail === "") {
      alert("이메일 주소를 입력해주세요");
      return false;
    }
    if (cusTel === "") {
      alert("전화번호를 입력해주세요");
      return false;
    }
    
    // 폼 제출
    document.getElementById("order_check_form").submit();
    alert("확인되었습니다. 감사합니다!");
  }
