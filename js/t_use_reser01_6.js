$(function(){
  
  // number check
  $(".decrease_btn").click(function(e){
    if( $(this).siblings("input").val() > 0) {
      $(this).siblings("input").val((i,v) => +v-1);
      $(this).siblings("input").trigger("change");           
    }
  })
  $(".increase_btn").click(function(e){
    $(this).siblings("input").val((i,v) => +v+1);
    $(this).siblings("input").trigger("change");
  });
  $(".numberCheck input").on("change",function(){
    if ( $(this).val() == 0 ) {
      $(".vif01_ticketcard").find(".vif01_tc_disabled").hide()
    } else {
      const box = $(this).parents(".vif01_ticketcard");
      $(".vif01_ticketcard").not(box).find(".vif01_tc_disabled").show()
    }
  })
  //------------Load-------------
  sessionStorage.setItem("code_cert",'[]');
  const codeArr = [1234,5678]
  localStorage.setItem("codeStorage",JSON.stringify(codeArr));
  //--------------------------------- 03. 바코드 입력
  $(".vif01_number").each(function(i){
    const classes = $(this).data("classes");
    const texts = $(".vif01_tc_title").eq(i).find("strong").text();
    $(this)
    .addClass(`n_${classes}`)
    .on("change",function(){
      if( $(`.vif03_c_unit_${classes}`).length == 0) {
        const q = JSON.parse(sessionStorage.getItem("code_cert"));
        const m = $(".vif03_c_unit_origin").clone(true);
        m
        .addClass([`vif03_c_unit_${classes}`, "vif03_c_unit"])
        .removeClass("vif03_c_unit_origin")
        .data("classes",classes)
        .appendTo(".vif03_code");
        m.find(".vif03_c_u_title strong")
        .text(texts)
        m.find(".vif03_c_u_input_text")
        .prop("name",`code.${classes}_0`)
        q.push(false);
        sessionStorage.setItem("code_cert", JSON.stringify(q));
      }
      else if($(this).val() > $(`.vif03_c_unit_${classes} .vif03_c_u_input`).length){
        const len = $(`.vif03_c_unit_${classes} .vif03_c_u_input`).length;
        const l = $(".vif03_c_unit_origin .vif03_c_u_input").clone(true);
        l
        .appendTo(`.vif03_c_unit_${classes}`);
        l.find("input")
        .prop("name",`code.${classes}_${len}`)
        
        const q = JSON.parse(sessionStorage.getItem("code_cert"));
        q.push(false);
        sessionStorage.setItem("code_cert", JSON.stringify(q));
      }
      else if ($(this).val() < $(`.vif03_c_unit_${classes} .vif03_c_u_input`).length){
        if ($(this).val() == 0) {
          $(`.vif03_c_unit_${classes}`).remove();
          sessionStorage.setItem("code_cert", "[]");
        } else {
          $(`.vif03_c_unit_${classes} .vif03_c_u_input`).last().remove();
          const q = JSON.parse(sessionStorage.getItem("code_cert"));
          q.pop()
          sessionStorage.setItem("code_cert",JSON.stringify(q));
        }
      }
      const len = $(`.vif03_c_unit_${classes} .vif03_c_u_input`).length;
      $(`.vif03_c_unit_${classes} .vif03_c_u_title span`).text(`수량 : ${len}`);
    });
  });

  $(".vif03_code")
    // 바코드 삭제 //
    .on("click",".deleteBtn",function(){
      const q = $(this).parents(".vif03_c_unit");
      const w = q.find(".vif03_c_u_input");
      $(`.n_${q.data("classes")}`).val((i,v) => +v-1)

      if (w.length >1 ) {
        w.last().remove();
        q.find(".vif03_c_u_title span").text(`수량 : ${w.length-1}`)
      } 
      else {
        q.remove();
        $(".vif01_ticketcard").find(".vif01_tc_disabled").hide()
      }
    })
    // 바코드 인증 //
    .on("click",".certification",function(){
      const par = $(this).parents(".vif03_c_unit");
      const par2 = $(this).parent();
      const classes = par.data("classes");
      const q = $(this).siblings(".vif03_c_u_input_text_wrap");
      const qi = q.children("input");
      const w = JSON.parse(localStorage.getItem("codeStorage"));
      if ( w.includes(+qi.val())) {
        let r = JSON.parse(sessionStorage.getItem("code_cert"));
        const n = par.find("input").index(qi)
        r.splice(n,1,true);
        sessionStorage.setItem('code_cert',JSON.stringify(r))
        q.addClass("cert_pass");
        qi.prop("readonly","true");
        $(this).text("확인 완료");
      }
    })
  // -------------------------------------- 04. 정보 입력
  //핸드폰 번호 인증 창 열기
  $(".vif04_i_phone").on("click",".vif04_i_phone_cert",function(){
    
    window.open("/t_use/t_use_reser01_6_1.html","번호 인증","width=500, height=400, top=200,left=500");
    localStorage.setItem("phoneNum",$("#vif04_i_phone_input").val());
  })
  function cert(){
    if ( localStorage.getItem("phone_cert") ){
      $(".vif04_i_phone_cert").remove()
      const span = $("<span class='vif04_i_phone_complete cert_btn_inner'>인증완료</span>");
        $(".vif04_i_phone")
          .append(span)
          .data("cert_com",true)
        localStorage.removeItem("phone_cert")
      } else {
        $(".vif04_i_phone_complete").remove();
        const btn = $('<a href="#none" class="vif04_i_phone_cert cert_btn_inner">인증하기</a>')
        $(".vif04_i_phone")
          .append(btn)
          .data("cert_com",false);
    }
  }
  $(window).on("storage",()=> cert())
  $("#vif04_i_phone_input").on("change",function(){
    cert()
  })
  // ------------------------------------------ 05.제출/취소
  $(".v_s_submit").on("click",function(){
    $("#visit_ticket_form").data("complete",true)
    if($("#visit_ticket_form").data("complete")){
      $("#visit_ticket_form")
        .trigger("submit")
      }
    })
    
    $("#visit_ticket_form").on("submit",function(e){
      e.preventDefault();
      const q = new FormData(e.target);
      const w = Object.fromEntries(q.entries());
      const r = [];
      console.log(w)
      for ( key in w ) {
        if( key.split(".")[0] == "number" ) {
          w[key] == 0? delete w[key] : null;
        } else if ( key.split(".")[0] == "info" ) {
          r.push(w[key]);
        }
      }
      //바코드 인증 확인
      const t = JSON.parse(sessionStorage.getItem("code_cert"));
      if( !$(".numberCheck input[name*='number.']").get().every(v => v.value==0) ) {
        if ( t && t.some(v => v == false) ) {
          alert("코드 인증이 필요합니다.")
        } else if ( r.some(v => v == "") ) {
          alert("정보를 정확히 입력해주세요.");
        } else if ( !$(".vif04_i_phone").data("cert_com") ) {
          alert(" 핸드폰 인증이 필요합니다. ")
        } else {
          w["common.type"] = "6";
          w["common.typetext"] = "파크 방문 예약"
          if (localStorage.getItem("visitRes")) {
            const q = JSON.parse(localStorage.getItem("visitRes"));
            q.push(w);
            localStorage.setItem("visitRes", JSON.stringify(q));
          } else {
            const q = [];
            q.push(w);
            localStorage.setItem("visitRes", JSON.stringify(q));
          }
          location.href = "/t_use/t_use_reser02_1.html";
        }
      } else {
        alert("매수를 선택해주세요.")
      }

      // 제출 시 확인
      
    })
});
