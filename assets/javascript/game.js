
$(document).ready(function () {

    var guess = Math.floor(Math.random() * (120 - 20 + 1)) + 19;
    var collected = "0";
    var won = "0";
    var lost = "0";
    var min = 1;
    var max = 19;

    $('.guess').text("Try to collect " + guess + " crystals");

    function rando() {
        return Math.floor(Math.random() * (max - min + 1)) + min; 
        }

    function rando2(){
        guess = Math.floor(Math.random() * (120 - 20 + 1)) + 19;
        }
        
    $( "img" ).val( rando );

    $( '#c1' ).click(function() {
        var text = $( this ).text();
        console.log($('#c1').val());
    });

    $( '#c2' ).click(function() {
        var text = $( this ).text();
        console.log($('#c2').val());
    });

    $( '#c3' ).click(function() {
        var text = $( this ).text();
        console.log($('#c3').val());
    });

    $( '#c4' ).click(function() {
        var text = $( this ).text();
        console.log($('#c4').val());
    });

    $('img').click(function(){
        collected = Number(collected) + Number($(this).val());
        $('.total').text("Total collected: " + collected);


if (collected == guess) {
      won++;
      collected = "0";
      alert("lucky guess...");
      $('.wins').text("Wins: " + won); 
      $( "img" ).val( rando ); 
      $('.guess').val(rando2);
      guess = Math.floor(Math.random() * (120 - 20 + 1)) + 19;
      $('.guess').text("Try to collect " + guess + " crystals");
    }
    else if (collected > guess) {
      lost++;   
      collected = "0";
      alert("LOSER!");
      $('.losses').text("Losses: " + lost); 
      $( "img" ).val( rando );
      $('.guess').val(rando2);
      guess = Math.floor(Math.random() * (120 - 20 + 1)) + 19;
      $('.guess').text("Try to collect " + guess + " crystals");
    }   
});

});