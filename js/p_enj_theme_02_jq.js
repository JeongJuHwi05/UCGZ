$(function(){
    /* ---------------탭--------------- */
    
    $("#tab02").hide(); /* 로드 직후에는 다이닝 content 안보이게 */
    $("#tab_01").addClass('active'); /* 로드 직후에는 쇼핑 탭 활성화 */

    // tab_01 - 쇼핑 - 쇼핑탭
    // tab_02 - 쇼핑 - 다이닝
    // tab_03 - 다이닝 - 쇼핑
    // tab_04 - 다이닝 - 다이닝
    
    /* 쇼핑 탭일 때 탭 동작 */
    $("#tab_01").on("click",function(){
        $("#tab02").hide();
        $("#tab01").show();
        
        $("#tab_01").addClass('active');

        $('#tab_02').removeClass('active');
        $('#tab_03').removeClass('active');
        $('#tab_04').removeClass('active');
    })
    $("#tab_02").on("click",function(){
        $("#tab01").hide();
        $("#tab02").show();
        $("#tab_04").addClass('active');

        $('#tab_01').removeClass('active');
        $('#tab_02').removeClass('active');
        $('#tab_03').removeClass('active');
    })
    /* 다이닝 탭일 때 탭 동작 */
    $("#tab_03").on("click",function(){
        $("#tab02").hide();
        $("#tab01").show();
        $('#tab_01').addClass('active');

        $('#tab_02').removeClass('active');
        $('#tab_03').removeClass('active');
        $('#tab_04').removeClass('active');
    })
    $("#tab_04").on("click",function(){
        $("#tab01").hide();
        $("#tab02").show();
        $('#tab_04').addClass('active');

        $('#tab_01').removeClass('active');
        $('#tab_02').removeClass('active');
        $('#tab_03').removeClass('active');
    })

    /* ---------------팝업--------------- */

    $(function(){
        $(".sel_loc_item:eq(0)").click(function(){
            $(".brickstreet").show()
            $(".bricktopia").show()
            $(".legocastle").show()
            $(".legocity").show()
            $(".legoninjagoworld").show()
            $(".pirateshores").show()
            $(".miniland").show()
        })
        $(".sel_loc_item:eq(1)").click(function(){
            $(".brickstreet").show()
            $(".bricktopia").hide()
            $(".legocastle").hide()
            $(".legocity").hide()
            $(".legoninjagoworld").hide()
            $(".pirateshores").hide()
            $(".miniland").hide()
        })
        $(".sel_loc_item:eq(2)").click(function(){
            $(".brickstreet").hide()
            $(".bricktopia").show()
            $(".legocastle").hide()
            $(".legocity").hide()
            $(".legoninjagoworld").hide()
            $(".pirateshores").hide()
            $(".miniland").hide()
        })
        $(".sel_loc_item:eq(3)").click(function(){
            $(".brickstreet").hide()
            $(".bricktopia").hide()
            $(".legocastle").show()
            $(".legocity").hide()
            $(".legoninjagoworld").hide()
            $(".pirateshores").hide()
            $(".miniland").hide()
        })
        $(".sel_loc_item:eq(4)").click(function(){
            $(".brickstreet").hide()
            $(".bricktopia").hide()
            $(".legocastle").hide()
            $(".legocity").show()
            $(".legoninjagoworld").hide()
            $(".pirateshores").hide()
            $(".miniland").hide()
        })
        $(".sel_loc_item:eq(5)").click(function(){
            $(".brickstreet").hide()
            $(".bricktopia").hide()
            $(".legocastle").hide()
            $(".legocity").hide()
            $(".legoninjagoworld").show()
            $(".pirateshores").hide()
            $(".miniland").hide()
        })
        $(".sel_loc_item:eq(6)").click(function(){
            $(".brickstreet").hide()
            $(".bricktopia").hide()
            $(".legocastle").hide()
            $(".legocity").hide()
            $(".legoninjagoworld").hide()
            $(".pirateshores").show()
            $(".miniland").hide()
        })
        $(".sel_loc_item:eq(7)").click(function(){
            $(".brickstreet").hide()
            $(".bricktopia").hide()
            $(".legocastle").hide()
            $(".legocity").hide()
            $(".legoninjagoworld").hide()
            $(".pirateshores").hide()
            $(".miniland").show()
        })
        $(".sel_hei_item:eq(0)").click(function(){
            $(".85ride").toggle()
        })
        $(".sel_hei_item:eq(1)").click(function(){
            $(".90ride").toggle()
        })
        $(".sel_hei_item:eq(2)").click(function(){
            $(".95ride").toggle()
        })
        $(".sel_hei_item:eq(3)").click(function(){
            $(".100ride").toggle()
        })
        $(".sel_hei_item:eq(4)").click(function(){
            $(".105ride").toggle()
        })
        $(".sel_hei_item:eq(5)").click(function(){
            $(".115ride").toggle()
        })
        $(".card_body:eq(0)>button").click(function(){
            $(".pop_up:eq(0)").show()
        })
        $(".card_body:eq(1)>button").click(function(){
            $(".pop_up:eq(1)").show()
        })
        $(".card_body:eq(2)>button").click(function(){
            $(".pop_up:eq(2)").show()
        })
        $(".card_body:eq(3)>button").click(function(){
            $(".pop_up:eq(3)").show()
        })
        $(".card_body:eq(4)>button").click(function(){
            $(".pop_up:eq(4)").show()
        })
        $(".card_body:eq(5)>button").click(function(){
            $(".pop_up:eq(5)").show()
        })
        $(".card_body:eq(6)>button").click(function(){
            $(".pop_up:eq(6)").show()
        })
        $(".card_body:eq(6)>button").click(function(){
            $(".pop_up:eq(6)").show()
        })
        $(".card_body:eq(7)>button").click(function(){
            $(".pop_up:eq(7)").show()
        })
        $(".card_body:eq(8)>button").click(function(){
            $(".pop_up:eq(8)").show()
        })
        $(".card_body:eq(9)>button").click(function(){
            $(".pop_up:eq(9)").show()
        })
        $(".card_body:eq(10)>button").click(function(){
            $(".pop_up:eq(10)").show()
        })
        $(".card_body:eq(11)>button").click(function(){
            $(".pop_up:eq(11)").show()
        })
        $(".card_body:eq(12)>button").click(function(){
            $(".pop_up:eq(12)").show()
        })
        $(".card_body:eq(13)>button").click(function(){
            $(".pop_up:eq(13)").show()
        })
        $(".card_body:eq(14)>button").click(function(){
            $(".pop_up:eq(14)").show()
        })
        $(".card_body:eq(15)>button").click(function(){
            $(".pop_up:eq(15)").show()
        })
        $(".card_body:eq(16)>button").click(function(){
            $(".pop_up:eq(16)").show()
        })
        $(".card_body:eq(17)>button").click(function(){
            $(".pop_up:eq(17)").show()
        })
        $(".card_body:eq(18)>button").click(function(){
            $(".pop_up:eq(18)").show()
        })
        $(".card_body:eq(19)>button").click(function(){
            $(".pop_up:eq(19)").show()
        })
        $(".card_body:eq(20)>button").click(function(){
            $(".pop_up:eq(20)").show()
        })
        $(".card_body:eq(21)>button").click(function(){
            $(".pop_up:eq(21)").show()
        })
        $(".card_body:eq(22)>button").click(function(){
            $(".pop_up:eq(22)").show()
        })
        $(".card_body:eq(23)>button").click(function(){
            $(".pop_up:eq(23)").show()
        })
        $(".card_body:eq(24)>button").click(function(){
            $(".pop_up:eq(24)").show()
        })
        $(".card_body:eq(25)>button").click(function(){
            $(".pop_up:eq(25)").show()
        })
        $(".card_body:eq(27)>button").click(function(){
            $(".pop_up:eq(27)").show()
        })
        $(".card_body:eq(28)>button").click(function(){
            $(".pop_up:eq(28)").show()
        })
        $(".card_body:eq(29)>button").click(function(){
            $(".pop_up:eq(29)").show()
        })
        $(".card_body:eq(30)>button").click(function(){
            $(".pop_up:eq(30)").show()
        })
        $(".card_body:eq(31)>button").click(function(){
            $(".pop_up:eq(31)").show()
        })
        $(".card_body:eq(32)>button").click(function(){
            $(".pop_up:eq(32)").show()
        })
        $(".card_body:eq(33)>button").click(function(){
            $(".pop_up:eq(33)").show()
        })
        $(".card_body:eq(34)>button").click(function(){
            $(".pop_up:eq(34)").show()
        })
        $(".card_body:eq(35)>button").click(function(){
            $(".pop_up:eq(35)").show()
        })
        $(".card_body:eq(36)>button").click(function(){
            $(".pop_up:eq(36)").show()
        })
        $(".card_body:eq(37)>button").click(function(){
            $(".pop_up:eq(37)").show()
        })
        $(".card_body:eq(38)>button").click(function(){
            $(".pop_up:eq(38)").show()
        })
        $(".card_body:eq(39)>button").click(function(){
            $(".pop_up:eq(39)").show()
        })
        $(".card_body:eq(40)>button").click(function(){
            $(".pop_up:eq(40)").show()
        })
    
        $(".pop_up_can>a").click(function(){
            $(".pop_up").hide()
        })
        /*$(document).mouseup(function (e) {
            var movewrap = $(".pop_up");
            if (movewrap.has(e.currenttarget).length === 0) {
                movewrap.hide();
            }
        })*/
        //팝업 외부레이어 눌러서 닫기
        $(document).mouseup(function (e) {
            var container = $(".pop_up");
            if (!container.is(e.target) && container.has(e.target).length === 0){
            container.css("display","none");
            }	
            });
    })
})
