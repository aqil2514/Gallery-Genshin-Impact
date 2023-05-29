$(document).ready(function () {
  let slide = 0;
  const images = $("figure img");

  //   ANIMATE BUTTON ONCLICK
  $("#animate").on("click", function () {
    images.fadeIn(1000, function () {
      $("#animate").css("display", "none");
      $("#hide").css("display", "block");
      $("#prev").css("display", "block");
      $("#next").css("display", "block");
      slide = 0;
    });

    images.each(function (index, img) {
      if (index !== 0) {
        $(img).css("display", "none");
      }
    });

    $("#header").slideUp(1000);
  });
  $("#hide").on("click", function () {
    images.fadeOut(1000, function () {
      $("#hide").css("display", "none");
      $("#animate").css("display", "block");
      $("#prev").css("display", "none");
      $("#next").css("display", "none");
      $("#header").slideDown(1000);
    });
  });

  //   NEXT & PREV BUTTON ONCLICK
  $("#next").on("click", function () {
    if (slide == 10) {
      slide = -1;
    }
    slide++;
    images.each(function (index, img) {
      if (index == slide) {
        $(img).fadeIn(1000);
        $("#main").css("background-image", `linear-gradient(45deg, #000000cc, rgba(0, 0, 0, 0.5)), url(img/img-${slide}.jpg)`);
      } else if (index !== slide) {
        $(img).fadeOut(1000);
      }
    });
  });
  $("#prev").on("click", function () {
    if (slide == 0) {
      slide = 11;
    }
    slide--;
    images.each(function (index, img) {
      if (index == slide) {
        $(img).fadeIn(1000);
      } else if (index !== slide) {
        $(img).fadeOut(1000);
      }
    });
    console.log(slide);
  });
});
