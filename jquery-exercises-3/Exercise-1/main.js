$(document).ready(function() {
  let count = 0;

  $("#click-me").click(function() {
    count++;
    $("#input").val(count);
  });
});
