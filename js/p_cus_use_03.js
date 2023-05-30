function validateForm(event) {
    event.preventDefault(); // 폼 제출의 기본 동작 중지
    
    var cusName = document.getElementById("lost_cus_name").value;
    var cusTel = document.getElementById("lost_cus_tel").value;
    var cusEmail = document.getElementById("lost_cus_email").value;
    var cusDay = document.getElementById("lost_cus_day").value;
    var cusType = document.getElementById("lost_pro_type").value;
    var cusFeature = document.getElementById("lost_pro_feature").value;
    var cusNum = document.getElementById("lost_pro_num").value;
    var cusPlace = document.getElementById("lost_pro_place").value;
    if (cusName === "") {
      alert("손님명을 입력해주세요");
      return false;
    }
    if (cusTel === "") {
      alert("휴대전화번호를 입력해주세요");
      return false;
    }
    if (cusEmail === "") {
      alert("이메일 주소를 입력해주세요");
      return false;
    }
    if (cusDay === "") {
        alert("물품 분실일자를 입력해주세요");
        return false;
    }
    if (cusType === "") {
        alert("물품의 유형을 입력해주세요");
        return false;
    }
    if (cusFeature === "") {
        alert("물품의 특징를 입력해주세요");
        return false;
    }
    if (cusNum === "") {
        alert("물품의 수량를 입력해주세요");
        return false;
    }
    if (cusPlace === "") {
        alert("분실 장소 및 시간을 입력해주세요");
        return false;
    }
    
    var radiobox1 = document.getElementById("myradiobox1");
    var radiobox2 = document.getElementById("myradiobox2");
    var radiobox3 = document.getElementById("myradiobox3");
    if (!radiobox1.checked && !radiobox2.checked && !radiobox3.checked) {
      alert("습득물 처리 방법을 체크해주세요");
      return false;
    }

    var checkbox1 = document.getElementById("mycheckbox1");
    if (!checkbox1.checked) {
      alert("개인 정보 수집 동의를 체크해주세요");
      return false;
    }
    
    // 폼 제출
    document.getElementById("lost_property_form").submit();
    alert("제출되었습니다. 감사합니다!");
  }
