$(document).ready(function() {
  /* On click: Enlarge the font (120%) */
  $(".one").click(function() {
    $("#content").css("font-size", "125%");
  });

  /* On click: Decrease the font size (80%) */

  $(".two").click(function() {
    $("#content").css("font-size", "80%");
  });

  /* On click: Bold or normalize the green words */

  $(".three").on("click", function() {
    $(".green").css("font-weight", "bold");
  });

  /* On click: Replace the logo with another image */

  $(".four").hover(
    function() {
      // over
      $("img").attr("src", "images/koala.jpg");
    },
    function() {
      // out
      $("img").attr("src", "images/jquery-logo.png");
    }
  );
  /* On hover: Display the URL of links in a tooltip when hovering over links */
  $("a").hover(function(event) {
    // over
    $(this)
      .css("cursor", "pointer")
      .attr("title", event.target.href);
  });

  /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */

  $("#instructions li:last-child").click(function() {
    $("h2:first").prepend("Chapter 1: ");
    $("h2:nth-of-type(2)").prepend("Chapter 2: ");
  });
});
