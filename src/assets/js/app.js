// Import jquery from dependencies
import $ from "jquery";

window.$ = $;
window.jQuery = $;

// Bootstrap

// Option 1: Import Full boostrap from dependencies
//import 'bootstrap';

// Option 2 : If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
require("./lib/bootstrap-explicit-pieces.js");

// Custom js

// Steps
$(document).ready(function() {
  $(".step").each(function(index, element) {
    $(element)
      .not(".active")
      .addClass("done");
    $(".done").html('<i class="fa fa-check" aria-hidden="true"></i>');
    if ($(this).is(".active")) {
      return false;
    }
  });
});

// Form Selector sticky
$(document).ready(function() {
  if (typeof $("#form-selector").offset() !== "undefined") {
    var height = $("#form-selector").offset().top;
    var is_mobile = false;

    if ($(".navbar-toggler").is(":visible")) {
      is_mobile = true;
    }
    if (!is_mobile) {
      $(window).on("scroll", function() {       
        if ($(".navbar-toggler").is(":visible")) {
          $("#form-selector").removeClass("flex-form-sticky");
        } else if ($(window).scrollTop() > height) {
          $("#form-selector").addClass("flex-form-sticky");
        } else {
          $("#form-selector").removeClass("flex-form-sticky");
        }
      });
    }
  }
});

// Go top button
jQuery(document).ready(function($) {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $(".cd-top");

  //hide or show the "back to top" link
  $(window).scroll(function() {
    $(this).scrollTop() > offset
      ? $back_to_top.addClass("cd-is-visible")
      : $back_to_top.removeClass("cd-is-visible cd-fade-out");
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass("cd-fade-out");
    }
  });

  //smooth scroll to top
  $back_to_top.on("click", function(event) {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0
      },
      scroll_top_duration
    );
  });
});

// Nav Language selector
jQuery(document).ready(function($) {
  if ($("html").attr("lang") == "es") {
    $("a.es").removeClass("visible");
  } else if ($("html").attr("lang") == "ca") {
    $("a.ca").removeClass("visible");
  } else if ($("html").attr("lang") == "it") {
    $("a.it").removeClass("visible");
  } else if ($("html").attr("lang") == "en") {
    $("a.en").removeClass("visible");
  }
});
