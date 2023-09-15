$(document).ready(function(){

  /* ______Sub Menu______ */
  $(".gnb").hover(function(){
    $(this).find(".main .smenu").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .smenu").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });
  /* 메인 호버 색상관련 */
  $(".smenu").hover(function(){
    $(this).parent(".main").css({"color":"#0f5939","font-weight":"bold","font-size":"19px"});
    if($(window).scrollTop()>50){
      $(this).parent(".main").css({"color":"#ffc228"});
    };
  },function(){
    $(this).parent(".main").css({"color":"#fff","font-weight":"normal","font-size":"18px"});
  });

  /* ______Header Active, Top Button______ */
  $(window).scroll(function(){
    let pos = $(window).scrollTop();

    if(pos>50){
      $("header").addClass("active")
      $(".top").stop().fadeIn("fast");
    }else{
      $("header").removeClass("active")
      $(".top").stop().fadeOut("fast");
    };
  });

  
  /* ______Main Visual______ */
  let $img = $(".mainimg ul li");
  let oldidx=0;
  let idx=0;
  let img_n = $img.length;

  function mainImg(idx){
    if(oldidx !=idx){
      $img.eq(oldidx).stop().fadeOut("600");
      $img.eq(idx).stop().fadeIn("600");
    }
    oldidx = idx;
  };
  function mainAuto(){
    idx++;
    if(idx>img_n-1){
      idx = 0;
    }
  mainImg(idx);
  }
  timer = setInterval(mainAuto,4000);
  

  /* ______전시.행사 자동 슬라이드______ */

  function slide(){
    $(".slide").stop(true,true).animate({marginLeft:"-=356px"},500,function(){
      $(".slide li:first-child").appendTo(".slide");
      $(this).css({marginLeft:"0px"});
    });
  }

  auto = setInterval(slide,4000);
  

  // 다음보기
  $(".slide_btn .fa-chevron-right").click(function(){

    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    $(".slide").stop(true,true).animate({marginLeft:"-=356px"},500,function(){
      $(".slide li:first-child").appendTo(".slide");
      $(this).css({marginLeft:"0px"});
    auto = setInterval(slide,4000);
    });
  });
  
  // 이전보기
  $(".slide_btn .fa-chevron-left").click(function(){

    clearInterval(auto);
    $(".play").hide();  
    $(".stop").show();
    $(".slide").stop(true,true).animate({marginLeft:"+=356px"},500,function(){
      $(".slide li:last-child").prependTo(".slide");
      $(this).css({marginLeft:"0px"});
    auto = setInterval(slide,4000);
    });
  });

   // Play,Stop
  $(".play").hide();
  
  $(".stop").click(function(){
    clearInterval(auto);
    $(".stop").hide();
    $(".play").show();
  });
  $(".play").click(function(){
    auto = setInterval(slide,4000);
    $(".play").hide();
    $(".stop").show();
  });

  // 마우스 오버 시
  $(".slide li").hover(function(){
    clearInterval(auto);
    $(".stop").hide();
    $(".play").show();
    $(this).find(".text").stop().fadeIn(300);
  },function(){
    $(this).find(".text").stop().fadeOut(300);
    $(".play").hide();
    $(".stop").show();
    auto = setInterval(slide,4000);
  });

  /* ______알림 탭메뉴______ */
  $(".tab_btn .tab").click(function(){

    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    let result = $(this).attr("data-alt")
    $(".tabmenu ul").removeClass("active");
    $("#"+result).addClass("active");

  });

    /* ______공모전,캠페인 슬라이드______ */

    // 다음보기
    $(".side_btn1 .rbtn1").click(function(){
      $(".campaign_slide ul").stop(true,true).animate({marginLeft:"-=500px"},500,function(){
      $(".campaign_slide ul li:first-child").appendTo(".campaign_slide ul");
      $(this).css({marginLeft:"0px"});
      });
    });
    // 이전보기
    $(".side_btn1 .lbtn1").click(function(){
      $(".campaign_slide ul").stop(true,true).animate({marginLeft:"+=500px"},500,function(){
      $(".campaign_slide ul li:last-child").prependTo(".campaign_slide ul");
      $(this).css({marginLeft:"0px"});
      });
    });
    
    /* ______생태원 소식 슬라이드______ */
    // 다음보기
    $(".side_btn2 .rbtn2").click(function(){
      $(".video_slide ul").stop(true,true).animate({marginLeft:"-=500px"},500,function(){
      $(".video_slide ul li:first-child").appendTo(".video_slide ul");
      $(this).css({marginLeft:"0px"});
      });
    });
    // 이전보기
    $(".side_btn2 .lbtn2").click(function(){
      $(".video_slide ul").stop(true,true).animate({marginLeft:"+=500px"},500,function(){
      $(".video_slide ul li:last-child").prependTo(".video_slide ul");
      $(this).css({marginLeft:"0px"});
      });
    });

});
