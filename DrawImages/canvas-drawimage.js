window.onload = function() {

var canvas = document.getElementById('drawImg-canvas');
context = canvas.getContext("2d");//also there is 3d context

var img = new Image();
img.src = "regularshow.png";

img.onload = ()=> {
  context.drawImage(img,10,10,50,50);

  context.drawImage(img,70,50,100,100,40,30,50,50);
};

//using sprite image to draw many using a single image by using above technique
var pokemonStripe = new Image();
pokemonStripe.src = "pokemons.png";

pokemonStripe.onload = ()=> {
  context.drawImage(pokemonStripe,0,0,200,200,100,20,50,50);
  context.drawImage(pokemonStripe,400,200,200,200,100,60,50,50);
  context.drawImage(pokemonStripe,1000,0,200,200,100,100,50,50);
};

//Filtering images - draw image and then manipulate the pixels
//Very powerful concept to add filters on the images and change its pixel details
var filtercanvas = document.getElementById('drawImg-canvas-filtering');
context1 = filtercanvas.getContext("2d");//also there is 3d context
var amsterdam = new Image();
amsterdam.src = "amsterdam.jpg";
amsterdam.onload = function() {
  context1.drawImage(amsterdam,0,0);

//returns image data as array of pixels and each pixel contains RBG and alpha combination which can be manipulated.
//each of these values are between 0 and 255 and can be changed. Alpha is 0 for transparent and 255 for full visible
var imageData = context1.getImageData(0,0,550,366); //IMPORTANT this will fail if image is not loaded from remote server with 
//Access-Control-Allow-Origin "*"

//above we get portion of image based on provided X,Y,width and height ie clipped part of full part based on we need.

for(i=0;i<imageData.data.length;i+=4) {
  imageData.data[i]=0;//red
  imageData.data[i+1]=0;//blue
  imageData.data[i+2]=0;//green
  imageData.data[i+3]=240;//alpha
}

context1.putImageData(imageData,0,0);

}

}

