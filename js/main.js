$(function () {
  //타이틀
  $("h3").animate({ top: "25" + "%", opacity: "1" }, 1000, "easeOutExpo");

  //오프라인 / 온라인
  $(".offline")
    .stop()
    .mouseover(function () {
      $(".sc_color")
        .stop()
        .animate({ top: "12" + "px", opacity: "1" }, 1000, "easeOutExpo");
      $(".off_color")
        .stop()
        .animate({ top: "-" + "27" + "px", opacity: "1" }, 1000, "easeOutExpo");
      $(".off")
        .stop()
        .animate({ top: "-" + "15" + "px", opacity: "0" }, 1000, "easeOutExpo");
    });
  $(".offline")
    .stop()
    .mouseleave(function () {
      $(".off")
        .stop()
        .animate({ top: "-" + "0" + "px", opacity: "1" }, 1000, "easeOutExpo");
      $(".off_color")
        .stop()
        .animate({ top: "+" + "0" + "px", opacity: "0" }, 1000, "easeOutExpo");
      $(".sc_color")
        .stop()
        .animate({ top: "37" + "px", opacity: "0" }, 1000, "easeOutExpo");
    });
  $(".online").mouseover(function () {
    $(".sc_1_color")
      .stop()
      .animate({ top: "12" + "px", opacity: "1" }, 1000, "easeOutExpo");
    $(".on_color")
      .stop()
      .animate({ top: "-" + "27" + "px", opacity: "1" }, 1000, "easeOutExpo");
    $(".on")
      .stop()
      .animate({ top: "-" + "15" + "px", opacity: "0" }, 1000, "easeOutExpo");
  });
  $(".online").mouseleave(function () {
    $(".on")
      .stop()
      .animate({ top: "-" + "0" + "px", opacity: "1" }, 1000, "easeOutExpo");
    $(".on_color")
      .stop()
      .animate({ top: "+" + "0" + "px", opacity: "0" }, 1000, "easeOutExpo");
    $(".sc_1_color")
      .stop()
      .animate({ top: "37" + "px", opacity: "0" }, 1000, "easeOutExpo");
  });

  //shop
  $(".shop").mouseover(function () {
    $(".shop_normal").css({ top: "-" + 110 + "px" });
    $(".shop_color").css({ top: "0" });
  });
  $(".shop").mouseleave(function () {
    $(".shop_normal").css({ top: "0" });
    $(".shop_color").css({ top: "110px" });
  });

  //패밀리사이트
  var on_off = false;

  $(".family h2 .up_down").click(function () {
    on_off = !on_off;

    if (on_off) {
      $(".fam_box .fam_ch").animate(
        { bottom: "7%", opacity: "1" },
        1000,
        "easeOutExpo"
      );
      $(".family h2 .up_down").text("▼");
    } else {
      $(".fam_box .fam_ch").animate(
        { bottom: "0", opacity: "0" },
        1000,
        "easeOutExpo"
      );
      $(".family h2 .up_down").text("▲");
    }
  });
});
