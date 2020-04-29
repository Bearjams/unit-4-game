$(document).ready(function() {

var random = Math.floor(Math.random() * 101 + 19)

$("#random-number").text(random)

var num1 = Math.floor(Math.random() * 11 + 1)
var num2 = Math.floor(Math.random() * 11 + 1)
var num3 = Math.floor(Math.random() * 11 + 1)
var num4 = Math.floor(Math.random() * 11 + 1)

var userTotal = 0;
var wins = 0;
var losses = 0;

$("#number-wins").text(wins);
$("#number-losses").text(losses);

function reset(){
    random = Math.floor(Math.random() * 101 + 19);
    $("#random-number").text(random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $("#final-total").text("Your Total Score Is: " + userTotal); 

} 

function win(){
    alert("You Won!");
    wins++;
    $("#number-wins").text(wins);
    reset()
}

function lose(){
    alert("You Lose!");
    losses++;
    $("#number-losses").text(losses)
    reset()
}

$("#diamond").on("click", function(){
    userTotal = userTotal + num1;
    console.log("user total: " + userTotal);

    $("#final-total").text(userTotal);

    if(userTotal == random){
        win()
    }
    else if(userTotal > random){
        lose()
    }
});

$("#sapphire").on("click", function(){
    userTotal = userTotal + num2;
    console.log("user total: " + userTotal);

    $("#final-total").text(userTotal);

    if(userTotal == random){
        win()
    }
    else if(userTotal > random){
        lose()
    }
});

$("#emerald").on("click", function(){
    userTotal = userTotal + num3;
    console.log("user total: " + userTotal);

    $("#final-total").text(userTotal);

    if(userTotal == random){
        win()
    }
    else if(userTotal > random){
        lose()
    }
});

$("#ruby").on("click", function(){
    userTotal = userTotal + num4;
    console.log("user total: " + userTotal);

    $("#final-total").text(userTotal);

    if(userTotal == random){
        win()
    }
    else if(userTotal > random){
        lose()
    }
});






});