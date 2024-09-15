function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.left = 0;
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.left = "-100%";
}

(function ($) {
  // :: Accordian Active Code
  (function () {
    var dd = $("dd");
    
    // Initially hide all dd elements
    dd.hide();

    // Set the first dt and dd as active and visible
    $("dt:first").addClass("active");
    $("dd:first").show();

    // Click event to toggle individual sections
    $("dl").on("click", "dt", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").next("dd").slideUp(500);
      } else {
        $(this).addClass("active").next("dd").slideDown(500);
      }
    });
    
    // Optional: Button to show or hide all dd elements
    $("#toggle-all").on("click", function () {
      if (dd.is(":visible")) {
        dd.slideUp(500);
        $("dt").removeClass("active");
      } else {
        dd.slideDown(500);
        $("dt").addClass("active");
      }
    });
  })();
})(jQuery);
