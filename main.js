scoreP1 = 0;
scoreP2 = 0;

questionTurn = "player1";
answerTurn = "player2";

name1 = localStorage.getItem("player1");
name2 = localStorage.getItem("player2");

document.getElementById("playerDisplay1").innerHTML = "<h3>" + name1 + ": "; 
document.getElementById("playerDisplay2").innerHTML = "<h3>" + name2 + ": ";
document.getElementById("playerScore1").innerHTML = scoreP1;
document.getElementById("playerScore2").innerHTML = scoreP2;
document.getElementById("QuestionTurn").innerHTML = "Question Turn: " + name1;
document.getElementById("AnswerTurn").innerHTML = "Answer Turn: " + name2;

function sendBtn() {

    userInput1  = document.getElementById("wordInput1").value;
    userInput2  = document.getElementById("wordInput2").value;

    questionEnt = userInput1 + " × " + userInput2
    console.log(questionEnt);

    questionTag = "<h4 id='questionDisplay'> Q. " + questionEnt + "</h4>"
    inputTag = "<br>" + "<input type='text' id='answerInput' placeholder='Type here'>";
    btnTag = "<br> <br>" + "<button class='btn btn-info' onclick='checkWrd()'> Check </button>";
    outputTags = questionTag + inputTag + btnTag;

    document.getElementById("output").innerHTML = outputTags;
    document.getElementById("wordInput1").value = "";
    document.getElementById("wordInput2").value = "";

}