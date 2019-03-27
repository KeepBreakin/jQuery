// Write your solution here
$("#green").hover(
  function() {
    // over
    $("#text").css("color", "green");
  },
  function() {
    // out
    $("#text").css("color", "black");
  }
);

$("#red").hover(
  function() {
    // over
    $("#text").css("color", "red");
  },
  function() {
    // out
    $("#text").css("color", "black");
  }
);

$("#blue").hover(
  function() {
    // over
    $("#text").css("color", "blue");
  },
  function() {
    // out
    $("#text").css("color", "black");
  }
);
