$(function() {
  // AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
  // Desktop Logo and Navigationbar Menu Section JS
	var lastScrollTop = 0,
  offsetTopMenu = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= offsetTopMenu)
      return;
    if (st > lastScrollTop) {
      // Down Scroll code
      $(".bg-logo-navbar-menu-desktop, .bg-logo-burger-menu-mobile").css({
        "top":"-60px",
        "box-shadow":"none"
      });
    } else {
      // Up Scroll code
      $(".bg-logo-navbar-menu-desktop, .bg-logo-burger-menu-mobile").css({
        "top": "0",
        "box-shadow": "0px 10px 13px -7px #00000020, 5px 5px 15px 5px rgba(0,0,0,0)"
      });
    }
    lastScrollTop = st;
  });
  // Smooth Animation On Click of Navbar Menu
  $(".menu-listing-desktop > li > a, .menu-listing-mobile > li > a, .footer-listing > li > a, .btn-read-more").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      offset = 0;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - offset
      }, 1400);
    }
  });
  $(".menu-listing-desktop > li > a").click(function() {
    $(".menu-listing-desktop > li > a").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  $(".menu-listing-mobile > li > a").click(function() {
    $(".menu-listing-mobile > li > a").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  // On Scroll Active Class and Remove Class
  $(".menu-listing-desktop, .menu-listing-mobile").onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 1400,
    scrollThreshold: 0.10,
    filter: '',
    easing: 'swing'
  });
  // Mobile Menu JS
	$(".burger-menu").click(function() {
    $(this).toggleClass("active");
		$(".fixed-navbar-menu-mobile").toggleClass("active");
    $(".menu-listing-mobile").toggleClass("active");
    $(".veg-non-veg-listing-mobile").toggleClass("active");
		$("body").toggleClass("active");
  });
  $(".menu-listing-mobile > li > a").click(function() {
    $(".burger-menu").removeClass("active");
    $(".fixed-navbar-menu-mobile").removeClass("active");
		$(".menu-listing-mobile").removeClass("active");
    $(".veg-non-veg-listing-mobile").toggleClass("active");
		$("body").removeClass("active");
  });
  // Scroll To Top JS
  var offset = 400;
  $(window).scroll(function() {
    if($(this).scrollTop() > offset) {
      $(".scroll-to-top").addClass("active");
    } else {
      $(".scroll-to-top").removeClass("active");
    }
  });
  $(".scroll-to-top").click(function(event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: 0},4000);
  });
});
// Disabled "Ctrl" and "Ctrl + Shift" Keys JS
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
      return false;
  }
  else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
      return false;
  }
});
// Disabled Right Click JS
// window.oncontextmenu = function () {
//   return false;
// }
// Disabled Ctrl + U and Ctrl + C JS
$(document).keydown(function(event) {
	var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
	if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
	return false;
	}
});