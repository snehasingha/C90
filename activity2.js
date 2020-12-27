
function back() {
window.location = "activity_1.html";
}

function getScore()
{
	score = localStorage.getItem("score");	/*Fetching the value by keyname score */
	document.getElementById("update").innerHTML = "<h1>Score: " + score +"</h1>";
}