$(document).ready(function() {
      
var valueMin = 1
var valueMax = 19  
var toGuess = Math.floor(Math.random() * (120 - 20 + 1)) + 19;
var collected = 0;

var crystalValue1 = Math.floor(Math.random() * (valueMax - valueMin + 1)) + valueMin;
var crystalValue2 = Math.floor(Math.random() * (valueMax - valueMin + 1)) + valueMin;
var crystalValue3 = Math.floor(Math.random() * (valueMax - valueMin + 1)) + valueMin;
var crystalValue4 = Math.floor(Math.random() * (valueMax - valueMin + 1)) + valueMin;

    $("#crystal1").click(function(){
      alert("This crystal is worth " + crystalValue1);
      collected = Number(collected) + Number(crystalValue1);
      console.log(collected)
      document.getElementById('collected').innerHTML = collected;
      if (collected === toGuess) {
            wins++;
            alert("YOU WIN")
            }
            if (collected > toGuess) {
            alert("LOSER")
            losses++;
            }

      document.getElementById('wins').innerHTML = wins;
      document.getElementById('losses').innerHTML = losses;
    });

    $("#crystal2").click(function(){
      alert("This crystal is worth " + crystalValue2);
      collected = Number(collected) + Number(crystalValue2);
      console.log(collected)
      document.getElementById('collected').innerHTML = collected;
      if (collected === toGuess) {
            wins++;
            alert("YOU WIN")
            }
            if (collected > toGuess) {
            alert("LOSER")
            losses++;
            }

      document.getElementById('wins').innerHTML = wins;
      document.getElementById('losses').innerHTML = losses;
    });

    $("#crystal3").click(function(){
      alert("This crystal is worth " + crystalValue3);
      collected = Number(collected) + Number(crystalValue3);
      console.log(collected)
      document.getElementById('collected').innerHTML = collected;
      if (collected === toGuess) {
            wins++;
            alert("YOU WIN")
            }
            if (collected > toGuess) {
            alert("LOSER")
            losses++;
            }

      document.getElementById('wins').innerHTML = wins;
      document.getElementById('losses').innerHTML = losses;
    });

    $("#crystal4").click(function(){
      alert("This crystal is worth " + crystalValue4);
      collected = Number(collected) + Number(crystalValue4);
      console.log(collected)
      document.getElementById('collected').innerHTML = collected;
      if (collected === toGuess) {
            wins++;
            alert("YOU WIN")
            }
            if (collected > toGuess) {
            alert("LOSER")
            losses++;
            }

      document.getElementById('wins').innerHTML = wins;
      document.getElementById('losses').innerHTML = losses;
    });
  
    console.log(toGuess)

      document.getElementById("toGuess").innerHTML = toGuess;


      //on alert function re run vars
});