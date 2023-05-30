$(function(){
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

    // $(".direc_title:eq(1)").click(function(){
    //     var answer = $(".direc_title svg:eq(1)");
    //     if(!answer.hasClass("on")){ //열었을때
    //       $(".direc_title svg:eq(1)").addClass("on");
    //     }else{
    //       $(".direc_title svg:eq(1)").removeClass("on"); //닫았을때
    //       $(".direc_title svg:eq(1)").css("transition", "all 0.2s ease-in")
    //     }
    // });
    
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
    // $(".direc_title>a:eq(0)").click(function(){
    //     var answer = $(".direc_title>a:eq(0)");
    //     if(!answer.hasClass("ac")){ //열었을때
    //       $(".direc_title>a:eq(0)").addClass("ac");
    //     }else{
    //       $(".direc_title>a:eq(0)").removeClass("ac"); //닫았을때
    //     }
    // });
    
})
