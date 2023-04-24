"use strict";

$(function () {
  "use strict";

  $(".toggle-sidebar").on("click", function () {
    $(".content-area, .sidebar").toggleClass("no-sidebar");
  }); // toggle sup menu

  $(".toggle-submenu").on("click", function () {
    $(this).find(".fa-angle-right").toggleClass("down");
    $(this).next(".child-links").slideToggle();
  });
  $(".toggle-fullscreen").on("click", function () {
    $(this).toggleClass("full-screen");

    if ($(this).hasClass("full-screen")) {
      openFullscreen();
    } else {
      closeFullScreen();
    }
  }); // toggke settings

  $(".toggle-settings").on("click", function () {
    $(this).find("i").toggleClass("fa-spin");
    $(this).parent().toggleClass("hide-settings");
  }); // switch colors Theme

  var ThemesClasses = [];
  $(".color-options li").each(function () {
    ThemesClasses.push($(this).data("theme"));
  });
  $(".color-options li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("body").removeClass(ThemesClasses.join(" ")).addClass($(this).data("theme"));
  });
});
var elem = document.documentElement;

function openFullscreen() {
  // current working methods
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }
}

function closeFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}