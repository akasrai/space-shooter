/**
 * Main Game Cll
 */

"use strict";
let xCounter = 0;

let KEY_CODES = {
  	32: 'space',
 	37: 'left',
  	38: 'up',
  	39: 'right',
  	40: 'down',
}


let KEY_STATUS = {};

for (let code in KEY_CODES) {
  	KEY_STATUS[KEY_CODES[code]] = false;
  	// console.log(KEY_STATUS[KEY_CODES[code]]);
}


document.onkeydown = function(e) {
	// Firefox and opera use charCode instead of keyCode to
	// return which key was pressed.
  	let keyCode = (e.keyCode) ? e.keyCode : e.charCode;
	
	if (KEY_CODES[keyCode]) {
		
		e.preventDefault();
		KEY_STATUS[KEY_CODES[keyCode]] = true;
	}
}


document.onkeyup = function(e) {
  	let keyCode = (e.keyCode) ? e.keyCode : e.charCode;
	
	if (KEY_CODES[keyCode]) {
		e.preventDefault();
		KEY_STATUS[KEY_CODES[keyCode]] = false;
	}
}


//////////////////////////- LOADING BULLET IMAGE -////////////////////////////////
let bulletImageLoaded = false;

let $bulletImage = new Image();
	$bulletImage.src = "images/bullet2.png";

	if(!bulletImageLoaded){
					
		$bulletImage.onload = function(){

		bulletImageLoaded = true;
      
		};
			
	}


//////////////////////////////- GAME OJECT -//////////////////////////////////////////
let $container = document.getElementById("container");

let start = new Game({

 	width	: 1380,
 	height	: 650,
 	$parent	: $container
});

start.startScreen(KEY_STATUS);


