var colors = [];
var pickedColorIndex = 0;
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");

var squares = document.querySelectorAll(".square");

function initialize(){
	setUpSquares();
	selectSolution();
}

function setUpSquares(){
	for(var i=0; i<squares.length; i++){
		colors.push(generateRandomColor());
		squares[i].style.background = colors[i];
		squares[i].addEventListener("click",function(){
			if(this.style.background === pickedColor)
				this.style.background = "#232323";
		});
	};
}

function selectSolution(){
	pickedColorIndex = Math.floor((Math.random())*6);
	pickedColor = colors[pickedColorIndex];
	colorDisplay.textContent = pickedColor;
}

function generateRandomColor(){
	var r = Math.floor((Math.random())*255);
	var g = Math.floor((Math.random())*255);
	var b = Math.floor((Math.random())*255);
	return ("rgb("+r+", "+g+", "+b+")");
}

