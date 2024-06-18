window.onload = function() {

var canvas = document.getElementById('drawtext-canvas');
context = canvas.getContext("2d");//also there is 3d context
context.font = "20px verdana"
context.lineWidth=1;
//fillText and strokeText are functions
//params -- text to be drawn, x coordinate, y coordinate , maxwidth
  
context.fillText("fill text on canvas",5,20,150);//completely filled text

context.strokeText("stroke text on canvas",5,40,200);//inside is empty

//styling text
//font-style, font-weight, font-family, font-size
//ie context.font = "font-style font-weight font-size font-family"

var text = "This text will be styled!";

context.font = "normal 800 xx-medium times"; // fillText Style

context.fillText(text, 100, 100);

context.font = "italic 300 10px monospace"; // strokeText Style
context.strokeText(text, 100, 130);

//#d text - kind of illusion since we are in 2s space. many texts with same text are repeated with pixel differences
draw3DText("This text will be in 3D", 50, 50, "normal 600 20px monospace", "red", 5, context)

//positioning text on canvas
var poscanvas = document.getElementById('positioning-texts-canvas');
poscontext = poscanvas.getContext("2d");//also there is 3d context

  // Vertical Reference Line
  poscontext.strokeStyle = "red";
  poscontext.moveTo(150, 0);
  poscontext.lineTo(150, 300);
  poscontext.stroke();

  // Define a style
  poscontext.font = "italic 400 10px monospace";

  // Apply textAlign values
  poscontext.textAlign = "start";
  poscontext.fillText("start", 150, 30);//start at the coordinate

  poscontext.textAlign = "center";
  poscontext.fillText("center", 150, 50);//coordinate will come at center

  poscontext.textAlign = "left";
  poscontext.fillText("left", 150, 80);//will start from this coordinate

  poscontext.textAlign = "end";
  poscontext.fillText("end", 150, 110);//text will end at this coordinate

  poscontext.textAlign = "right";
  poscontext.fillText("right", 150, 140);//text will end at this coordinate


  // Horizontal Reference Line
  poscontext.strokeStyle = "red";
  poscontext.moveTo(0, 80);
  poscontext.lineTo(700, 80);
  poscontext.stroke();

  // Apply textBaseline values for vertical alignment of text wrt coordinate
  poscontext.textBaseline = "alphabetic";
  poscontext.shadowOffsetX=3;
  poscontext.shadowOffsetY=3;
  poscontext.shadowBlur=5;
  poscontext.shadowColor="black";
  poscontext.fillText("alphabetic", 60, 80);

  poscontext.textBaseline = "top";
  poscontext.fillText("top", 60, 80);

  poscontext.textBaseline = "hanging";
  poscontext.fillText("hanging", 100, 80);

  poscontext.textBaseline = "middle";
  poscontext.fillText("middle", 160, 80);

  poscontext.textBaseline = "ideographic";
  poscontext.fillText("ideographic", 220, 80);

  poscontext.textBaseline = "bottom";
  poscontext.fillText("bottom", 260, 80);



function draw3DText(text, x, y, style, color, size, context){
  context.font = style;
  context.fillStyle = "black";

  for(var i = 0; i < size; i++){
    context.fillText(text, x - i, y - i);
    console.log('filled');
  }

  context.fillStyle = color;
  context.fillText(text, x, y);
}


}

