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

/* Sticky footer */
// $(window).bind("load", function() {
//   var footer = $("footer");
//   var pos = footer.position();
//   var height = $(window).height();
//   height = height - pos.top;
//   height = height - 50;
//   if (height > 0) {
//     footer.css({
//       "margin-top": height + "px"
//     });
//   }
// });

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

// Form Selector

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
