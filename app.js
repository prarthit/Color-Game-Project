var colors = [];
var numSquares = 6;
var pickedColorIndex = 0;
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var msg = document.querySelector("#message")

var squares = document.querySelectorAll(".square");

function initialize(){
	setUpModebuttons();
	setUpSquares();
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
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			setUpSquares();
		});		
	}
}

function setUpSquares(){
	colors = [];
	for(var i=0; i<squares.length; i++){
		if(i>=numSquares)
		{
			squares[i].style.display = "none";
		}
		else
		{
			squares[i].style.display = "block";
			colors.push(generateRandomColor());
			squares[i].style.background = colors[i];
			squares[i].addEventListener("click",function(){
				if(this.style.background === pickedColor)
					changecolor(pickedColor);
				else
					{
						this.style.background = "#232323";
						msg.textContent = "Try Again";
					}
			});
		}
	};
	selectSolution();
}

function changecolor(color){
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.background = color;
	}
	(document.querySelector("h1")).style.background = color;
	msg.textContent = "Correct!";
	document.querySelector("#reset").textContent = "Play Again?";
}

function selectSolution(){
	pickedColorIndex = Math.floor((Math.random())*numSquares);
	pickedColor = colors[pickedColorIndex];
	colorDisplay.textContent = pickedColor;
}

function generateRandomColor(){
	var r = Math.floor((Math.random())*255);
	var g = Math.floor((Math.random())*255);
	var b = Math.floor((Math.random())*255);
	return ("rgb("+r+", "+g+", "+b+")");
}

