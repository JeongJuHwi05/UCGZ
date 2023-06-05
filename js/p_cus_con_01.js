$(function(){
    // 편의시설/장애인편의시설 탭메뉴
    $(".con_nav_li1>a").click(function(){
        $(".conv_info").show();
        $(".conv_disabled").hide();
    })
    $(".con_nav_li2>a").click(function(){
        $(".conv_info").hide();
        $(".conv_disabled").show();
    })
    // 슬라이드
    $('.direc_title').click(function() {
        var slideId = $(this).data('slide-id');
        $('#' + slideId).stop().slideToggle();
    });
      
    // 벡터 이미지 회전
    $(".direc_title").click(function(){
        var answer = $(this).find("svg");
        if(!answer.hasClass("on")){ //열었을때
          answer.addClass("on");
          answer.css("transform", "rotate(-180deg)")
        }else{
          answer.removeClass("on"); //닫았을때
          answer.css("transform", "rotate(0deg)")
        }
    });
  
    //제목 호버효과
    $(".direc_title>a").hover(function(){
          $(this).addClass("direc_title_chan");
      },function(){
          $(this).removeClass("direc_title_chan");
    })
  
  
    //제목 색상 칠하기
    $(".direc_title").click(function(){
        var answer = $(this).find("a");
        if(!answer.hasClass("ac")){ //열었을때
          answer.addClass("ac");
        }else{
          answer.removeClass("ac"); //닫았을때
        }
    });
})