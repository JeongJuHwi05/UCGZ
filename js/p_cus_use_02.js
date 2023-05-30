$(function(){
    $(".refund_cancel_nav1>a").click(function(){
        $(".ask_refund_page").show()
        $(".ask_hotel_cancel_page").hide()
    })
    $(".refund_cancel_nav2>a").click(function(){
        $(".ask_refund_page").hide()
        $(".ask_hotel_cancel_page").show()
    })
})

function validateForm(event) {
    event.preventDefault(); // 폼 제출의 기본 동작 중지
    
    var cusName = document.getElementById("buy_name").value;
    var cusTel = document.getElementById("buy_tel").value;
    var cusEmail = document.getElementById("buy_email").value;
    var cusDay = document.getElementById("buy_day").value;
    if (cusName === "") {
      alert("구매자명을 입력해주세요");
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
        alert("구매일자를 입력해주세요");
        return false;
    }
    
    var radiobox1 = document.getElementById("myradiobox1");
    var radiobox2 = document.getElementById("myradiobox2");
    if (!radiobox1.checked && !radiobox2.checked) {
      alert("접수 유형을 체크해주세요");
      return false;
    }

    var checkbox3 = document.getElementById("mycheckbox3");
    var checkbox4 = document.getElementById("mycheckbox4");
    var checkbox5 = document.getElementById("mycheckbox5");
    var checkbox6 = document.getElementById("mycheckbox6");
    var checkbox7 = document.getElementById("mycheckbox7");
    var checkbox8 = document.getElementById("mycheckbox8");
    var checkbox9 = document.getElementById("mycheckbox9");
    var checkbox10 = document.getElementById("mycheckbox10");
    var checkbox11 = document.getElementById("mycheckbox11");
    if (!checkbox3.checked &&!checkbox4.checked&&!checkbox5.checked
        &&!checkbox6.checked&&!checkbox7.checked&&!checkbox8.checked
        &&!checkbox9.checked&&!checkbox10.checked&&!checkbox11.checked)
         {
      alert("티켓 유형을 선택해주세요");
      return false;
    }

    var cusOrder = document.getElementById("order_num").value;
    var cusNum = document.getElementById("tic_num").value;
    if (cusName === "") {
      alert("구매자명을 입력해주세요");
      return false;
    }
    if (cusTel === "") {
      alert("휴대전화번호를 입력해주세요");
      return false;
    }

    var radiobox3 = document.getElementById("myradiobox3");
    var radiobox4 = document.getElementById("myradiobox4");
    var radiobox5 = document.getElementById("myradiobox5");
    var radiobox6 = document.getElementById("myradiobox6");
    var radiobox7 = document.getElementById("myradiobox7");
    if (!radiobox3.checked && !radiobox4.checked && !radiobox5.checked
        && !radiobox6.checked && !radiobox7.checked) {
      alert("취소 사유를 체크해주세요");
      return false;
    }

    var checkbox1 = document.getElementById("mycheckbox1");
    if (!checkbox1.checked) {
      alert("개인 정보 수집 동의를 체크해주세요");
      return false;
    }
    
    // 폼 제출
    
    document.getElementById("park_ticket_cancel").submit();
    alert("제출되었습니다. 감사합니다!");
  }

  function hotelForm(event) {
    event.preventDefault(); // 폼 제출의 기본 동작 중지
    
    var hoName = document.getElementById("hotel_name").value;
    var hoTel = document.getElementById("hotel_tel").value;
    var hoEmail = document.getElementById("hotel_email").value;
    
    if (hoName === "") {
      alert("예약자명을 입력해주세요");
      return false;
    }
    if (hoTel === "") {
      alert("휴대전화번호를 입력해주세요");
      return false;
    }
    if (hoEmail === "") {
      alert("이메일 주소를 입력해주세요");
      return false;
    }
    

    var checkbox12 = document.getElementById("mycheckbox12");
    var checkbox13 = document.getElementById("mycheckbox13");
    var checkbox14 = document.getElementById("mycheckbox14");
    var checkbox15 = document.getElementById("mycheckbox15");
    if (!checkbox12.checked &&!checkbox13.checked&&!checkbox14.checked
        &&!checkbox15.checked)
        {
            alert("상품 유형을 선택해주세요");
            return false;
          }
    var checkbox16 = document.getElementById("mycheckbox16");
    var checkbox17 = document.getElementById("mycheckbox17");
    var checkbox18 = document.getElementById("mycheckbox18");
    var checkbox19 = document.getElementById("mycheckbox19");
    if (!checkbox16.checked&&!checkbox17.checked
        &&!checkbox18.checked&&!checkbox19.checked)
        {
            alert("객실 테마를 선택해주세요");
            return false;
          }
    var checkbox20 = document.getElementById("mycheckbox20");
    var checkbox21 = document.getElementById("mycheckbox21");
    var checkbox22 = document.getElementById("mycheckbox22");
    var checkbox23 = document.getElementById("mycheckbox23");
    var checkbox24 = document.getElementById("mycheckbox24");
    var checkbox25 = document.getElementById("mycheckbox25");
    if (!checkbox20.checked&&!checkbox21.checked&&!checkbox22.checked
        &&!checkbox23.checked&&!checkbox24.checked&&!checkbox25.checked)
         {
      alert("객실 유형을 선택해주세요");
      return false;
    }

    var hoNum = document.getElementById("hotel_number").value;
    if (hoNum === "") {
      alert("예약 번호를 입력해주세요");
      return false;
    }

    var radiobox8 = document.getElementById("myradiobox8");
    var radiobox9 = document.getElementById("myradiobox9");
    var radiobox10 = document.getElementById("myradiobox10");
    if (!radiobox8.checked && !radiobox9.checked && !radiobox10.checked) 
    {
      alert("취소 사유를 체크해주세요");
      return false;
    }

    var checkbox26 = document.getElementById("mycheckbox26");
    if (!checkbox26.checked) {
      alert("개인 정보 수집 동의를 체크해주세요");
      return false;
    }
    
    // 폼 제출
    
    document.getElementById("hotel_cancel").submit();
    alert("제출되었습니다. 감사합니다!");
  }
