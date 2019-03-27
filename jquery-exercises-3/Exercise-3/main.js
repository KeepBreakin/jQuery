$(document).ready(function() {
  // Generate random number //

  let rNumber = 1 + Math.floor(Math.random() * 100);
  console.log(rNumber);

  // Function //

  $("#btn").click(function() {
    let uNumber = parseInt(document.getElementById("input").value);

    if (uNumber < rNumber) {
      alert("more");
    } else if (uNumber > rNumber) {
      alert("less");
    }
    if (uNumber === rNumber) {
      alert("right");
    }
  });
});

// put parseInt before var if u want to use === between two var's. === doesnt work without //
