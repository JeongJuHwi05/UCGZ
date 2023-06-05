        $(function(){
          // for Total Price ----------
          var discountRate = 1;
          var df03_number = 0, df03_price = 0;
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
          // 인원 입력
          $("#dated_numbers_grown").change(function(){
            $(".p_s_person").children("span:first-child").text(`대인 ${$(this).val()} 명`);
            total()
          })
          $("#dated_numbers_little").change(function(){
            $(".p_s_person").children("span:last-child").text(`소인 ${$(this).val()} 명`);
            total()
          })
          
          // ------------------------------------- 03. 사전 구매
          $(".df03_wrap input:radio").each(function(i){
            $(".df03_wrap .nc_wrap input").eq(i).change(function(){
              $(".df03_wrap input:radio").eq(i).trigger("click");
            })
            // 사전구매 선택
            $(this).click(function(){
              $(".df03_wrap .nc_wrap input").not(":eq("+i+")").prop("disabled",true);
              $(".df03_wrap .nc_wrap input").eq(i).prop("disabled",false);

              //사전구매 인원선택
              if ($(".df03_wrap .nc_wrap input").eq(i).val() == 0) {
                $(".p_s_extra >div").eq(0).hide()
              } else {
                $(".p_s_extra >div").eq(0).show()
              }
              if ( i == 0 ) {
                const digitalPhotoPrice = 25000;
                df03_number = $("#dated_digital_photo_number").val();
                df03_price = digitalPhotoPrice;
                $(".p_s_e_title03").eq(0).text("디지털 기념 사진 사전구매");
                $(".p_s_e_number03").eq(0).text(`수량 : ${$("#dated_digital_photo_number").val()}`);
                $(".p_s_e_price03").eq(0).text("￦ " + comma($("#dated_digital_photo_number").val()*digitalPhotoPrice));
              }
              if ( i == 1 ) {
                const miniFigurePrice = 15000;
                df03_number = $("#dated_mini_figure_number").val();
                df03_price = miniFigurePrice;
                $(".p_s_e_title03").eq(0).text("미니 피겨 사전구매");
                $(".p_s_e_number03").eq(0).text(`수량 : ${$("#dated_mini_figure_number").val()}`);
                $(".p_s_e_price03").eq(0).text("￦ " +comma( $("#dated_mini_figure_number").val()*miniFigurePrice));
              }
              
              total()
            });
          });
          // ------------------------------------- 04. 패스트트랙
          $(".df04_labelexp >a").on("click",function(){
            $(".df04_l_ride").slideToggle("fast");
          })
          $(".df04_ft .nc_wrap input").each(function(i) {
            const $newbox04 = $('<div class="p_s_e_4"><div class="p_s_e_title04"></div><div class="p_s_e_number04"></div><div class="p_s_e_price04"></div></div>');
            $(".p_s_extra").append($newbox04);

            if ( $(this).val() == 0) { $newbox04.hide() }
            else { $newbox04.show()}
            
            $(this).change(function() {
              if ( $(this).val() == 0) { $newbox04.hide() }
              else { $newbox04.show()}

              const fasttrackPrice = 
                i==0? 40000 : 
                i==1? 70000 :
                i==2? 130000 : null; 
              $(".p_s_e_title04").eq(i).text($(".df04_ft label").eq(i).text());
              $(".p_s_e_number04").eq(i).text(`수량 : ${$(this).val()}`);
              $(".p_s_e_price04").eq(i).text("￦ " + comma($(this).val()*fasttrackPrice));
              df04_price[i] = $(this).val()*fasttrackPrice;
              total()
            })
          })
          // ------------------------------------- 05. VIP EXPERIENCES
          
          const $newbox05 = $('<div class="p_s_e_5"><div class="p_s_e_title05"></div><div class="p_s_e_number05"></div><div class="p_s_e_price05"></div></div>');
          $(".p_s_extra").append($newbox05);
          
          $(".df05_wrap .nc_wrap input").change(function(){
            if ( $("#dated_master_builder").is(":checked")) {
              if ($(this).val()==0 ) {
                df05_price = 0;
                $("#dated_master_builder").prop("checked",false)
                $newbox05.hide()
              } else {
                $newbox05.show();
                const vipPrice = 165000;
                $(".p_s_e_title05").text("LEGOLAND® Master Builder");
                $(".p_s_e_number05").text(`수량 : ${$(this).val()}`);
                $(".p_s_e_price05").text("￦ " + comma($(this).val()*vipPrice));
                
                df05_price = $(this).val()*vipPrice;
              }
            } else {
              if ( !$(this).val()==0 ) {
                $newbox05.show();
                $("#dated_master_builder").prop("checked",true);
                const vipPrice = 165000;
                $(".p_s_e_title05").text("LEGOLAND® Master Builder Program");
                $(".p_s_e_number05").text(`수량 : ${$(this).val()}`);
                $(".p_s_e_price05").text("￦" + comma($(this).val()*vipPrice));

                df05_price = $(this).val()*vipPrice;
              }
            }
            total();
          })

          // ------------------------------------- 06-1. 할인적용
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
          // 로딩 시 할인 적용 //
          if (localStorage.getItem("load")){
            let obj = JSON.parse(localStorage.getItem("load"));
            let num = obj["page"], char = obj["char"], name = obj["name"];
            selectDc(char);
          }
          // 할인 설명 슬라이드 //
          $(".d_list li").each(function(i){
            $(this).find(".d_l_listopen").click(function(){
              $(".d_l_detail").eq(i).slideToggle();
              $(".d_l_detail").not(":eq("+i+")").slideUp()
              $(".d_l_w_exp").eq(i).slideToggle();
              $(".d_l_w_exp").not(":eq("+i+")").slideDown();
            })
          });
          // 할인 내용 입력 //
          $(".d_l_select").each(function(i){
            $(this).click(function(){
              selectDc(i);
              if( $(".active_discount").length != 0) {
                $(".p_s_box_discount").show();
              } else {
                $(".p_s_box_discount").hide();
              }
            });
          });
          function selectDc(i){
            $(".d_list li").eq(i).toggleClass("active_discount");
            $(".d_list li").not(`:eq(${i})`).removeClass("active_discount");
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
              if ( i==0 ) {
                $(".p_s_e_title06").text("강원도민 할인 혜택");
                if (selectDay==0 || selectDay==6 || holidayCheck ) {
                  $(".p_s_e_number06").text("10% 할인");
                  discountRate = 1 - 0.1;
                } else {
                  $(".p_s_e_number06").text("30% 할인") ;
                  discountRate = 1 - 0.3
                }
              }
              if ( i==1 ) {
                $(".p_s_e_title06").text("국민카드 할인");
                if (selectDay==0 || selectDay==6 || holidayCheck ) {
                  $(".p_s_e_number06").text("10% 할인");
                  discountRate = 1 - 0.1;
                } else {
                  $(".p_s_e_number06").text("20% 할인") ;
                  discountRate = 1 - 0.2;
                }
              }
              if ( i==2 ) {
                $(".p_s_e_title06").text("LG U+ 할인");
                if (selectDay==0 || selectDay==6 || holidayCheck ) {
                  $(".p_s_e_number06").text("10% 할인");
                  discountRate = 1 - 0.1;
                } else {
                  $(".p_s_e_number06").text("20% 할인") ;
                  discountRate = 1 - 0.2;
                }
              }
              if ( i==3 ) {
                $(".p_s_e_title06").text("나라사랑 할인");
                if (selectDay==0 || selectDay==6 || holidayCheck ) {
                  $(".p_s_e_number06").text("20% 할인");
                  discountRate = 1 - 0.2;
                } else {
                  $(".p_s_e_number06").text("35% 할인") ;
                  discountRate = 1 - 0.35;
                }
              }
            } else if (!$(".d_list li input:checkbox").is(":checked")) {
              $(".p_s_discount > div").hide();
            }
            total();
          }

          // ------------------------------------- 06-2. 가격 합산
          function total() {
            const today = new Date();
            let $selYear = today.getFullYear();
            let $selMonth = today.getMonth() +1;
            let $selDate = today.getDate();
            
            const grownDatedPrice = 
              new Date($selYear,$selMonth-1,$selDate) == today ? 60000 : 54000;
            const littleDatedPrice = 
              new Date($selYear,$selMonth-1,$selDate) == today ? 50000 : 45000;

            const t_1 = grownDatedPrice * $("#dated_numbers_grown").val() + littleDatedPrice * $("#dated_numbers_little").val();
            const t_2 = df03_number * df03_price;
            const t_3 = df04_price.reduce((a,b) => a+b, 0);
            const t_4 = df05_price;

            $("#dated_total_price").val(function(i,v) {
              return t_1 * discountRate + t_2 + t_3 + t_4;
            })
            $(".p_t_text").text("￦"+comma(t_1 * discountRate + t_2 + t_3 + t_4));
          }

        
          //페이지 리셋
        $(".reset_btn").click(function(){
          $(".formBox").load("/t_use/t_use_reser01_1.html");
        })
        });
