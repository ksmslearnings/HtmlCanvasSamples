window.onload = function() {

var canvas = document.getElementById('hello-world-canvas');
context = canvas.getContext("2d");//also there is 3d context

//rectangle example
context.fillStyle="blue";//brush
context.fillRect(0,0,30,30); //x and y coordinates and then width and height

//simple line
context.beginPath(); //reset the context state. ie a new path is started. this is always good to use to avoid issue
context.strokeStyle = "red";//color of line
context.moveTo(30,30);//starting points of line
context.lineTo(50,50);
context.lineWidth=3;
context.stroke();//draw the line

//adding more line by beginning from no state each time
context.beginPath(); //reset the context state. ie a new path is started. this is always good to use to avoid issue
context.strokeStyle = "blue";//color of line
context.moveTo(50,50);//starting points of line
context.lineTo(80,0);
context.lineWidth=3;
context.stroke();//draw the line

//another way
context.beginPath(); //reset the context state. ie a new path is started. this is always good to use to avoid issue
context.strokeStyle = "red";//color of line
context.moveTo(0,0);//starting points of line
context.lineTo(30,30);
context.lineTo(60,0);
context.lineTo(90,30);
context.lineTo(120,0);
context.lineWidth=3;
context.stroke();//draw the line

//line cap - can be butt (default), round,square
context.beginPath();
context.lineCap = "butt";
context.strokeStyle = "red";
context.moveTo(30,30);
context.lineTo(200,30);
context.lineWidth=6;
context.stroke();

context.beginPath();
context.lineCap = "round";//end points become rounded. overall line length increase with this.
context.strokeStyle = "red";
context.moveTo(30,50);
context.lineTo(200,50);
context.lineWidth=6;
context.stroke();

context.beginPath();
context.lineCap = "square";
context.strokeStyle = "red";
context.moveTo(30,70);
context.lineTo(200,70);
context.lineWidth=6;
context.stroke();

//context.lineJoin --> can have 3 values miter(default)/bevel/round
//bevel has diagnonal impact on line joins
//miter is default and it basically means lines join normally
//round = rounded corners

context.beginPath();
context.lineJoin = "bevel";
context.strokeStyle = "orange";
//shadows
//shadowColor, shadowOffsetX, shadowOffsetY, shadowBlur
//can be positive or nagative numbers to move shadow right or left accordingly
context.shadowColor = "black";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 5;
context.moveTo(80,60);
context.lineTo(110,60);
context.lineTo(110,90);
context.lineTo(80,90);
context.lineTo(80,60);
context.lineWidth=6;
context.stroke();


//drawing curves
//arc(x,y,radius, startAngle,endAngle,counterClockWise)
//1. x,y are center coordinates of the circle
//2. radius of circle
//3,4 - angle values for our circle  and are in radians and not degree
//counterClockWise optional - default false - draw clockWise or anticlockwise

context.beginPath();
context.strokeStyle="red"
let radian = Math.PI/180;
context.lineWidth=5;
context.arc(120,120,15,90*radian, 180*radian,true);
context.stroke();

//Draw Quadratic curves
//context.quadraticCurveTo(controlX,controlY,endX,endY)
//controlX and Y - are coordinates of control point and endX and Y are end of path
context.beginPath();
context.strokeStyle="red"
context.lineWidth=3;
context.moveTo(150,120);//begin point
context.quadraticCurveTo(100,70,200,120);
context.stroke();

//Bezier curves/cubic curves
context.beginPath();
context.strokeStyle="red"
context.lineWidth=3;
context.moveTo(180,150);//begin point
context.bezierCurveTo(150,70,230,80,200,200)
context.stroke();


 // Drawing a heart - upper part if bezier curves left and right and then they are joined with quadratic curves 
 //left and right
 context.beginPath();
 context.strokeStyle = "red";
 context.lineWidth = 5;
 context.moveTo(200, 130);
 context.bezierCurveTo(470,10,670,10,670,180);
 context.quadraticCurveTo(670, 380, 430, 520);
 context.quadraticCurveTo(190, 380, 190, 180);
 context.bezierCurveTo(190, 10, 400, 10, 430, 130);
 context.stroke();


 // right
 //drawBezierCurve(430, 130, 470, 10, 670, 10, 670, 180);
 //drawQuadraticCurve(670, 180, 670, 380, 430, 520);

 // left
 //drawBezierCurve(430, 130, 400, 10, 190, 10, 190, 180);
 //drawQuadraticCurve(190, 180, 190, 380, 430, 520);



 function drawQuadraticCurve(startX, startY, controlX, controlY, endX, endY, curveColor, curveWidth) {
   var radian = Math.PI / 180;

   // Draw the quadratic curve
   context.beginPath();
   context.strokeStyle = curveColor || "red";
   context.lineWidth = curveWidth || 2;
   context.moveTo(startX,startY);
   context.quadraticCurveTo(controlX,controlY,endX,endY);
   context.stroke();

   // Draw the control point as a circle
   context.beginPath();
   context.strokeStyle = "black";
   context.lineWidth = 10;
   context.arc(controlX, controlY, 5, 0 * radian, 360 * radian, false);
   context.stroke();

   // Draw the lines between control point and path
   context.beginPath();
   context.lineWidth = 1;
   context.moveTo(startX, startY);
   context.lineTo(controlX, controlY);
   context.lineTo(endX, endY);
   context.stroke();
 }

 function drawBezierCurve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, curveColor, curveWidth) {
   var radian = Math.PI / 180;

   // Draw the bezier curve
   context.beginPath();
   context.strokeStyle = curveColor || "red";
   context.lineWidth = curveWidth || 2;
   context.moveTo(startX, startY);
   context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
   context.stroke();

   // Draw the control one point as a circle
   context.beginPath();
   context.strokeStyle = "black";
   context.lineWidth = 10;
   context.arc(controlX1, controlY1, 5, 0 * radian, 360 * radian, false);
   context.stroke();

   // Draw the control two point as a circle
   context.beginPath();
   context.strokeStyle = "black";
   context.lineWidth = 10;
   context.arc(controlX2, controlY2, 5, 0 * radian, 360 * radian, false);
   context.stroke();

   // Draw the lines between control points and path
   context.beginPath();
   context.lineWidth = 1;
   context.moveTo(startX, startY);
   context.lineTo(controlX1, controlY1);
   context.lineTo(controlX2, controlY2);
   context.lineTo(endX, endY);
   context.stroke();
 }


//drawing shapes
var shapeCanvas = document.getElementById('rect-canvas');
shapescontext = shapeCanvas.getContext("2d");//also there is 3d context
shapescontext.strokeStyle="red";
shapescontext.fillStyle="blue";
shapescontext.lineWidth=5;
shapescontext.lineJoin="round";
shapescontext.beginPath();
shapescontext.rect(5,5,20,20);
shapescontext.stroke();
shapescontext.fill();//to fill color inside the shape.

shapescontext.fillRect(5,30,20,20);//short form of fillRect but without fill and other line attributes
shapescontext.lineWidth=2;
shapescontext.lineWidth="square";
shapescontext.strokeRect(5,65,30,30)

//eraser
//clear specific area - it uses rectangular format
shapescontext.clearRect(0,0,10,15);
//to clear all pass 0,0,canvas width and height

//draw chess board
let lightcolor = "#ddb180";
let darkcolor = "#7c330c";
shapescontext.beginPath();
shapescontext.strokeStyle="black";
shapescontext.lineWidth=0;
shapescontext.lineJoin = "bevel";
shapescontext.lineCap="miter";
shapescontext.strokeRect(40,20,80,80);

for(let x=1;x<=8;x++) 
  {
//row
for(let y=1;y<=8;y++) {

  if((x+y) % 2 == 0) {
  shapescontext.fillStyle=darkcolor;
  //shapescontext.fillRect(30 + i*10,10 + j*10,10,10);
  }
  else {
  shapescontext.fillStyle=lightcolor;
  //shapescontext.fillRect(30 + i*10,20,10,10);
  }
  shapescontext.fillRect(30 + x*10,10 + y*10,10,10);

  }
}

//draw circle
let radian1 = Math.PI / 180;
shapescontext.beginPath();
shapescontext.fillStyle="red";
shapescontext.strokeStyle="red";
shapescontext.arc(150,70,30,0 * radian1, 360 * radian1);
shapescontext.stroke();
shapescontext.fill();

//draw a pac man shape
shapescontext.beginPath();
shapescontext.strokeStyle="orange";
shapescontext.lineWidth=1;
shapescontext.fillStyle="orange";
shapescontext.moveTo(210,50);
shapescontext.lineTo(240,70);
shapescontext.arc(210,50,36,37*radian1, 323*radian, false);
shapescontext.lineTo(210,50);
shapescontext.stroke();
shapescontext.fill();


//second way to direct draw an arc and fill with color - we can draw multiple arcs and join together..
shapescontext.beginPath();
shapescontext.strokeStyle="orange";
shapescontext.lineWidth=1;
shapescontext.fillStyle="orange";
shapescontext.arc(250,90,36,37*radian1, 130*radian, false);
shapescontext.stroke();
shapescontext.fill();

//Making a polygon - using line by line is difficult since angle calculations is very hard.
//Using circle approach and calculating coordinates using trignomatry becomes easier.
//details in word document
// we need centre coordinates of circle, radius and start angle.

var polycanvas = document.getElementById('polygon-canvas');
polycontext = polycanvas.getContext("2d");//also there is 3d context
const centerX = 50;
const centerY=50;
const radius=30;
const sides=5;
const startAngle=200;
const angle = (2 * Math.PI)/ sides;

  // Start Drawing
  polycontext.beginPath();
  polycontext.strokeStyle = "red";
  polycontext.lineWidth = 1;
  polycontext.lineJoin = "round";

  // Begining Point Coordinates
  var beginX = centerX + radius * Math.cos(startAngle);
  var beginY = centerY - radius * Math.sin(startAngle);

  polycontext.moveTo(beginX, beginY);

  // Draw Lines
  for(var i = 1; i <= sides; i++){
    // Current point'S coordinates
    var currentAngle = startAngle + i * angle;
    var currentPointX = centerX + radius * Math.cos(currentAngle);
    var currentPointY = centerY - radius * Math.sin(currentAngle);

    // Draw the line
    polycontext.lineTo(currentPointX, currentPointY);
  }

  polycontext.closePath(); // to close paths manually
  polycontext.stroke();



  //adding shadows to objects
  

}

