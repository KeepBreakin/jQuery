$(document).ready(function() {
  // Variables needed
  let result = $("#input");
  let rock = $("#r");
  let paper = $("#p");
  let scissor = $("#s");

  // Create function
  // Put choices into array.
  // Generate randomnumber (0,1,2)
  // Return a choice in random order

  function getComputerChoice() {
    let choices = ["r", "p", "s"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

  // Create functions with a stringvalue -> show in "input" element.
  // We'll use these function in function "GAME"

  function win() {
    $("#input").val("U WIN");
  }
  function lose() {
    $("#input").val("U LOSE");
  }
  function draw() {
    $("#input").val("IT'S A DRAW");
  }

  // Create function game with userChoice as argument
  // We create variable and = to the result of the random number that the function getComputerChoice has produced. Example: "p","s","r"

  // switch with case where we say, Example: userChoice="r"(ROCK) beats computerChoice"s"(SCISSOR)
  // IN CASE of this then we execute function WIN -> "USER WINS"

  function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case "rs":
      case "sp":
      case "pr":
        win();
        break;
      case "rp":
      case "ps":
      case "sr":
        lose();
        break;
      case "pp":
      case "ss":
      case "rr":
        draw();
        break;
    }
  }

  // Function where we click on a selector, Example: click on "#r" icon/image

  // Then "#r" wille be selected as USERCHOICE and function game will execute

  function main() {
    $("#r").click(function() {
      game("r");
    });
    $("#p").click(function() {
      game("p");
    });
    $("#s").click(function() {
      game("s");
    });
  }
  main();
});
