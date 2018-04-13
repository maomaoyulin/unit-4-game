$(document).ready(function() {
    var main = $("body");
    var wins = 0;
    var losses = 0;
    var score = 0;

    var isCalculated = false;

    var targetNum = getRandomInt(19, 120);
    var redNum = getRandomInt(1, 12);
    var yellowNum = getRandomInt(1, 12);
    var blueNum = getRandomInt(1, 12);
    var greenNum = getRandomInt(1, 12);
    console.log("targetNum is: " + targetNum)
    console.log("red is: " + redNum)
    console.log("yellow is: " + yellowNum)
    console.log("blue is: " + blueNum)
    console.log("green is: " + greenNum)

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    function initialize() {
        score = 0;
        targetNum = getRandomInt(19, 120);
        $("#target").text(targetNum);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#score").text(score);

        $("#crystal-red").val(redNum);
        $("#crystal-yellow").val(yellowNum);
        $("#crystal-blue").val(blueNum);
        $("#crystal-green").val(greenNum);
    }

    initialize();
  
    $(".crystalBtns").on("click", ".crystal", function() {

        score = Number(score) + Number($(this).val());
        $("#score").text(score);
        console.log(score);

        if (score === targetNum) {
            alert("You Make It!");
            wins++;
            $("#wins").text(wins);
            initialize();

        } else if (score > targetNum) {
            alert("You Failed! Try Again!");
            losses++;
            $("#losses").text(losses);
            initialize();
        }
        // if (score === targetNum) {
        //     alert("You Make It!");
        //     wins++;
        //     $("#wins").text(wins);
        //     initialize();
        // }else if (score > targetNum) {
        //     alert("You Failed! Try Again!");
        //     losses++;
        //     $("#losses").text(losses);
        //     initialize();
        // }else {
        //     score = Number(score) + Number($(this).val());
        //     $("#score").text(score);
        //     console.log(score);
        // }

    })    

    
})