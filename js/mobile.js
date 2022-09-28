$(function () {
  var num = 0;

  var timer = setInterval(vis_ani, 5000);

  function vis_ani() {
    //
    num++;

    if (num > 4) {
      num = 0;
    }

    fade_ani(num);
  }
  function fade_ani(num) {
    $(".vis_img").eq(num).stop().animate({ opacity: "1" }, 3000, "easeOutExpo");

    $(".vis_img")
      .not($(".vis_img").eq(num))
      .stop()
      .animate({ opacity: "0" }, 3000, "easeOutExpo");

    $(".btn_m").eq(num).addClass("on");

    $(".btn_m").not($(".btn_m").eq(num)).removeClass("on");
  }

  $(".btn_m").click(function () {
    var index_num = $(this).index();

    num = index_num;

    fade_ani(index_num);

    clearInterval(timer);

    timer = setInterval(vis_ani, 5000);
  });

  //모바일@@@@@@@
  var slider2 = $(".bxslider2_m").bxSlider({
    slideWidth: 350,
    slideMargin: 24,
    maxSlides: 1,
    minSlides: 1,
    moveSlides: 1,
    auto: true,
  });
  $(".shop").click(function () {
    $($(".bxslider2_m")).show();
    slider2.reloadSlider();
  });

  var slider3 = $(".bxslider3_m").bxSlider({
    slideWidth: 350,
    slideMargin: 24,
    maxSlides: 1,
    minSlides: 1,
    moveSlides: 1,
    auto: true,
  });
  $(".shop").click(function () {
    $($(".bxslider3_m")).show();
    slider3.reloadSlider();
  });
  var slider4 = $(".bxslider4_m").bxSlider({
    slideWidth: 350,
    //   slideMargin: 1,
    slideMargin: 24,
    maxSlides: 1,
    minSlides: 1,
    auto: true,
  });
  $(".shop").click(function () {
    $($(".bxslider4_m")).show();
    slider4.reloadSlider();
  });
  var slider5 = $(".bxslider5_m").bxSlider({
    slideWidth: 350,
    slideMargin: 24,
    maxSlides: 1,
    minSlides: 1,
    moveSlides: 1,
    auto: true,
  });
  $(".shop").click(function () {
    $($(".bxslider5_m")).show();
    slider5.reloadSlider();
  });
  var slider6 = $(".bxslider6_m").bxSlider({
    slideWidth: 350,
    //   slideMargin: 1,
    slideMargin: 24,
    maxSlides: 1,
    minSlides: 1,
    minSlides: 1,
    auto: true,
  });
  $(".shop").click(function () {
    $($(".bxslider6_m")).show();
    slider6.reloadSlider();
  });
  var slider7 = $(".bxslider7_m").bxSlider({
    slideWidth: 350,
    //   slideMargin: 1,
    slideMargin: 24,
    maxSlides: 1,
    minSlides: 1,
    auto: true,
  });
  $(".shop").click(function () {
    $($(".bxslider7_m")).show();
    slider7.reloadSlider();
  });

  // 모바일 클릭시 이벤트
  $(".bed_m").click(function () {
    $("#sc_new .newbx_m > li:nth-child(1)")
      .stop()
      .animate({ opacity: "1" }, 1000, "easeOutExpo");
    $("#sc_new .newbx_m > li")
      .not("#sc_new .newbx_m > li:nth-child(1)")
      .stop()
      .animate({ opacity: "0" }, 1000, "easeOutExpo");
  });
  $(".met_m").click(function () {
    $("#sc_new .newbx_m > li:nth-child(2)")
      .stop()
      .animate({ opacity: "1" }, 1000, "easeOutExpo");
    $("#sc_new .newbx_m > li")
      .not("#sc_new .newbx_m > li:nth-child(2)")
      .stop()
      .animate({ opacity: "0" }, 1000, "easeOutExpo");
  });
  $(".sof_m").click(function () {
    $("#sc_new .newbx_m > li:nth-child(3)")
      .stop()
      .animate({ opacity: "1" }, 1000, "easeOutExpo");
    $("#sc_new .newbx_m > li")
      .not("#sc_new .newbx_m > li:nth-child(3)")
      .stop()
      .animate({ opacity: "0" }, 1000, "easeOutExpo");
  });
  $(".liv_m").click(function () {
    $("#sc_new .newbx_m > li:nth-child(4)")
      .stop()
      .animate({ opacity: "1" }, 1000, "easeOutExpo");
    $("#sc_new .newbx_m > li")
      .not("#sc_new .newbx_m > li:nth-child(4)")
      .stop()
      .animate({ opacity: "0" }, 1000, "easeOutExpo");
  });
  $(".kit_m").click(function () {
    $("#sc_new .newbx_m > li:nth-child(5)")
      .stop()
      .animate({ opacity: "1" }, 1000, "easeOutExpo");
    $("#sc_new .newbx_m > li")
      .not("#sc_new .newbx_m > li:nth-child(5)")
      .stop()
      .animate({ opacity: "0" }, 1000, "easeOutExpo");
  });
  $(".chi_m").click(function () {
    $("#sc_new .newbx_m > li:nth-child(6)")
      .stop()
      .animate({ opacity: "1" }, 1000, "easeOutExpo");
    $("#sc_new .newbx_m > li")
      .not("#sc_new .newbx_m > li:nth-child(6)")
      .stop()
      .animate({ opacity: "0" }, 1000, "easeOutExpo");
  });

  // 모바일 메뉴 토글바
  var on_off = false;

  $(".toggle_m").click(function () {
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

      $(".mt_stick, .mb_stick")
        .animate({ top: "16px" }, 500, "easeOutExpo")
        .animate({ rotate: "45deg" }, 500, "easeOutExpo");
      //
      $(".mm_stick")
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
      $(".toggle_m span").animate({ rotate: "0" }, 500, "easeOutExpo");
      $(".mt_stick").animate({ top: "5px" }, 500, "easeOutExpo");
      $(".mb_stick").animate({ top: "26px" }, 500, "easeOutExpo");
    }
  });
});
