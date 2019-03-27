$(document).ready(function() {
  // btn1 //
  let recMax = $("#reCtangle").height();

  $("#btn1").click(function() {
    if (recMax !== 100) {
      $("#reCtangle").css("height", "+=10");
      recMax += 10;
    } else {
      $("#reCtangle").css("height", "20px");
    }
  });

  // btn2 //

  $("#btn2").click(function() {
    $("#reCtangle").css("border", "solid 2px green");
  });

  // btn3 //

  $("#btn3").click(function() {
    $("#reCtangle").css("border", "solid 1px black");
  });

  // btn4 //

  $("#btn4").click(function() {
    $("#reCtangle").hide();
  });

  // btn5 //

  $("#btn5").click(function() {
    $("#reCtangle").show();
  });
});
