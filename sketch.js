var cnv;
var scene = 1;
var slider;
var btnPlay;
var bckMusic;
var timer = 5;

function preload(){
  bgImg1 = loadImage("assests/bg3.jpg");
  bgImg2 = loadImage("assests/bg2.jpg");
  bgImg4 = loadImage("assests/bg4.jpg");
  hauntedHouseImg = loadImage("assests/hauntedHouse.jpg");
  doorBamImg = loadImage("assests/doorBam.jpg");

  boyImg2 = loadImage("assests/boy2.png");
  boyImg3 = loadImage("assests/boy3.png");


  arrowImg = loadImage("assests/arrow.png");
  
  bckMusic = loadSound("assests/bgMusic.mp3");
}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
  
  boy1 = createSprite(width/2-70, height-190, 10, 10);
  boy1.addImage(boyImg2);
  boy1.scale = 0.8;

  arrow = createSprite(width/2+300,height-200);
  arrow.addImage(arrowImg);
  arrow.scale = 0.6;
  //bckMusic.loop();

  slider = createSlider(0,1,0.5,0.01);
  slider.position(10,10);

  btnPlay = createButton("Play");
  btnPlay.mousePressed(togglePlay);
  btnPlay.position(200,10);

  
}

function draw() {

   fill("white");
    stroke("black");
    strokeWeight(4);
    textFont("Comic Sans MS");
    textSize(50);
    textAlign(CENTER);
  if(scene === 1){
    background(bgImg1);  

    bckMusic.setVolume(slider.value());
    //image(arrowImg,width/2+100,height-300);
    text("Tom Riddle Is An Adventure Guy",width/2-30,100);

    getTimer();
    if (timer == 0) {
      scene = 2;  
    }
    if(mousePressedOver(arrow)){
      scene = 2;  
    }
  }
  else if(scene == 2){
    background(hauntedHouseImg);  
    boy1.destroy();
    image(boyImg3,width/2+70,height-250,boyImg3.width,boyImg3.height-60);
    text("One Day He Decides To Enter A Haunted House",width/2-30,100);
    if(mousePressedOver(arrow)){
      //scene = 3;  
    }

    getTimer();
    if (timer == 0) {
      scene = 3;  
    }
  }
  else if(scene == 3){
    background(doorBamImg);  
    image(boyImg2,width/2,height-300,boyImg3.width,boyImg3.height-10);
    text("As Soon As He Enters Inside, The Door Closes",width/2-30,100);

    getTimer();
    if (timer == 0) {
      scene = 4;  
    }
  }
  else if(scene == 4){
    background(bgImg4);  
    image(boyImg2,width/2,height-300,boyImg3.width,boyImg3.height-10);
    text("As Soon As He Enters Inside, The Door Closes",width/2-30,100);

    getTimer();
    if (timer == 0) {
      scene = 4;  
    }
  }
  drawSprites();
  //text(mouseX + "," + mouseY,mouseX,mouseY);
}

function mousePressed() {
	console.log("called");
}

function togglePlay(){
  if(!bckMusic.isPlaying()){
    bckMusic.loop();
    btnPlay.html("Pause");
  }
  else{
    bckMusic.pause();
    btnPlay.html("Play");
  }
}

function getTimer(){
  // if the frameCount is divisible by 30, then a second has passed. it will stop at 0
  if(timer === 0) timer=5;
  if (frameCount % 30 == 0 && timer > 0) { 
    timer --;
  }
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, width-100, height-100);
}


