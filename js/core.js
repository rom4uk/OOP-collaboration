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
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 ]);
 
// Загрузка картинок
 imgBrick = new Image();
 imgBrick.src = 'images/brick.png';
 imgSteel = new Image();
 imgSteel.src = 'images/steel.png';
 imgWater = new Image();
 imgWater.src = 'images/water.png';
 imgForest = new Image();
 imgForest.src = 'images/forest.png';
 

 });

 setInterval(drawScene, 40); 