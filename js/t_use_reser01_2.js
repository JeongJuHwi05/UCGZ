        $(function(){
          // for Total Price ----------
          var discountRate = 1;
          var dtf03_number = 0, dtf03_price = 0;
          var df04_price = [0,0,0];
          var df05_price = 0;

          function comma(x) {
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
         
          // -------------------------------------- 02. 인원 선택
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

          $("#daytime_numbers_grown").change(function(){
            $(".p_s_person").children("span:first-child").text(`대인 ${$(this).val()} 명`);
            total()
          })
          $("#daytime_numbers_little").change(function(){
            $(".p_s_person").children("span:last-child").text(`소인 ${$(this).val()} 명`);
            total()
          })
          
          // ------------------------------------- 03. 사전 구매
          $(".dtf03_wrap input:radio").each(function(i){
            $(".dtf03_wrap .nc_wrap input").eq(i).change(function(){
              $(".dtf03_wrap input:radio").eq(i).trigger("click");
            })

            $(this).click(function(){
              $(".dtf03_wrap .nc_wrap input").not(":eq("+i+")").prop("disabled",true);
              $(".dtf03_wrap .nc_wrap input").eq(i).prop("disabled",false);

              if ($(".dtf03_wrap .nc_wrap input").eq(i).val() == 0) {
                $(".p_s_extra >div").eq(0).hide()
              } else {
                $(".p_s_extra >div").eq(0).show()
              }
              if ( i == 0 ) {
                const digitalPhotoPrice = 25000;
                dtf03_number = $("#daytime_digital_photo_number").val();
                dtf03_price = digitalPhotoPrice;
                $(".p_s_e_title03").eq(0).text("디지털 기념 사진 사전구매");
                $(".p_s_e_number03").eq(0).text($("#daytime_digital_photo_number").val());
                $(".p_s_e_price03").eq(0).text("￦" + $("#daytime_digital_photo_number").val()*digitalPhotoPrice);
              }
              if ( i == 1 ) {
                const miniFigurePrice = 15000;
                dtf03_number = $("#daytime_mini_figure_number").val();
                dtf03_price = miniFigurePrice;
                $(".p_s_e_title03").eq(0).text("미니 피겨 사전구매");
                $(".p_s_e_number03").eq(0).text($("#daytime_mini_figure_number").val());
                $(".p_s_e_price03").eq(0).text("￦" + $("#daytime_mini_figure_number").val()*miniFigurePrice);
              }
              
              total()
            });
          });
          // ------------------------------------- 04. 패스트트랙
          
          // ------------------------------------- 05. VIP EXPERIENCES

          // ------------------------------------- 06-1. 할인적용
          if ($(".d_list").has(".empty_li")) {
            $(".p_s_discount").parent().remove();
          }
          $(".d_list li").each(function(i){
            $(this).find(".d_l_listopen").click(function(){
              $(".d_l_detail").eq(i).slideToggle();
              $(".d_l_detail").not(":eq("+i+")").slideUp()
              $(".d_l_w_exp").eq(i).slideToggle();
              $(".d_l_w_exp").not(":eq("+i+")").slideDown();
            })
          });

          const holiday = [
            { month: 1, date: 1}, // 신정
            { month: 3, date: 1}, // 삼일절
            { month: 5, date: 5}, // 어린이날
            { month: 6, date: 6}, // 현충일
            { month: 8, date: 15}, // 광복절
            { month: 10, date: 3}, // 개천절
            { month: 10, date: 9}, // 한글날
            { month: 12, date: 25} // 성탄절
          ]                        // 기타 음력 공휴일/ 대체휴일은 직접 입력 (설날, 추석, 석가탄신일)

          $(".d_l_select").each(function(i){
            $(this).click(function(){
              $(".d_list li").eq(i).toggleClass("active_discount");
              $(".d_list li").not(`:eq(${i})`).removeClass("active_discount");
              // $(".d_list li").eq(i).removeClass("not_discount");
              // $(".d_list li").not(`:eq(${i})`).addClass("not_discount");
              $(".d_list li input:checkbox").eq(i).prop("checked",function(){
                $(".d_list li input:checkbox").not($(this)).prop("checked",false);
                return !$(this).prop("checked");
              });

              if ( $(".d_list li input:checkbox").eq(i).is(":checked")) {
                $(".p_s_discount > div").show();
                const selectDate = new Date($selYear, $selMonth-1, $selDate);
                const selectDay = selectDate.getDay();
                const holidayCheck = holiday.some(function(v){
                  return v.month == $selMonth && v.date == $selDate;
                });

              } else if (!$(".d_list li input:checkbox").is(":checked")) {
                $(".p_s_discount > div").hide();
              } 
              total();
            });
          });
          // ------------------------------------- 06-2. 가격 합산          
          const total = function() {
            const grownDatedPrice = 
              today.getFullYear()==$selYear && today.getMonth()==$selMonth-1 && today.getDate()==$selDate ? 60000 : 54000;
            const littleDatedPrice = 
              today.getFullYear()==$selYear && today.getMonth()==$selMonth-1 && today.getDate()==$selDate ? 50000 : 45000;
            const t_1 = grownDatedPrice * $("#daytime_numbers_grown").val() + littleDatedPrice * $("#daytime_numbers_little").val();
            const t_2 = dtf03_number * dtf03_price;
            // const t_3 = df04_price.reduce((a,b) => a+b, 0);
            // const t_4 = df05_price;
            $("#daytime_total_price").val(function(i,v) {
              return t_1 * discountRate + t_2;
            })
            $(".p_t_text").text("￦"+comma(t_1 * discountRate + t_2));
          }
      
            //페이지 리셋
          $(".reset_btn").click(function(){
            $(".formBox").load("./t_use_reser01_1.html");
          })
        });
