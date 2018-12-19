// User clicks the item
document.addEventListener("DOMContentLoaded", function(){
  var square = document.getElementsByTagName("td");
  var cross = true;
  var turn = document.body.children[1];
  var reset = document.getElementById("reset");

  for (var i = 0; i < square.length; i++) {
    // console.log(i);
    square[i].setAttribute("class", i);
    square[i].addEventListener("click", function(event){
      // console.log(i);
      if (this.className == "X" || this.className == "O") {
        console.log("Clicked");
      } else if (cross == true) {
          this.setAttribute("class", "X");
          this.innerHTML = "X";
          cross = false;
          turn.innerHTML = "It is O's turn";
      } else {
          this.setAttribute("class", "O");
          this.innerHTML = "O";
          cross = true;
          turn.innerHTML = "It is X's turn";
      }
      checkWinnerX();
      checkWinnerO();
    });

  }

  reset.addEventListener("click", function(event){
    window.location.reload(false);
  });

  function checkWinnerX(){
    if (square[0].className == "X" && square[1].className == "X" & square[2].className == "X") {
      console.log("X wins");
    } else if (square[3].className == "X" && square[4].className == "X" & square[5].className == "X") {
      console.log("X wins");
    } else if (square[6].className == "X" && square[7].className == "X" & square[8].className == "X") {
      console.log("X wins");
    } else if (square[0].className == "X" && square[3].className == "X" & square[6].className == "X") {
      console.log("X wins");
    } else if (square[1].className == "X" && square[4].className == "X" & square[7].className == "X") {
      console.log("X wins");
    } else if (square[2].className == "X" && square[5].className == "X" & square[8].className == "X") {
      console.log("X wins");
    } else if (square[0].className == "X" && square[4].className == "X" & square[8].className == "X") {
      console.log("X wins");
    } else if (square[2].className == "X" && square[4].className == "X" & square[6].className == "X") {
      console.log("X wins");
    }
  }

  function checkWinnerO(){
    if (square[0].className == "O" && square[1].className == "O" & square[2].className == "O") {
      console.log("O wins");
    } else if (square[3].className == "O" && square[4].className == "O" & square[5].className == "O") {
      console.log("O wins");
    } else if (square[6].className == "O" && square[7].className == "O" & square[8].className == "O") {
      console.log("O wins");
    } else if (square[0].className == "O" && square[3].className == "O" & square[6].className == "O") {
      console.log("O wins");
    } else if (square[1].className == "O" && square[4].className == "O" & square[7].className == "O") {
      console.log("O wins");
    } else if (square[2].className == "O" && square[5].className == "O" & square[8].className == "O") {
      console.log("O wins");
    } else if (square[0].className == "O" && square[4].className == "O" & square[8].className == "O") {
      console.log("O wins");
    } else if (square[2].className == "O" && square[4].className == "O" & square[6].className == "O") {
      console.log("O wins");
    }
  }

});
