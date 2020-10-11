
var x = 0;
var counts=0;

$(document).ready(function(){
    "use strict";
  $(".boundary").mouseover(function(event){
    $(".boundary").addClass("youlose");
    // ("you lost! :(")
     $("#status").text("You lose!");
     counts++;
});
 $("#end").mouseover(function(event){
    // ("you win! :]");
    if(x>0 && counts==0){
        $("#status").text("You won!");
    }

    else{
        $("#status").text("You lose!");
        counts++;
    }

 });

 $("#start").mouseover(function(){
    $(".boundary").css('background-color','#eeeeee');
    location.reload();
    
});
$("#maze").mouseenter(function(){
    x++;
  });

$("#maze").mouseleave(function(){
    if(x>0){
        counts++;
    }
  });

})