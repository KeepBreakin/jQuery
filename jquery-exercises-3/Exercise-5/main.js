$(document).keydown(function(e) {
  switch (e.which) {
    case 37:
      $("#square")
        .finish()
        .animate({
          left: "-=10"
        });
      break;
    case 38:
      $("#square")
        .finish()
        .animate({
          top: "-=10"
        });
      break;
    case 39:
      $("#square")
        .finish()
        .animate({
          left: "+=10"
        });
      break;
    case 40:
      $("#square")
        .finish()
        .animate({
          top: "+=10"
        });
      break;
  }
});
