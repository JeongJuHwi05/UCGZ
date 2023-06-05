$(function(){
      // 달력 //
       //------------Load-------------
       const today = new Date();
       const weekArr = ["일", "월", "화", "수", "목", "금", "토"];
       let $selYear = today.getFullYear();
       let $selMonth = today.getMonth() +1;
         const $selMonthText = $selMonth < 10? "0"+($selMonth) : $selMonth;
       let $selDate = today.getDate();
       let $selDatePlus = today.getDate()+1;
         const $selDateText = $selDate < 10? "0"+$selDate : $selDate;
         const $selDatePlusText = $selDatePlus < 10? "0"+$selDatePlus : $selDatePlus;
       let $selDay = today.getDay();
       $(".date_value")
         .val((i,v) => `${$selYear}-${$selMonthText}-${$selDatePlusText}`)
         .data("value",`${$selYear}${$selMonthText}${$selDatePlusText}`);
       $(".date_inputs label").text(`${$selYear}년 ${$selMonth}월 ${$selDatePlus}일 (${weekArr[$selDay+1]})`);
       
       if ( !$(".calender_table_cell").eq($selDay + $selDate-1).hasClass("disabled_cell") ) {
         $(".calender_table_cell").eq($selDay + $selDate-1).children().addClass("active_cell");
         $(".p_s_date").text(`${$selYear}년 ${$selMonth}월 ${$selDate}일 (${weekArr[$selDay]})`);
       }
       //---------------------------- 01. 달력 생성 & 날짜 입력
       $.fn.extend({
         // 달력 요일 생성
         week : function() {
           for (let i = 0; i < 7; i++) {
             const newDay = $("<div></div>");
             newDay.addClass("weekCell");
             $(this).find(".cdt_week").append(newDay);
             newDay.text(weekArr[i]);
           }
         },
         // 달력 일자 생성
         calender: function(years,months){
           if ( months < 0) {
             years -= 1;
             months = 11;
           } else if (months > 11) {
             years += 1;
             months = 0;
           }
           let monthStart = new Date(years, months, 1);
           let monthEnd = new Date(years, months + 1, 0);
           $(this).find(".cm_sb_span1").eq(0).text(years);
           $(this).find(".cm_sb_span1").eq(1).text(months+1);

           $(this).find(".cdt_date").children().remove();
           const i = monthStart.getDay() + monthEnd.getDate();

           for (let j = 1; j <= i; j++) {
             const n = j - monthStart.getDay();
             const cur = new Date(years,months,n);
             if (n > 0) {
               if ( new Date(years, months, n) < today ) {
                 const disabled_cell = $("<div class='disabled_cell dataCell'></div>");
                 disabled_cell.text(n);
                 $(this).find(".cdt_date").append(disabled_cell);
               }
               else if ( cur >= new Date(2023,10,20) && new Date(2024,0,1) > cur && ([1,2,3]).some(e => e == cur.getDay()) ){
                 //휴장일 
                 const disabled_cell = $("<div class='disabled_cell dataCell'></div>");
                 const exp = $("<span class='notOpen'>휴관</span>")
                 disabled_cell
                   .text(n)
                   .append(exp);
                 $(this).find(".cdt_date").append(disabled_cell);
               }
               else {
                 const able_cell = $("<a href='#none' class='able_cell dataCell'></a>");
                 able_cell.text(n);
                 able_cell.data(
                   "value",
                   `${years}${months + 1 < 10 ?  "0" + (months + 1) : months + 1 }${n < 10 ? "0"+n : n}`
                 ).prop(
                   "id",
                   `${years}-${months + 1 < 10 ? "0" + (months + 1) : months + 1 }-${n < 10 ? "0"+n : n}`
                 );
                 if ( able_cell.data("value") == $(".date_value").data("value") ) {
                   able_cell.addClass("active_cell");
                 }
                 $(this).find(".cdt_date").append(able_cell);
               }
             } else {
               const newDateBox = $("<div class='dataCell'></div>");
               $(this).find(".cdt_date").append(newDateBox);
             } 
           }
         }
       });
       //첫 달력 로딩
       $(".calender_wrap_prev").week();
       $(".calender_wrap").week();
       $(".calender_wrap_next").week();
       $(".calender_wrap_prev").calender($selYear,$selMonth-2);
       $(".calender_wrap").calender($selYear,$selMonth-1);
       $(".calender_wrap_next").calender($selYear,$selMonth);
       //달력 뒤로가기
         $(".calender_month .gotoback").click(function(){
           if (!($selYear == today.getFullYear() && $selMonth-1 == today.getMonth())) {
             if ( $selMonth == 1 ) {
               $selMonth = 12;
               $selYear -= 1;
             } else {
               $selMonth -= 1;
             }
           }
           $(".calender_wrap_prev").calender($selYear,$selMonth-2);
           $(".calender_wrap").calender($selYear,$selMonth-1);
           $(".calender_wrap_next").calender($selYear,$selMonth);
         });
         // 달력 다음으로
         $(".calender_month .gotonext").click(function(){
           if ( $selMonth == 12 ) {
             $selMonth = 1;
             $selYear += 1;
           } else {
             $selMonth += 1;
           }
           $(".calender_wrap_prev").calender($selYear,$selMonth-2);
           $(".calender_wrap").calender($selYear,$selMonth-1);
           $(".calender_wrap_next").calender($selYear,$selMonth);
         });
         //달력 선택
       $("fieldset").on("click",".able_cell",function(){
         $(this).addClass("active_cell");
         $(".able_cell").not($(this)).removeClass("active_cell");
         $(".date_value")
           .val((i,v) => $(this).prop("id")) //--------------> form data
           .data("value",$(this).data("value"));
         const q = new Date($(this).prop("id"));
         $(".date_inputs label").text(`${q.getFullYear()} 년 ${q.getMonth()+1} 월 ${q.getDate()} 일 (${weekArr[q.getDay()]})`);
         $(".p_s_date").text(`${q.getFullYear()} 년 ${q.getMonth()+1} 월 ${q.getDate()} 일 (${weekArr[q.getDay()]})`);
       })
        // 방문예약 - standard pass 제한일 //
       $(".vif01_number[data-classes='standard']").on("change",function(){
        $(".calender_wrap_prev").calender($selYear,$selMonth-2);
        $(".calender_wrap").calender($selYear,$selMonth-1);
        $(".calender_wrap_next").calender($selYear,$selMonth);
      })


     // 제출 시 정보 저장 //
    

     $(".ticket_form").not("#visit_ticket_form").on("submit",function(e){
      const ddd = $(this).data("type");
      const eee = $(this).data("typetext");
      function submits(e) {
        const bbb = new FormData(e.target);
        const ccc = Object.fromEntries(bbb.entries());
            ccc["common.type"] = ddd;
            ccc["common.typetext"] = eee;
        const submitTime = Date.now();
            ccc["common.submittime"] = submitTime;
        if(ddd == 3 ||ddd == 4||ddd == 5) {
          const infoArr = [];
          $(".i_info").each(function(){
            const $e = {};
            $(this).find("input").each(function(){
              const u = $(this).prop("name");
              if(u) {
                $e[u]=$(this).val();
                delete ccc[u];
              }
            });
            infoArr.push($e);
          });
          ccc.info = infoArr;
        }
        const getList = JSON.parse(localStorage.getItem("ticketBasket"));
        getList.push(ccc);
        localStorage.setItem("ticketBasket",JSON.stringify(getList));
  
        location.href = "/t_use/t_use_reser02.html";
       }
        e.preventDefault();
          if( !$(".numberCheck input[name*='number.']").get().every(v => v.value==0) ) {
            const qq = JSON.parse(localStorage.getItem("load")).page;
            if( qq == 3 || qq == 4 || qq == 5){
              if (!$(".i_info input[name!='']").get().some(v => v.value=='') ){
                submits(e);
              } else {
                alert("정보를 정확히 입력해주세요.")
              }
            }else {
              submits(e);
            }
          } else {
            alert("매수를 선택해주세요.")
          }
    })
})