var color,result,winner,gameOver,gameDraw,count;
var box = document.querySelectorAll(".box");

var currentBox;
var selectedBox;
var score1 = 0;
var score2 = 0;
var message = document.querySelector(".message");
var btn1 = document.querySelector(".btn-1");
var btn2 = document.querySelector(".btn-2");
var btn1ScoreDisplay = document.querySelector(".btn-score-1");
var btn2ScoreDisplay = document.querySelector(".btn-score-2");
var resetBtn = document.querySelector(".reset-btn");

var tickSound = new Audio('sounds/click.mp3');
var winSound = new Audio('sounds/winSound.mp3');
var drawSound = new Audio('sounds/drawSound.mp3');
var wrongSound = new Audio('sounds/your-turn.mp3');

function init(){
 	result = false;
 	gameOver = false;
 	gameDraw = false;
 	winner = null;
 	count = 0;
 	color = "green";
	btn1.classList.add("selected-green");
	btn2.classList.remove("selected-red");
}

init();

for(var i = 0; i < box.length; i++){
	box[i].style.backgroundColor = '';
}

btn1.addEventListener("click",function(){
	if(count < 1){
		color = "green";
		btn1.classList.add("selected-green");
		btn2.classList.remove("selected-red");
		message.textContent = "Start Game!";
	}

	if(gameDraw === true){
		message.textContent = "Match Draw!";
		wrongSound.play();
	}

	if(result === true){
		wrongSound.play();
	}

	if(count > 0 && result === false && gameDraw === false){
		message.textContent = "Match is going on!";
		wrongSound.play();
	}
});

btn2.addEventListener("click",function(){
	if(count < 1){
		color = "red";
		btn2.classList.add("selected-red");
		btn1.classList.remove("selected-green");
		message.textContent = "Start Game!";
	}

	if(gameDraw === true){
		message.textContent = "Match Draw!";
		wrongSound.play();
	}

	if(result === true){
		wrongSound.play();
	}

	if(count > 0 && result === false && gameDraw === false){
		message.textContent = "Match is going on!";
		wrongSound.play();
	}
});

resetBtn.addEventListener("click",function(){
	reset();
});

for(let i = 0; i < box.length; i++){
	box[i].addEventListener("click",function(){
		if(result !== true && gameDraw !== true && checkValid(this)){
			count++;
			if(box[i+35] !== undefined && box[i+35].style.backgroundColor == ''){
				box[i+35].style.backgroundColor = color;
				tickSound.play();

				currentBox = box[i+35].id;
				findPosition(currentBox);
				selectedBox = Obj();

				findRight(selectedBox.row, selectedBox.column);
				findUpRight(selectedBox.row, selectedBox.column);
				findUpLeft(selectedBox.row, selectedBox.column);

				if(result !== true){
					checkDownSide(selectedBox.row, selectedBox.column);
				}
				if(result !== true){
					checkLeftSide(rightObj().rowR, rightObj().columnR);	
				}
				if(result !== true){
					checkDownLeftDiagonal(upRightObj().rowUR, upRightObj().columnUR);
				}
				if(result !== true){
					checkDownRightDiagonal(upLeftObj().rowUL, upLeftObj().columnUL);
				}

				checkDraw(count);
				switchColor();
			}
			else if(box[i+28] !== undefined && box[i+28].style.backgroundColor === ''){
				box[i+28].style.backgroundColor = color;
				tickSound.play();
				
				currentBox = box[i+28].id;
				findPosition(currentBox);
				selectedBox = Obj();

				findRight(selectedBox.row, selectedBox.column);
				findUpRight(selectedBox.row, selectedBox.column);
				findUpLeft(selectedBox.row, selectedBox.column);

				if(result !== true){
					checkDownSide(selectedBox.row, selectedBox.column);
				}
				if(result !== true){
					checkLeftSide(rightObj().rowR, rightObj().columnR);	
				}
				if(result !== true){
					checkDownLeftDiagonal(upRightObj().rowUR, upRightObj().columnUR);
				}
				if(result !== true){
					checkDownRightDiagonal(upLeftObj().rowUL, upLeftObj().columnUL);
				}

				checkDraw(count);
				switchColor();
			}
			else if(box[i+21] !== undefined && box[i+21].style.backgroundColor === ''){
				box[i+21].style.backgroundColor = color;
				tickSound.play();
				
				currentBox = box[i+21].id;
				findPosition(currentBox);
				selectedBox = Obj();

				findRight(selectedBox.row, selectedBox.column);
				findUpRight(selectedBox.row, selectedBox.column);
				findUpLeft(selectedBox.row, selectedBox.column);

				if(result !== true){
					checkDownSide(selectedBox.row, selectedBox.column);
				}
				if(result !== true){
					checkLeftSide(rightObj().rowR, rightObj().columnR);	
				}
				if(result !== true){
					checkDownLeftDiagonal(upRightObj().rowUR, upRightObj().columnUR);
				}
				if(result !== true){
					checkDownRightDiagonal(upLeftObj().rowUL, upLeftObj().columnUL);
				}

				checkDraw(count);
				switchColor();
			}
			else if(box[i+14] !== undefined && box[i+14].style.backgroundColor === ''){
				box[i+14].style.backgroundColor = color;
				tickSound.play();
				
				currentBox = box[i+14].id;
				findPosition(currentBox);
				selectedBox = Obj();

				findRight(selectedBox.row, selectedBox.column);
				findUpRight(selectedBox.row, selectedBox.column);
				findUpLeft(selectedBox.row, selectedBox.column);

				if(result !== true){
					checkDownSide(selectedBox.row, selectedBox.column);
				}
				if(result !== true){
					checkLeftSide(rightObj().rowR, rightObj().columnR);	
				}
				if(result !== true){
					checkDownLeftDiagonal(upRightObj().rowUR, upRightObj().columnUR);
				}
				if(result !== true){
					checkDownRightDiagonal(upLeftObj().rowUL, upLeftObj().columnUL);
				}

				checkDraw(count);
				switchColor();
			}
			else if(box[i+7] !== undefined && box[i+7].style.backgroundColor === ''){
				box[i+7].style.backgroundColor = color;
				tickSound.play();
				
				currentBox = box[i+7].id;
				findPosition(currentBox);
				selectedBox = Obj();

				findRight(selectedBox.row, selectedBox.column);
				findUpRight(selectedBox.row, selectedBox.column);
				findUpLeft(selectedBox.row, selectedBox.column);

				if(result !== true){
					checkDownSide(selectedBox.row, selectedBox.column);
				}
				if(result !== true){
					checkLeftSide(rightObj().rowR, rightObj().columnR);	
				}
				if(result !== true){
					checkDownLeftDiagonal(upRightObj().rowUR, upRightObj().columnUR);
				}
				if(result !== true){
					checkDownRightDiagonal(upLeftObj().rowUL, upLeftObj().columnUL);
				}

				checkDraw(count);
				switchColor();
			}
			else{
				box[i].style.backgroundColor = color;
				tickSound.play();
				
				currentBox = box[i].id;
				findPosition(currentBox);
				selectedBox = Obj();

				findRight(selectedBox.row, selectedBox.column);
				findUpRight(selectedBox.row, selectedBox.column);
				findUpLeft(selectedBox.row, selectedBox.column);

				if(result !== true){
					checkDownSide(selectedBox.row, selectedBox.column);
				}
				if(result !== true){
					checkLeftSide(rightObj().rowR, rightObj().columnR);	
				}
				if(result !== true){
					checkDownLeftDiagonal(upRightObj().rowUR, upRightObj().columnUR);
				}
				if(result !== true){
					checkDownRightDiagonal(upLeftObj().rowUL, upLeftObj().columnUL);
				}

				checkDraw(count);
				switchColor();
			}
		}
		else if(result === true){
			message.textContent = color.toUpperCase() + " already won!";
			wrongSound.play();
		}
		else if(gameDraw === true){
			wrongSound.play();
		}
	});
}


function findPosition(str){
	var processed = str.split("b");
	var proArr = processed[1].split("-");
	var i = Number(proArr[0]);
	var j = Number(proArr[1]);
	Obj = function(){
		var row = i;
		var column = j;
		return{
			row : row,
			column : column
		};
	};
}

function switchColor(){
	if(color == "green"){
		if(result !== true && gameDraw !== true){
			color = "red";
			message.textContent = "It's " + color.toUpperCase() + " 's Turn";
			message.style.fontSize = "15px";
			btn1.classList.remove("selected-green");
			btn2.classList.add("selected-red");
		}
	}
	else if(color == "red"){
		if(result !== true && gameDraw !== true){
			color = "green";
			message.textContent = "It's " + color.toUpperCase() + " 's Turn";
			message.style.fontSize = "15px";
			btn2.classList.remove("selected-red");
			btn1.classList.add("selected-green");
		}
	}
}

function getColor(i,j){
	if(i < 6 || j < 7){
		return document.querySelector("#b" + i + "-" + j).style.backgroundColor;
	}
}

function findRight(a, b){
	if(b < 6){
		while(getColor(a,b) === getColor(a,b+1)){
			a = a;
			b = b+1;
			if(b < 6){
				findRight(a, b);
			}
			else{
				break;
			}
		}
	}
	else{
		b = 6;
	}

	rightObj = function(){
		var rowR = a;
		var columnR = b;

		return{
			rowR : rowR,
			columnR : columnR
		};
	};
}

function findUpRight(a, b){
	if(a > 0 && b < 6){
		while(getColor(a,b) === getColor(a-1,b+1)){
			a = a-1;
			b = b+1;
			if(a > 0 && b < 6){
				findUpRight(a, b);
			}
			else{
				break;
			}
		}
	}
	if(a == 0){
		a = 0;
	}
	if(b == 6){
		b = 6;
	}
	
	upRightObj = function(){
		var rowUR = a;
		var columnUR = b;

		return{
			rowUR : rowUR,
			columnUR : columnUR
		};
	};
}

function findUpLeft(a, b){
	if(a > 0 && b > 0){
		while(getColor(a,b) === getColor(a-1,b-1)){
			a = a-1;
			b = b-1;
			if(a > 0 && b > 0){
				findUpLeft(a, b);
			}
			else{
				break;
			}
		}
	}
	if(a == 0){
		a = 0;
	}
	if(b == 0){
		b = 0;
	}
	
	upLeftObj = function(){
		var rowUL = a;
		var columnUL = b;

		return{
			rowUL : rowUL,
			columnUL : columnUL
		};
	};
}


function checkLeftSide(a, b){
	if(b > 2){
		if(getColor(a,b) !== "" &&
			getColor(a,b) === getColor(a,b-1) &&
			getColor(a,b) === getColor(a,b-2) && 
			getColor(a,b) === getColor(a,b-3)
			){

			markWinner(a,b);
			markWinner(a,b-1);
			markWinner(a,b-2);
			markWinner(a,b-3);

			result = true;
			winner = color;
			message.textContent = "Congrats "+ winner.toUpperCase() + " you won!";
			message.style.fontSize = "15px";
			winnerScore(winner);
		}
		return result;
	}
}

function checkDownSide(a, b){
	if(a < 3){
		if(getColor(a,b) !== "" &&
			getColor(a,b) === getColor(a+1,b) &&
			getColor(a,b) === getColor(a+2,b) &&
			getColor(a,b) === getColor(a+3,b)
			){

			markWinner(a,b);
			markWinner(a+1,b);
			markWinner(a+2,b);
			markWinner(a+3,b);

			result = true;
			winner = color;
			message.textContent = "Congrats "+ winner.toUpperCase() + " you won!";
			message.style.fontSize = "15px";
			winnerScore(winner);
		}
		return result;
	}
}

function checkDownRightDiagonal(a, b){
	if(a < 3 && b < 4){
		if(getColor(a,b) !== "" &&
			getColor(a,b) === getColor(a+1,b+1) &&
			getColor(a,b) === getColor(a+2,b+2) &&
			getColor(a,b) === getColor(a+3,b+3)
			){

			markWinner(a,b);
			markWinner(a+1,b+1);
			markWinner(a+2,b+2);
			markWinner(a+3,b+3);

			result = true;
			winner = color;
			message.textContent = "Congrats "+ winner.toUpperCase() + " you won!";
			message.style.fontSize = "15px";
			winnerScore(winner);
		}
		return result;
	}
}

function checkDownLeftDiagonal(a, b){
	if(a < 3 && b > 2){
		if(getColor(a,b) !== "" &&
			getColor(a,b) === getColor(a+1,b-1) &&
			getColor(a,b) === getColor(a+2,b-2) && 
			getColor(a,b) === getColor(a+3,b-3)
			){

			markWinner(a,b);
			markWinner(a+1,b-1);
			markWinner(a+2,b-2);
			markWinner(a+3,b-3);

			result = true;
			winner = color;
			message.textContent = "Congrats "+ winner.toUpperCase() + " you won!";
			message.style.fontSize = "15px";
			winnerScore(winner);
		}
		return result;
	}
}

function checkDraw(i){
	if(i == 42 && result !== true){
		gameDraw = true;
		message.textContent = "Match Draw!";
		message.style.fontSize = "15px";
		btn1.classList.remove("selected-green");
		btn2.classList.remove("selected-red");
		drawSound.play();
	}
	else{
		gameDraw = false;
	}

	return gameDraw;
}

function winnerScore(winner){
	if(winner === "green"){
		score1++;
		btn1ScoreDisplay.textContent = score1;
		winSound.play();
	}

	if(winner === "red"){
		score2++;
		btn2ScoreDisplay.textContent = score2;
		winSound.play();
	}	
}

function checkValid(x){
	if(x.style.backgroundColor === "green" || x.style.backgroundColor === "red"){
		message.textContent = "Invalid! Try An Empty Circle";
		message.style.fontSize = "15px";
		wrongSound.play();
		return false;
	}
	else{
		return true;
	}
}

function markWinner(a, b){
	for(var i = 0; i < 6; i++){
		for(var j = 0; j < 7; j++){
			if(i === a && j === b){
				mark = document.querySelector("#b"+a+"-"+b);
				mark.classList.add("marker");
			}
		}
	}
}

function reset(){
	for(var i = 0; i < box.length; i++){
		box[i].style.backgroundColor = '';
		box[i].classList.remove("marker");
	}
	message.textContent = "Start Again! [GREEN by default]";
	message.style.fontSize = "15px";
	init();
}