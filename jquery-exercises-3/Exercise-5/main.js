$(document).ready(function() {
  let count = 0;
  $("#btnOne").click(function() {
    count++;
    $("#input").val(count);
  });

  $("#btnTwo").click(function() {
    count--;
    $("#input").val(count);
  });
});
