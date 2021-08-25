function bluee() {
	document.body.style.removeProperty("background-color")
	console.log("color");
	document.body.style.backgroundColor = "cadetblue"
	document.body.style.color = "white"
	document.getElementById("ptext").style.color = "white"
	document.getElementById("ptext").style.backgroundColor = "transparent"
}

function white() {
	document.body.style.removeProperty("background-color")
	document.body.style.backgroundColor = "transparent"
	document.body.style.color = "black"
	document.getElementById("ptext").style.color = "black"
}

function yellow() {
	document.body.style.removeProperty("background-color")
	document.body.style.backgroundColor = "yellow"
	document.body.style.color = "black"
	document.getElementById("ptext").style.color = "black"
}

function black() {
	document.body.style.removeProperty("background-color")
	document.body.style.backgroundColor = "#242B2E"
	document.body.style.color = "white"
	document.getElementById("ptext").style.color = "black"

}

function pink() {
	document.body.style.removeProperty("background-color")
	document.body.style.backgroundColor = "pink"
	document.body.style.color = "black"
	document.getElementById("ptext").style.color = "black"
	document.getElementById("ptext").style.backgroundColor = "transparent"
}

const color = document.getElementById("colorselect").value
console.log(color);