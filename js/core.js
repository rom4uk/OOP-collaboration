 window.onload = function(e){
 	var begin = document.querySelector('.begin');
 	begin.play();
 };

 
 document.onkeydown = function(e){
 	var target = e.keyCode;
 	var KEYCODE_LEFT = 37;
 	var KEYCODE_RIGHT = 39;
 	var KEYCODE_UP = 38;
 	var KEYCODE_DOWN = 40;
 	var KEYCODE_SPACE = 32;
 	var move = document.querySelector('.move');
 	var shut = document.querySelector('.gunshut');
 	if(target === KEYCODE_LEFT || target === KEYCODE_RIGHT || target === KEYCODE_UP || target === KEYCODE_DOWN){
 		move.currentTime = 0;
 		move.play();
 	}
 	else if(target === KEYCODE_SPACE){
 		shut.currentTime = 0;
 		shut.play();
 	}
 }



 var canvas, context; 
 var imgBrick, imgSteel, imgWater, imgForest, imgTank; 
 var aMap;  
 var iCellSize = 24;
 var iXCnt = 26; 
 var iYCnt = 26; 
 

 function clear() { 
 	context.clearRect(0, 0, canvas.width, canvas.height);
 }
 
 function drawScene() { 
 	clear();
 	context.fillStyle = '#696969';
 	context.fillRect(0, 0, canvas.width, canvas.height);
 	context.save();

//Йдемо по массиву, малюючи обьекти
for (var y = 0; y < iYCnt; y++) {
	for (var x = 0; x < iXCnt; x++) {
		switch (aMap[y][x]) {
			case 0: 
			break;
			 case 1: //brick
			 context.drawImage(imgBrick, 0, 0, iCellSize, iCellSize, x*iCellSize, y*iCellSize, iCellSize, iCellSize);
			 break;
			 case 2: //steel
			 context.drawImage(imgSteel, 0, 0, iCellSize, iCellSize, x*iCellSize, y*iCellSize, iCellSize, iCellSize);
			 break;
			 case 3: //wood
			 context.drawImage(imgForest, 0, 0, iCellSize, iCellSize, x*iCellSize, y*iCellSize, iCellSize, iCellSize);
			 break;
			 case 4: //water
			 context.drawImage(imgWater, 0, 0, iCellSize, iCellSize, x*iCellSize, y*iCellSize, iCellSize, iCellSize);
			 break;
			 case 5: //tank
			 context.drawImage(imgTank, 0, 0, iCellSize*2, iCellSize*2, x*iCellSize, y*iCellSize, iCellSize*2, iCellSize*2);
			 break;
			}
		}
	}

	context.restore();
}



$(function(){
	canvas = document.getElementById('scene');
	canvas.width = iXCnt * iCellSize;
	canvas.height = iYCnt * iCellSize;
	context = canvas.getContext('2d');
	
//Наша карта
aMap = ([
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 3, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 3, 1, 0, 1, 3, 3, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 3, 1, 0, 1, 3, 3, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 3, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 0, 1, 4, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
	[0, 0, 1, 0, 0, 0, 1, 4, 1, 0, 1, 4, 1, 0, 1, 0, 0, 0, 1, 4, 1, 0, 1, 4, 1, 0],
	[0, 0, 1, 0, 0, 0, 1, 4, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 4, 1, 0, 1, 1, 1, 0],
	[0, 0, 1, 0, 0, 0, 1, 4, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 4, 1, 0, 1, 1, 0, 0],
	[0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	]);

// Загрузка картинок
imgBrick = new Image();
imgBrick.src = 'img/brick.png';
imgSteel = new Image();
imgSteel.src = 'img/steel.png';
imgWater = new Image();
imgWater.src = 'img/water.png';
imgForest = new Image();
imgForest.src = 'img/forest.png';
imgTank = new Image();
imgTank.src = 'img/tank.png';


});

setInterval(drawScene, 40); 
