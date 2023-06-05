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
        
        const oneday = 86400000;
        $(".vip_fieldset01").on("click",".able_cell",function(){
          const q = new Date($(this).prop("id"));
          if( +q < +new Date() + 14*oneday ) {
            $(".vf02_tc_disabled").removeClass("vf02_cover");
            $(".vf02_tc_input_gold, .vf02_tc_input_platinum").val((i,v) => 0);
            $(".i_info[class*='gold'], .i_info[class*='platinum']").remove();
            $(".p_s_n_g dl *, .p_s_n_p dl *").text("");
            $(".p_s_n_g, .p_s_n_p").hide();
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
                $makeInfo.prop("data-classes", classes);
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
