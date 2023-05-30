function validateForm(event) {
    event.preventDefault(); // 폼 제출의 기본 동작 중지
    
    var stuText = document.getElementById("loc_stu_form_text").value;
    if (stuText === "") {
        alert("지역을 입력해주세요");
        return false;
    }

    var select1 = document.getElementById("loc_stu_form_sel")
    if (select1.selected) {
        alert("분류를 선택해주세요");
        return false;
    }
    var stuName = document.getElementById("loc_stu_form_name").value;
    var stuDay = document.getElementById("loc_stu_form_day").value;
    var stuNum1 = document.getElementById("loc_stu_form_num1").value;
    var stuNum2 = document.getElementById("loc_stu_form_num2").value;
    
    if (stuName === "") {
      alert("단체명을 입력해주세요");
      return false;
    }
    if (stuDay === "") {
      alert("방문 날짜를 입력해주세요");
      return false;
    }
    if (stuNum1 === "") {
        alert("참가 학생 인원을 입력해주세요");
        return false;
    }
    if (stuNum2 === "") {
        alert("인솔 교사 인원을 입력해주세요");
        return false;
    }
    var checkbox = document.getElementById("mycheckbox");
    var checkbox1 = document.getElementById("mycheckbox1");
    if (!checkbox.checked && !checkbox1.checked) {
      alert("선택 예약 사항을 체크해주세요");
      return false;
    }
    
    var resName = document.getElementById("loc_stu_res_form_name").value;
    var resTel = document.getElementById("loc_stu_res_form_tel").value;
    var resEmail = document.getElementById("loc_stu_res_form_email").value;
    
    if (resName === "") {
      alert("이름을 입력해주세요");
      return false;
    }
    if (resTel === "") {
      alert("연락처를 입력해주세요");
      return false;
    }
    if (resEmail === "") {
        alert("이메일을 입력해주세요");
        return false;
    }

    // 폼 제출
    document.getElementById("loc_ask_form").submit();
    alert("제출되었습니다. 감사합니다!");
  }
