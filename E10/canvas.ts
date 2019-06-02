namespace L09 {
	document.addEventListener("DOMContentLoaded", init);
	let crc: CanvasRenderingContext2D;
	let canvas: HTMLCanvasElement;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		drawSeabed();
		drawWater();
		
		for (let i: number = 0; i < 5; i++) {
			let x: number = Math.random() * 900 + 30;
			let y: number = Math.random() * 400 + 430;
			let r: number = Math.random() * 20+20;
			drawRock(x, y, r);	
		}

		for (let i: number = 0; i < 30; i++) {
			let x: number = Math.random() * 900;
			let y: number = Math.random() * 400 + 401;
			drawSeaWeed(x, y);
		}

		for (let i: number = 0; i < 20; i++) {
			let x: number = Math.random() * 100 + 780;
			let y: number = Math.random() * 600;
			let r: number = Math.random() * 10;
			drawBubble(x, y, r);	
	}
	
		drawFish0();
		drawFish1();

}

	function drawRock(_x: number, _y:number, _r:number): void{
		let rock: Path2D = new Path2D();
		rock.arc( _x, _y, _r, 180, 2* Math.PI);
		crc.fillStyle = "darkgrey";
		crc.fill(rock);
		crc.stroke(rock);
	}


	function drawSeaWeed(_x: number, _y: number): void {
		let seaWeed: Path2D = new Path2D
		seaWeed.moveTo(_x, _y);
		seaWeed.lineTo(_x + 3, _y - 100);
		seaWeed.lineTo(_x + 6, _y);
		crc.fillStyle = "green";
		crc.fill(seaWeed);
		crc.stroke(seaWeed);
	}

	function drawFish0(){
		let body: Path2D = new Path2D;
		body.ellipse(200, 200, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
		crc.fillStyle = "lightblue";
		crc.fill(body);
		crc.stroke();

		let tailfinn: Path2D = new Path2D;
		tailfinn.moveTo (125, 200);
		tailfinn.lineTo (80,160);
		tailfinn.lineTo (80,240);
		tailfinn.closePath();
		crc.fill(tailfinn);
		//crc.stroke(tailfinn);

		let eyes: Path2D = new Path2D;
		eyes.arc( 240, 183, 7, 0, 2 * Math.PI);
		crc.fillStyle = "white";
		crc.fill(eyes);
		crc.stroke(eyes);

		let mouth: Path2D = new Path2D;
		mouth.moveTo(275, 200);
		mouth.lineTo (265,200);
		crc.stroke(mouth);
	}

	function drawFish1(){
		let body: Path2D = new Path2D;
		body.ellipse(200 + 400, 200 + 100, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
		crc.fillStyle = "lightgrey";
		crc.fill(body);
		crc.stroke();

		let tailfinn: Path2D = new Path2D;
		tailfinn.moveTo (125 + 400, 200 + 100);
		tailfinn.lineTo (80 + 400,160 + 100);
		tailfinn.lineTo (80 + 400,240 + 100);
		tailfinn.closePath();
		crc.fill(tailfinn);

		let eyes: Path2D = new Path2D;
		eyes.arc( 240 + 400, 183 + 100, 7, 0, 2 * Math.PI);
		crc.fillStyle = "white";
		crc.fill(eyes);
		crc.stroke(eyes);

		let mouth: Path2D = new Path2D;
		mouth.moveTo(275 + 400 , 200 + 100);
		mouth.lineTo (265 + 400 ,200 + 100);
		crc.stroke(mouth);
	}

	function drawBubble(_x: number, _y: number, _r: number): void {
		let bubble: Path2D = new Path2D();
		bubble.arc( _x, _y, _r, 0, 2 * Math.PI);
		crc.fillStyle = "white";
		crc.fill(bubble);
		crc.stroke(bubble);
	}

	function drawSeabed(): void {
			let seabed: Path2D = new Path2D();
			seabed.moveTo(0, 400);
			seabed.lineTo(0, 600);
			seabed.lineTo(900, 600);
			seabed.lineTo(900, 400);
			seabed.lineTo(0, 400);
			seabed.closePath();
			crc.fillStyle = "peru";
			crc.fill(seabed);
			crc.stroke(seabed);
	
	}

	function drawWater(): void {
		let sea: CanvasGradient = crc.createLinearGradient(0, 500, 0, 0);
		sea.addColorStop(0, "blue");
		sea.addColorStop(1, "lightblue");
		crc.fillStyle = sea;
		crc.fillRect(0, 0, 900, 400);
}
	

	
	function drawIcecone(_x: number, _y: number): void {
		let waffle: Path2D = new Path2D();
		waffle.moveTo(_x - 50, _y - 100);
		waffle.lineTo(_x, _y);
		waffle.lineTo(_x + 50, _y - 100);
		waffle.closePath();
		crc.fillStyle = "peru";
		crc.fill(waffle);
		crc.stroke(waffle);

		let ice: Path2D = new Path2D();
		ice.arc(_x, _y - 100, 50, Math.PI, 2 * Math.PI);
		crc.fillStyle = "red";
		crc.fill(ice);
		crc.stroke(ice);
	}
}