var colors = [];
var pickedColorIndex = 0;
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");

var squares = document.querySelectorAll(".square");

function initialize(){
	setUpSquares();
	setUpModebuttons();
	selectSolution();
}

function setUpModebuttons(){
	var reset = document.querySelector("#reset");
	reset.addEventListener("click",setUpSquares);
	var modes = document.querySelectorAll(".mode");
	for(var i=0; i<modes.length; i++){
		modes[i].addEventListener("click",function(){
			modes[0].classList.remove("selected");
			modes[1].classList.remove("selected");
			this.classList.add("selected");
		});		
	}
}

function setUpSquares(){
	colors = [];
	for(var i=0; i<squares.length; i++){
		colors.push(generateRandomColor());
		squares[i].style.background = colors[i];
		squares[i].addEventListener("click",function(){
			if(this.style.background === pickedColor)
				changecolor(pickedColor);
			else
				this.style.background = "#232323";
		});
	};
}

function changecolor(color){
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.background = color;
	}
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

