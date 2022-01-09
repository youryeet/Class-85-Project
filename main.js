canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car_width = 75;
car_height = 100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x = 100;
car_y = 100;

function add() {
	background_newimage=new Image();
	background_newimage.onload= uploadBackground;
	background_newimage.src= background_image;

	background_newcar=new Image();
	background_newcar.onload= uploadCar; 
	background_newcar.src= greencar_image;
	
}

function uploadBackground() {
ctx.drawImage(background_newimage, 0, 0, canvas.width, canvas.height);
}

function uploadCar() {
ctx.drawImage(background_newcar, car_x, car_y, car_width, car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if( car_y >=0){
		car_y = car_y-10;
		console.log("When up arrow is pressed x=" + car_x + "| y=" + car_y)
		uploadBackground();
		uploadCar();
	}
}

function down()
{
	if( car_y <= 400){
		car_y = car_y+10;
		console.log("When up arrow is pressed x=" + car_x + "| y=" + car_y)
		uploadBackground();
		uploadCar();
	}}

function left()
{
	if( car_x >=0){
		car_x = car_x-10;
		console.log("When up arrow is pressed x=" + car_x + "| y=" + car_y)
		uploadBackground();
		uploadCar();
	}}

function right()
{
	if( car_x <=600){
		car_x = car_x+10;
		console.log("When up arrow is pressed x=" + car_x + "| y=" + car_y)
		uploadBackground();
		uploadCar();
	}}
