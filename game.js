var canvas=new fabric.Canvas("myCanvas");

player_y=350;
player_x=36;
player_object="";
back_object="";
back_x=0;
back_y=0;

function lost(){
    fabric.Image.fromURL("path.png",function(Img){
        back_object=Img;

        back_object.scaleToWidth(800);
        back_object.scaleToHeight(400);
        back_object.set({
        top:0,
        left:30
        });
        canvas.add(back_object);
    });
   
}
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(70);
        player_object.scaleToHeight(70);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
if(keyPressed=='38'){
    player_up();
    console.log("^ up arrow key pressed");
}

if(keyPressed=='40'){
    player_down();
    console.log("v down arrow key pressed");
}

if(keyPressed=="37"){
    player_left();
    console.log("-> left key pressed");
}
if(keyPressed=='39'){
    player_right();
    console.log("<- right arrow key pressed");
  }
}


function player_up(){
    if(player_y>=0){
        player_y=player_y-10;
        
        player_update();
        console.log("player y="+player_y+"player_x="+player_x);
    }
}

function player_down(){
    if(player_y<=500){
        player_y=player_y+10;
        
        player_update();
        console.log("player y="+player_y+"player x="+player_x);
    }
}

function player_right(){
    if(player_x<=700){
        player_x=player_x+10;
      
        player_update();
        console.log("player y="+player_y+"player x="+player_x);
    }
}

function player_left(){
    if(player_x>=0){
        player_x=player_x-10;
       
       player_update();
        console.log("player y="+player_y+"player x="+player_x);
    }
}


function goback(){
    window.location="cam.html";
}