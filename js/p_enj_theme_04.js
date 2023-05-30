$(function(){
    // 팝업 닫기
    $(".pop_up_can>a").click(function(){
        $(".pop_up").hide()
    })
    //팝업 열기
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
    $(".card_body:eq(7)>button").click(function(){
        $(".pop_up:eq(7)").show()
    })
    //  팝업 외부레이어 눌러서 닫기
    $(document).mouseup(function (e) {
        var container = $(".pop_up");
        if (!container.is(e.target) && container.has(e.target).length === 0){
        container.css("display","none");
        }	
        });
})