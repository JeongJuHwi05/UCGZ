$(function(){
    //load==================================
    function colors(i) {
        const arr = ["red", "blue", "green", "yellow", "pink"]
        $(".loading_block").eq(i).css("background-color", arr[i]);
    }
    $(".loading_block").each(function(i){
        const set = setTimeout(function(){
            colors(i);
        }, 500*i)
    })
    $(window).on("load",function(){
        $(".loadingWrap").remove();
    })
   $("header")
        .load("../header/header.html")
    $("footer").load("../footer/footer.html")
    
    localStorage.removeItem("load");
    //설명창 열기/닫기============================
$(".list_exp").each(function(){
    const $t = $(this);
    $(this).siblings("a").on("click",function(){
    $(this).siblings(".list_exp").css("display","flex");
    });
    $(this).find(".close_exp").on("click",function(){
    $(this).parents(".list_exp").css("display","none");
    });
    $(this).on("click",function(e){
    if( e.currentTarget == e.target) {
        $(this).css("display","none");
    }
    });
    $(document).on("keydown",function(e){
    if( $t.css("display") == "flex" && e.which == 27) {
        $t.css("display","none");
    }
    })
})
    // 리스트 정리===============================
let len=0;
$(".list_ul, .t_r_list_ul")
    .each(function(){
        const q = $(this).children("li").length;
        len = len<q? q : len;
    })
    .each(function(){
        const q = $(this).children("li").length;
        for(let i=1;i<=len-q;i++){
            const $li = $("<li class='list_u_li_empty'></li>");
            $(this).append($li);
        }
    })
    //구매 페이지로 이동==========================
$(".gotoreser, .require_tc").each(function(){
    $(this).on("click",function(){
        const p = $(this).data("page") ,c = $(this).data("char") ,n = $(this).data("name");
        const obj = { page : p, char: c, name: n };
        localStorage.setItem("load", JSON.stringify(obj));
    })
})
});