$(function(){
    $(".ask_nav1").click(function(){
        $(".ask_com").show();
        $(".ask_stu").hide();
        $(".ask_fori").hide();
    })
    $(".ask_nav2").click(function(){
        $(".ask_com").hide();
        $(".ask_stu").show();
        $(".ask_fori").hide();
    })
    $(".ask_nav3").click(function(){
        $(".ask_com").hide();
        $(".ask_stu").hide();
        $(".ask_fori").show();
    })
    
})

function validateForm(event) {
    event.preventDefault(); // 폼 제출의 기본 동작 중지
    
    var comCom = document.getElementById("com_form_com").value;
    var comDep = document.getElementById("com_form_dep").value;
    var comName = document.getElementById("com_form_name").value;
    var comEmail = document.getElementById("com_form_email").value;
    var comTel = document.getElementById("com_form_tel").value;
    
    if (comCom === "") {
      alert("회사를 입력해주세요");
      return false;
    }
    if (comDep === "") {
      alert("부서를 입력해주세요");
      return false;
    }
    if (comName === "") {
      alert("성명을 입력해주세요");
      return false;
    }
    if (comEmail === "") {
        alert("이메일을 입력해주세요");
        return false;
    }
    if (comTel === "") {
        alert("연락처를 입력해주세요");
        return false;
    }
    var select1 = document.getElementById("com_form_sel1")
    if (select1.selected) {
        alert("문의 사항을 선택해주세요");
        return false;
      }

    var comText = document.getElementById("com_form_text").value;
    if (comText === "") {
        alert("내용을 입력해주세요");
        return false;
    }
    
    // 폼 제출
    document.getElementById("com_form").submit();
    alert("제출되었습니다. 감사합니다!");
  }
