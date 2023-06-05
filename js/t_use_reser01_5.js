      $(function(){
        
        // common function ------------
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
        function comma(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        //------------Load-------------
        const today = new Date();
        const oneday = 86400000;
          const weekArr = ["일", "월", "화", "수", "목", "금", "토"];
          let $selYear = today.getFullYear();
          let $selMonth = today.getMonth() +1;
            const $selMonthText = $selMonth < 10? "0"+($selMonth) : $selMonth;
          let $selDate = today.getDate();
            const $selDateText = $selDate < 10? "0"+$selDate : $selDate;
          let $selDay = today.getDay();
          $("#vip_date_value")
            .val((i,v) => `${$selYear}-${$selMonthText}-${$selDateText}`)
            .data("value",`${$selYear}${$selMonthText}${$selDateText}`);
          $(".date_inputs label").text(`${$selYear}년 ${$selMonth}월 ${$selDate}일 (${weekArr[$selDay]})`);
          
          if ( !$(".calender_table_cell").eq($selDay + $selDate-1).hasClass("disabled_cell") ) {
            $(".calender_table_cell").eq($selDay + $selDate-1).children().addClass("active_cell");
            $(".df06_p_s_date").text(`${$selYear}년 ${$selMonth}월 ${$selDate}일`);
          }
        // upload calender , input date value -------------------------        
        $.fn.extend({
            week : function() {
              for (let i = 0; i < 7; i++) {
                const newDay = $("<div></div>");
                newDay.addClass("weekCell");
                $(this).find(".cdt_week").append(newDay);
                newDay.text(weekArr[i]);
              }
            },
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
                    if ( able_cell.data("value") == $("#vip_date_value").data("value") ) {
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
          $(".calender_wrap_prev").week();
          $(".calender_wrap").week();
          $(".calender_wrap_next").week();
          $(".calender_wrap_prev").calender($selYear,$selMonth-2);
          $(".calender_wrap").calender($selYear,$selMonth-1);
          $(".calender_wrap_next").calender($selYear,$selMonth);

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
          
          $(".vip_fieldset01").on("click",".able_cell",function(){
            $(this).addClass("active_cell");
            $(".able_cell").not($(this)).removeClass("active_cell");
            $("#vip_date_value")
              .val((i,v) => $(this).prop("id"))
              .data("value",$(this).data("value"));
            const q = new Date($(this).prop("id"));
            $(".date_inputs label").text(`${q.getFullYear()} 년 ${q.getMonth()+1} 월 ${q.getDate()} 일 (${weekArr[q.getDay()]})`);
            $(".p_s_date").text(`${q.getFullYear()} 년 ${q.getMonth()+1} 월 ${q.getDate()} 일 (${weekArr[q.getDay()]})`);
            if( +q < +new Date() + 14*oneday ) {
              $(".vf02_tc_disabled").removeClass("vf02_cover");
            } else {
              $(".vf02_tc_disabled").addClass("vf02_cover");
            }
          })

        //--- 02. 이용권 선택 ------------------------------------------------------------------- 
          // 2-1. 혜택 보기 슬라이드
          
          $(".vf02_exp > a").click(function(){
            $(".vf02_e_listWrap").slideToggle();
          });
          // 2-2. 생성
          function makeInfo(classes,ages,text) {
            
            if( $(`.vf02_tc_input_${classes}`).hasClass(`vf02_tc_input_${ages}`)){
              if( $(`.i_info_${classes}_${ages}`).length < $(`.vf02_tc_input_${classes}.vf02_tc_input_${ages}`).val()) {
                const $makeInfo = $(`.i_info_origin`).clone(true);

                $makeInfo.addClass([`i_info_${classes}_${ages}`, "i_info"]);
                $makeInfo.removeClass("i_info_origin");
                $makeInfo.find(".i_i_t_ticket").text(`VIP ${classes.toUpperCase()} EXPERIENCES`);
                $makeInfo.find(".i_i_t_age").text(`${text}`);
                $makeInfo.find(".i_i_tab input").val((i,v) => `${classes} , ${ages}`)
                $(".vf03_inputBox").append($makeInfo);
                //제거버튼
                $makeInfo.find(".i_i_tab a").click(function(){
                  $makeInfo.remove();
                  $(`.vf02_tc_input_${classes}.vf02_tc_input_${ages}`).val((i,v) => +v-1);
                });

                //-----------clone에 적용할 함수
                //국가 선택
                $makeInfo.find(".user_nationality_select input").on("click",function(){
                  $(this).siblings("ul").toggle();
                });
                $makeInfo.find(".user_nationality_select li a").click(function(){
                  $(this).parents(".user_nationality_select").find("input").val((i,v) => $(this).text());
                  $(this).parents(".user_nationality_select").find("ul").slideUp("fast");
                });
                //태그에 이름 작성
                $makeInfo.find(".user_name input").on("change",function(){
                  $makeInfo.find(".i_i_t_name").text(`사용자 이름 : ${$(this).val()}`);
                })
                // 슬라이드
                $makeInfo.find("._i_i_tab").on("click",function(){
                  $makeInfo.find(".i_i_inputpage_wrap").slideToggle();
                })
              }
              // ------------------------------------------
              else if ($(`.i_info_${classes}_${ages}`).length > $(`.vf02_tc_input_${classes}.vf02_tc_input_${ages}`).val()) {
                $(`.i_info_${classes}_${ages}`).last().remove();
              }
            }
          }
          $(".vf02_tc_input_silver").each(function(i){
            $(this).change(function(){
              const price = 320000;
              let n,m;
              if(i==0) {
                makeInfo("silver", "grown","대인 (만 13세 이상)");
                n = $(this).val();
                $(".p_s_n_s .p_s_n_number").eq(i).text(`수량 : ${n}`);
                $(".p_s_n_s .p_s_n_price").eq(i).text(`￦ ${comma(n*price)}`);
                if ( n == 0 ) {
                  $(".p_s_n_s dl").eq(i).hide();
                } else {
                  $(".p_s_n_s dl").eq(i).show();
                }
              }
              if (i==1) {
                makeInfo("silver","little","소인 (만 13세 미만)");
                m = $(this).val();
                $(".p_s_n_s .p_s_n_number").eq(i).text(`수량 : ${m}`);
                $(".p_s_n_s .p_s_n_price").eq(i).text(`￦ ${comma(m*price)}`);
                if ( m == 0 ) {
                  $(".p_s_n_s dl").eq(i).hide();
                } else {
                  $(".p_s_n_s dl").eq(i).show();
                }
              }
              if ( n+m == 0 ) {
                $(".p_s_n_s").hide();
              } else {
                $(".p_s_n_s").show();
                
              }
            });
          })
          $(".vf02_tc_input_gold").each(function(i){
            $(this).change(function(){
              const price = 440000;
              let n,m;
              if(i==0) {
                makeInfo("gold", "grown","대인 (만 13세 이상)");
                n = $(this).val();
                $(".p_s_n_g .p_s_n_number").eq(i).text(`수량 : ${n}`);
                $(".p_s_n_g .p_s_n_price").eq(i).text(`￦ ${comma(n*price)}`);
                if ( n == 0 ) {
                  $(".p_s_n_g dl").eq(i).hide();
                } else {
                  $(".p_s_n_g dl").eq(i).show();

                }
              }
              if (i==1) {
                makeInfo("gold","little","소인 (만 13세 미만)");
                m = $(this).val();
                $(".p_s_n_g .p_s_n_number").eq(i).text(`수량 : ${m}`);
                $(".p_s_n_g .p_s_n_price").eq(i).text(`￦ ${comma(m*price)}`);
                if ( m == 0 ) {
                  $(".p_s_n_g dl").eq(i).hide();
                } else {
                  $(".p_s_n_g dl").eq(i).show();

                }
              }
              if ( n+m == 0 ) {
                $(".p_s_n_g").hide();
              } else {
                $(".p_s_n_g").show();

              }
            });
          })
          $(".vf02_tc_input_platinum").each(function(i){
            $(this).change(function(){
              const price = 620000;
              let n,m;
              if(i==0) {
                makeInfo("platinum", "grown","대인 (만 13세 이상)");
                n = $(this).val();
                $(".p_s_n_p .p_s_n_number").eq(i).text(`수량 : ${n}`);
                $(".p_s_n_p .p_s_n_price").eq(i).text(`￦ ${comma(n*price)}`);
                if ( n == 0 ) {
                  $(".p_s_n_p dl").eq(i).hide();
                } else {
                  $(".p_s_n_p dl").eq(i).show();
                }
              }
              if (i==1) {
                makeInfo("platinum","little","소인 (만 13세 미만)");
                m = $(this).val();
                $(".p_s_n_p .p_s_n_number").eq(i).text(`수량 : ${m}`);
                $(".p_s_n_p .p_s_n_price").eq(i).text(`￦ ${comma(m*price)}`);
                if ( m == 0 ) {
                  $(".p_s_n_p dl").eq(i).hide();
                } else {
                  $(".p_s_n_p dl").eq(i).show();
                }
              }
              if ( n+m == 0 ) {
                $(".p_s_n_p").hide();
              } else {
                $(".p_s_n_p").show();
              }
            });
          })
          
        // -- 03. 정보입력 -------------------------------------------------------------------------
          
         
          // birthday - maxlength 안먹히는 number input 에 길이 제한 주기
          $(".user_birthday input").each(function(i){
            $(this).on("input",function(){
              if(i==0){
                if( $(this).val().length > 4) {
                  $(this).val((i,v) => v.slice(0,4));
                }
              }
              if(i==1){
                if( $(this).val() < 13 ) {
                  $(this).val((i,v) => v.length > 2? v.slice(0,2) : v);
                } else {
                  
                  $(this).val((i,v) => 0);
                }
              }
              if(i==2){
                if( $(this).val() < 32 ) {
                  $(this).val((i,v) => v.length > 2? v.slice(0,2) : v)
                } else {
                  $(this).val((i,v) => 0);
                }
              }
            });
          });

        // ---- 06-1. 할인적용 ------------------------------------------------------------
        $(".d_list li").each(function(i){
          $(this).find(".d_l_listopen").click(function(){
            $(".d_l_detail").eq(i).slideToggle();
            $(".d_l_detail").not(":eq("+i+")").slideUp()
            $(".d_l_w_exp").eq(i).slideToggle();
            $(".d_l_w_exp").not(":eq("+i+")").slideDown();
          })
        });
        if ($(".d_list").has(".empty_li")) {
          $(".p_s_discount").parent().remove();
        }
        
        $(".d_l_select").each(function(i){
          $(this).click(function(){
            $(".d_list li").eq(i).toggleClass("active_discount");
            $(".d_list li").not(`:eq(${i})`).removeClass("active_discount");
            $(".d_list li input:checkbox").eq(i).prop("checked",function(){
              $(".d_list li input:checkbox").not($(this)).prop("checked",false);
              return !$(this).prop("checked");
            });
            
            if ( $(".d_list li input:checkbox").eq(i).is(":checked")) {
              $(".p_s_discount > div").show();
            } else if (!$(".d_list li input:checkbox").is(":checked")) {
              $(".p_s_discount > div").hide();
            }
            total();
          });
        });
        

        // ------------------------------------- 06-2. 가격 합산
        $(".vip_fieldset02").on("change","input",function(){ total(); });
      function total() {
        const cost = [320000,320000,440000,440000,620000,620000];
        const cost2 = cost.map((v,i) => {
          const t = $(".vip_fieldset02 input").eq(i).val();
          return v*t
        });
        $("#vip_total_price").val(function(i,v) {
          const to = cost2.reduce((a,b) => a+b);
          $(".p_t_text").text(`￦ ${comma(to)}`);
          return to
        })
      }
        //페이지 리셋
      $(".reset_btn").click(function(){
        $(".formBox").load("/t_use/t_use_reser01_1.html");
      })
    });
