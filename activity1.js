
score = 0;

function updateScore()
{
	score = score + 1;
	document.getElementById("score").innerHTML = "Score: " + score;
}

function saveScore()
{
	localStorage.setItem("score", score); /*Calling by the keyname score(similar to calling id from HTML)
	and adding the value of variable score with the keyname score*/
}

function nextPage() {
window.location = "activity_2.html";/*Page redirection*//*This html page will be discussed in next class*/
}
