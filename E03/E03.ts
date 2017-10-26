namespace E03{
window.addEventListener("load",init);
var canvas: HTMLCanvasElement;
var crc2: CanvasRenderingContext2D;
function init(): void {
 canvas=document.getElementsByTagName("canvas")[0];
 crc2=canvas.getContext("2d")

//Linie
crc2.beginPath();
crc2.moveTo(0,200);
crc2.lineTo(800,600);
crc2.stroke();

crc2.beginPath();
crc2.moveTo(0,100);
crc2.lineTo(800,400);
crc2.stroke();


    
crc2.rect(300,260,100,100);
crc2.stroke();
crc2.fillStyle= "blue";
crc2.fill();

crc2.beginPath();
crc2.moveTo(340,260);
crc2.lineTo(420,240);
crc2.stroke();
    
//Tannenbaum
//Position oberes Dreieck
    tannenbaum(90,400);
    tannenbaum(140,100);
    tannenbaum(600,340);
    sonne (700, 60 )
    wolke (300, 20)
    wolke (500, 50)
    wolke (600, 20)
    wolke (200, 30)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
    drawSnowFlake(Math.random()*795,Math.random()*595)
 }  
//Uebergabe der Werte an die Funktion
    function tannenbaum(x:number, y:number){
// Tannenbaum 0-2 (3)    
        for(let i:number = 0; i<3 ; i++){
        dreieck(x,y+50*i);
    } 
//Rechteck Baumstamm
       crc2.fillStyle= "brown";
       crc2.fillRect(x-10, y+150, 20, 40);
       
       
   }
//Generieren der Dreiecke 
function dreieck(x:number,y:number){
    crc2.beginPath();
    crc2.moveTo(x,y);
    crc2.lineTo(x+40,y+60);
    crc2.lineTo(x-40,y+60);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle= "green";
    crc2.fill();
   
}


function sonne(x:number, y:number){
crc2.beginPath();
crc2.arc(x,y,80,0,2 * Math.PI);
crc2.fillStyle= "yellow";
crc2.fill();
}

//Offset der Kreise
function wolke(x:number, y:number){
     for(let i:number = 0; i<4 ; i++){
        kreis(x+20*i,y);
    }     
}

//Kreise generieren
function kreis( x:number, y:number){
crc2.beginPath();
crc2.arc(x,y,20,0,2 * Math.PI);
crc2.fillStyle= "grey";
crc2.fill();
}



//Schneeflocken generieren
function drawSnowFlake( x:number, y:number){
crc2.beginPath();
crc2.arc(x,y,2,0,2 * Math.PI);
crc2.stroke();
crc2.fillStyle= "white";
crc2.fill();
}


 
}





