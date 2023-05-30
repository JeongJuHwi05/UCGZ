$(function(){
    $(".rainy_res_plus>a").click(function(){
        $(".rainy_res_text_none").toggle()
        if( $(this).html() == '더 보기' ) {
            $(this).html('닫기');
        }
        else {
            $(this).html('더 보기');
        }
    })
})