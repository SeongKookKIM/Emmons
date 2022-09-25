$(function () {
  // 신상품 클릭 이벤트
  $(".bed").click(function () {
    $("#sc_new .newbx > li:nth-child(1)")
      .stop()
      .animate({ opacity: "1" }, 1000, "easeOutExpo");
    $("#sc_new .newbx > li")
      .not("#sc_new .newbx > li:nth-child(1)")
      .stop()
      .animate({ opacity: "0" }, 1000, "easeOutExpo");
  });
  $(".met").click(function () {
    $("#sc_new .newbx > li:nth-child(2)")
      .stop()
      .animate({ opacity: "1" }, 1000, "easeOutExpo");
    $("#sc_new .newbx > li")
      .not("#sc_new .newbx > li:nth-child(2)")
      .stop()
      .animate({ opacity: "0" }, 1000, "easeOutExpo");
  });
  $(".sof").click(function () {
    $("#sc_new .newbx > li:nth-child(3)")
      .stop()
      .animate({ opacity: "1" }, 1000, "easeOutExpo");
    $("#sc_new .newbx > li")
      .not("#sc_new .newbx > li:nth-child(3)")
      .stop()
      .animate({ opacity: "0" }, 1000, "easeOutExpo");
  });
  $(".liv").click(function () {
    $("#sc_new .newbx > li:nth-child(4)")
      .stop()
      .animate({ opacity: "1" }, 1000, "easeOutExpo");
    $("#sc_new .newbx > li")
      .not("#sc_new .newbx > li:nth-child(4)")
      .stop()
      .animate({ opacity: "0" }, 1000, "easeOutExpo");
  });
  $(".kit").click(function () {
    $("#sc_new .newbx > li:nth-child(5)")
      .stop()
      .animate({ opacity: "1" }, 1000, "easeOutExpo");
    $("#sc_new .newbx > li")
      .not("#sc_new .newbx > li:nth-child(5)")
      .stop()
      .animate({ opacity: "0" }, 1000, "easeOutExpo");
  });
  $(".chi").click(function () {
    $("#sc_new .newbx > li:nth-child(6)")
      .stop()
      .animate({ opacity: "1" }, 1000, "easeOutExpo");
    $("#sc_new .newbx > li")
      .not("#sc_new .newbx > li:nth-child(6)")
      .stop()
      .animate({ opacity: "0" }, 1000, "easeOutExpo");
  });

  // 메뉴바 이벤트
  $(function () {
    $(".btn").click(function () {
      //
      $(this).next().slideToggle("slow");

      $(".list").not($(this).next()).slideUp("slow");
    });
  });

  //메뉴토글바

  var on_off = false;

  $(".toggle").click(function () {
    on_off = !on_off;

    if (on_off) {
      $("#section_header")
        .stop()
        .animate({ height: "100vh" }, 1000, "easeOutExpo");
      $("#section_header").css({
        backgroundColor: "#575757",
      });
      $(
        ".menu_box .menus_list .btn p, .menu_box .menus_list .list ol li a "
      ).css({
        color: "#fff",
      });

      //

      $(".t_stick, .b_stick")
        .animate({ top: "24px" }, 500, "easeOutExpo")
        .animate({ rotate: "45deg" }, 500, "easeOutExpo");
      //
      $(".m_stick")
        .delay(500) //중간에 멈춤
        .animate({ rotate: "-45deg" }, 500, "easeOutExpo");

      //
    } else {
      $("#section_header")
        .stop()
        .animate({ height: "100px" }, 1000, "easeOutExpo");
      $("#section_header").css({
        backgroundColor: "#d1d1d1",
      });
      $(
        ".menu_box .menus_list .btn p, .menu_box .menus_list .list ol li a "
      ).css({
        color: "#333",
      });
      //
      $(".toggle span").animate({ rotate: "0" }, 500, "easeOutExpo");
      $(".t_stick").animate({ top: "9px" }, 500, "easeOutExpo");
      $(".b_stick").animate({ top: "35px" }, 500, "easeOutExpo");
    }
  });

  //스크롤시 움직이는 이벤트

  var isFn = false;
  $(window).scroll(function () {
    if (isFn) {
      return;
    }

    var scrPos = $(this).scrollTop();

    if (
      scrPos >= $("#news").position().top - 200 &&
      scrPos <= $("#news").position().top + 300
    ) {
      $("#news .news_box .news_subbox").animate(
        { opacity: "1" },
        1000,
        "easeOutExpo"
      );
      $("#news .news_box .news_subbox .news_sub_box1").animate(
        { top: "-250px" },
        1000,
        "easeOutExpo"
      );
      $("#news .news_box .news_subbox .news_sub_box1 .txt_box1").animate(
        { bottom: "-50px", opacity: "1" },
        1000,
        "easeOutExpo"
      );
      $("#news .news_box .news_subbox .news_sub_box2").animate(
        { top: "20px" },
        1000,
        "easeOutExpo"
      );
      $("#news .news_box .news_subbox .news_sub_box2 .txt_box2").animate(
        { left: "-370px", opacity: "1" },
        1000,
        "easeOutExpo"
      );
      $("#news .news_box .news_subbox .news_sub_box3").animate(
        { top: "345px" },
        1000,
        "easeOutExpo"
      );
      $("#news .news_box .news_subbox .news_sub_box3 .txt_box3").animate(
        { left: "400px", opacity: "1" },
        1000,
        "easeOutExpo"
      );
    }
  });

  //shop클릭시 이벤트
  $(".shop").click(function () {
    $("#main_section").stop().show().animate({ top: "0" }, 1000, "easeOutExpo");
    $("#main").hide();
  });
});
