var timeRemaining = 30;
var intervalId;
var question1 = $('<div class="question">Choose the correct answer: <div><input type="radio" name="q1" value="correct">Correct<input type="radio" name="q1" value="incorrect">Incorrect<input type="radio" name="q1" value="incorrect">Incorrect<input type="radio" name="q1" value="incorrect">Incorrect</div>');
var question2 = $('<div class="question">Choose the correct answer: <div><input type="radio" name="q2" value="incorrect">Incorrect<input type="radio" name="q2" value="incorrect">Incorrect<input type="radio" name="q2" value="correct">Correct<input type="radio" name="q2" value="incorrect">Incorrect</div>');
var question3 = $('<div class="question">Choose the correct answer: <div><input type="radio" name="q3" value="incorrect">Incorrect<input type="radio" name="q3" value="correct">Correct<input type="radio" name="q3" value="incorrect">Incorrect<input type="radio" name="q3" value="incorrect">Incorrect</div>');
var question4 = $('<div class="question">Choose the correct answer: <div><input type="radio" name="q4" value="incorrect">Incorrect<input type="radio" name="q4" value="incorrect">Incorrect<input type="radio" name="q4" value="correct">Correct<input type="radio" name="q4" value="incorrect">Incorrect</div>');
var question5 = $('<div class="question">Choose the correct answer: <div><input type="radio" name="q5" value="incorrect">Incorrect<input type="radio" name="q5" value="incorrect">Incorrect<input type="radio" name="q5" value="incorrect">Incorrect<input type="radio" name="q5" value="correct">Correct</div>');
var question6 = $('<div class="question">Choose the correct answer: <div><input type="radio" name="q6" value="correct">Correct<input type="radio" name="q6" value="incorrect">Incorrect<input type="radio" name="q6" value="incorrect">Incorrect<input type="radio" name="q6" value="incorrect">Incorrect</div>');
var question7 = $('<div class="question">Choose the correct answer: <div><input type="radio" name="q7" value="correct">Correct<input type="radio" name="q7" value="incorrect">Incorrect<input type="radio" name="q7" value="incorrect">Incorrect<input type="radio" name="q7" value="incorrect">Incorrect</div>');
var question8 = $('<div class="question">Choose the correct answer: <div><input type="radio" name="q8" value="correct">Correct<input type="radio" name="q8" value="incorrect">Incorrect<input type="radio" name="q8" value="incorrect">Incorrect<input type="radio" name="q8" value="incorrect">Incorrect</div>');
var question9 = $('<div class="question">Choose the correct answer: <div><input type="radio" name="q9" value="correct">Correct<input type="radio" name="q9" value="incorrect">Incorrect<input type="radio" name="q9" value="incorrect">Incorrect<input type="radio" name="q9" value="incorrect">Incorrect</div>');
var question10 = $('<div class="question">Choose the correct answer: <div><input type="radio" name="q10" value="correct">Correct<input type="radio" name="q10" value="incorrect">Incorrect<input type="radio" name="q10" value="incorrect">Incorrect<input type="radio" name="q10" value="incorrect">Incorrect</div>');
var finishBtn = $('<button id="finishBtn">Finish</button>');
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var running = false;

function count() {
    timeRemaining--;
    $("#timeRemaining").text(timeRemaining);
    if (timeRemaining <= 0){
        clearInterval(intervalId);
        gameOver();
    }
}

function gameOver(){

    for (i=10; i>0; i--){
        var q = $("[name=q" + i + "]:checked").val();
        switch(q){
            case "correct":
                correct++;
                break;
            case "incorrect":
                incorrect++;
                break;
            default:
                unanswered++;
        }
    }
    var correctDiv = $("<div>You got " + correct + " correct</div>");
    var incorrectDiv = $("<div>You got " + incorrect + " incorrect</div>");
    var unansweredDiv = $("<div>You didn't answer " + unanswered + " questions</div>");

$("body").empty();
$("body").append("<br><br><br><br><br><br>");
$("body").append(correctDiv);
$("body").append(incorrectDiv);
$("body").append(unansweredDiv);


}

$(document).ready(function () {

    $("#timeRemaining").text(timeRemaining);

    $("#startBtn").on("click", function () {

        if (running === false){
        intervalId = setInterval(count, 1000);
        $("#questionContainer").append(question1);
        $("#questionContainer").append(question2);
        $("#questionContainer").append(question3);
        $("#questionContainer").append(question4);
        $("#questionContainer").append(question5);
        $("#questionContainer").append(question6);
        $("#questionContainer").append(question7);
        $("#questionContainer").append(question8);
        $("#questionContainer").append(question9);
        $("#questionContainer").append(question10);
        $("#questionContainer").append(finishBtn);
        running = true;
        }
    });

    $(finishBtn).on("click", function () {
        clearInterval(intervalId);
        gameOver();
    });

});