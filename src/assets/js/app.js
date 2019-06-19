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
$(window).bind("load", function() {
  var footer = $("footer");
  var pos = footer.position();
  var height = $(window).height();
  height = height - pos.top;
  height = height - 50;
  if (height > 0) {
    footer.css({
      "margin-top": height + "px"
    });
  }
});

// Index Page load
$("body.index").ready(function() {
  // For index Page coding
});

require("./lib/require.js");
// Jquery plugins
require("./lib/jquery.migrate.js");
require("./lib/jquery.validate.js");
require("./lib/jquery.ui.js");
require("./lib/jquery.ui.datepicker-es.js");
require("./lib/jquery.ui.datepicker-ca.js");
require("./lib/jquery.ui.datepicker-en.js");
require("./lib/jquery.ui.datepicker-it.js");
require("./lib/jquery.ui.datepicker.validation.js");
require("./lib/jquery.form.js");
require("./lib/jquery.formparams.js");
// SUPPORT
require("./lib/datejs.js");
// Yurak Sisa Dream Libraries

require("./lib/YSDEventTarget.js");
require("./lib/YSDDataAdapter.js");
require("./lib/YSDAbstractDataSource.js");
require("./lib/YSDListSelectorModel.js");
require("./lib/YSDSelectSelectorController.js");
require("./lib/YSDSelectSelectorView.js");
require("./lib/ysdtemplate.js");
require("./lib/YSDRemoteDataSource.js");
require("./lib/YSDSelectSelector.js");
// Project libraries
require("./lib/commonServices.js");

// Page index JS
$(document).ready(function() {
  if ($("body").hasClass("index")) {
    require("./index.js");
  }
});

// Page choose_product JS
$(document).ready(function() {
  if ($("body").hasClass("choose_product")) {
    require("./choose_product.js");
  }
});

// Page complete JS
$(document).ready(function() {
  if ($("body.complete").length > 0) {
    require("./complete.js");
  }
});

// Page summary JS
$(document).ready(function() {
  if ($("body.summary").length > 0) {
    require("./summary.js");
  }
});

// Steps
$(document).ready(function() {
  $(".step").each(function(index, element) {
    //element == this
    $(element)
      .not(".active")
      .addClass("done");
    $(".done").html('<i class="fa fa-check" aria-hidden="true"></i>');
    if ($(this).is(".active")) {
      return false;
    }
  });
});
