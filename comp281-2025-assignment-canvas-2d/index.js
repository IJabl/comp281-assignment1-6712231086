import { getContext, FPS } from "./utils-module.js";

// กำหนดชื่อเรื่องของเอกสาร HTML
document.title = "A01 - App Graphics 2D";
// กำหนดให้ฟังก์ชัน main ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
document.addEventListener("DOMContentLoaded", main);

// ฟังก์ชันหลักที่ใช้ในการเริ่มต้นแอปพลิเคชัน ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
function main(ev) {
	// เข้าถึง context ของ canvas ที่มี id เป็น "myCanvas"
	const ctx = getContext("#myCanvas");

	//ตรวจตำแหน่งเมาส์
	let mouse = { x: 0, y: 0 };
	document.addEventListener("mousemove", function(event) {
		mouse.x = event.offsetX; // ใช้ offsetX เพื่อให้ได้ตำแหน่งสัมพัทธ์กับ canvas
		mouse.y = event.offsetY; // ใช้ offsetY เพื่อให้ได้ตำแหน่งสัมพัทธ์กับ canvas
	});


	// กำหนดค่าเริ่มต้นสำหรับแอปพลิเคชันในรูปแบบของอ็อบเจกต์ config
	const config = {
		width : 800,
		height : 600,
		bgColor : "skyblue",
		debug : true,
	};

	// กำหนดขนาดของ canvas ตามค่า config
	ctx.canvas.width = config.width;
	ctx.canvas.height = config.height;

	function draw() {
		// ใช้ FPS สำหรับการวัดอัตราเฟรมต่อวินาที
		FPS.update();

		// กำหนดสีพื้นหลังของ canvas และใช้ fillRect เพื่อเติมสีพื้นหลัง
		ctx.fillStyle = config.bgColor;
		ctx.fillRect(0, 0, config.width, config.height);

		//บอกตำแหน่งเมาส์
		ctx.font = "14px Arial";
		ctx.fillStyle = "black";
		ctx.fillText(`Mouse: (${mouse.x}, ${mouse.y})`, 10, 42);

		// วาดรูปจากส่วนนี้ไป **แนะนำให้วาดจากรูปที่อยู่ด้านหลังไปด้านหน้าตามลำดับ**
		// ใช้ภาพจาก MP1-app-graphics-2d.jpg เป็นแนวทางในการวาดรูป แต่จะวาดอย่างไรก็ได้ตามต้องการ

		// TODO:
		//วาดภูเขาลูกที่ 1
		ctx.beginPath(); 
		ctx.moveTo(0, 250); 
		ctx.quadraticCurveTo(150, 100, 400, 250); 
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4;
		ctx.stroke(); 
		ctx.closePath(); 
		ctx.fillStyle = "green"; 
		ctx.fill(); 

		//วาดภูเขาลูกที่ 2
		ctx.beginPath();
		ctx.moveTo(400, 250); 
		ctx.bezierCurveTo(450, 100, 500, 200, 800, 130);
		ctx.lineTo(800, 250);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4; 
		ctx.stroke(); 
		ctx.closePath();
		ctx.fillStyle = "green"; 
		ctx.fill();

		//วาดพระอาทิตย์
		ctx.beginPath();
		ctx.arc(700, 80, 50, 0, Math.PI * 2);
		ctx.fillStyle = "yellow";
		ctx.fill();
		ctx.lineWidth = 4;
		ctx.strokeStyle = "orange";
		ctx.stroke();
		ctx.closePath();

		//พื้น
		ctx.fillStyle = "lightgreen";
		ctx.fillRect(0, 250, 800, 600);

		//วาดทุ่งนา
		ctx.fillStyle = "yellowgreen";
		ctx.fillRect(10, 260, 110, 60);

		//ต้นกล้า
		//ต้น1
		ctx.strokeStyle = "darkgreen";
  		ctx.beginPath();
  		ctx.moveTo(20, 280);
  		ctx.quadraticCurveTo(18, 270, 20, 265);
  		ctx.stroke();
		//ต้น2
		ctx.strokeStyle = "darkgreen";
  		ctx.beginPath();
  		ctx.moveTo(40, 280);
  		ctx.quadraticCurveTo(38, 270, 40, 265);
  		ctx.stroke();
		//ต้น3
		ctx.strokeStyle = "darkgreen";
  		ctx.beginPath();
  		ctx.moveTo(60, 280);
  		ctx.quadraticCurveTo(58, 270, 60, 265);
  		ctx.stroke();
		//ต้น4
		ctx.strokeStyle = "darkgreen";
  		ctx.beginPath();
  		ctx.moveTo(80, 280);
  		ctx.quadraticCurveTo(78, 270, 80, 265);
  		ctx.stroke();
		//ต้น5
		ctx.strokeStyle = "darkgreen";
  		ctx.beginPath();
  		ctx.moveTo(100, 280);
  		ctx.quadraticCurveTo(98, 270, 100, 265);
  		ctx.stroke();
		//ต้น6
		ctx.strokeStyle = "darkgreen";
  		ctx.beginPath();
  		ctx.moveTo(20, 300);
  		ctx.quadraticCurveTo(18 , 290, 20, 285);
  		ctx.stroke();
		//ต้น7
		ctx.strokeStyle = "darkgreen";
  		ctx.beginPath();
  		ctx.moveTo(40, 300);
  		ctx.quadraticCurveTo(38 , 290, 40, 285);
  		ctx.stroke();
		//ต้น8
		ctx.strokeStyle = "darkgreen";
  		ctx.beginPath();
  		ctx.moveTo(60, 300);
  		ctx.quadraticCurveTo(58 , 290, 60, 285);
  		ctx.stroke();
		//ต้น9
		ctx.strokeStyle = "darkgreen";
  		ctx.beginPath();
  		ctx.moveTo(80, 300);
  		ctx.quadraticCurveTo(78 , 290, 80, 285);
  		ctx.stroke();
		//ต้น10
		ctx.strokeStyle = "darkgreen";
  		ctx.beginPath();
  		ctx.moveTo(100, 300);
  		ctx.quadraticCurveTo(98 , 290, 100, 285);
  		ctx.stroke();

		//วาดต้นไม้
		// ลำต้น
  		ctx.fillStyle = "#8B4513"; // สีน้ำตาล
  		ctx.fillRect(70 , 400, 20, 60);
		ctx.strokeStyle = "black";
  		ctx.lineWidth = 2;
  		ctx.strokeRect(70 , 400, 20, 60);

 		// วาดใบ
  		ctx.fillStyle = "green";
  		// ซ้าย
  		ctx.beginPath();
 		ctx.arc(55 , 410, 25, 0, Math.PI * 2);
  		ctx.fill();
		ctx.strokeStyle = "black";
  		ctx.lineWidth = 2;
  		ctx.stroke();
  		// ขวา
  		ctx.beginPath();
  		ctx.arc(105 , 410, 25, 0, Math.PI * 2);
  		ctx.fill();
		ctx.strokeStyle = "black";
  		ctx.lineWidth = 2;
  		ctx.stroke();
		// กลาง
  		ctx.beginPath();
  		ctx.arc(80, 400, 30, 0, Math.PI * 2);
  		ctx.fill();
		ctx.strokeStyle = "black";
  		ctx.lineWidth = 2;
  		ctx.stroke();

		//วาดบ้าน
		//ตัวบ้าน
		ctx.beginPath();
		ctx.moveTo(600, 350); 
		ctx.lineTo(700, 350);
		ctx.lineTo(700, 450); 
		ctx.lineTo(600, 450);
		ctx.closePath();
		ctx.fillStyle = "brown";
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		ctx.stroke();
		//หลังคา
		ctx.beginPath();
		ctx.moveTo(580, 350); 
		ctx.lineTo(650, 280);
		ctx.lineTo(720, 350);
		ctx.closePath();
		ctx.fillStyle = "yellow";
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		ctx.stroke();
		//ประตู
		ctx.beginPath();
		ctx.moveTo(630, 450); 
		ctx.lineTo(670, 450);
		ctx.lineTo(670, 400);
		ctx.lineTo(630, 400);
		ctx.closePath();
		ctx.fillStyle = "blue";
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		ctx.stroke();

		//แม่น้ำ
		ctx.beginPath();
		ctx.moveTo(280,250);
		ctx.bezierCurveTo(350,300, 150,400, 400,600);
		ctx.lineTo(600,600);
		ctx.bezierCurveTo(300,400, 550,300, 600,250);
		ctx.closePath();
		ctx.fillStyle = "blue";
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		ctx.stroke();

		//เมฆ
		ctx.fillStyle = "white";
		// วงกลมกลาง
		ctx.beginPath();
		ctx.arc(75, 60, 20, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
		// วงกลมซ้าย
		ctx.beginPath();
		ctx.arc(50, 70, 20, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
		// วงกลมขวา
		ctx.beginPath();
		ctx.arc(100, 70, 20, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
		ctx.fill();
		ctx.closePath();

		// เขตสิ้นสุดของการวาดรูป


		// แสดงข้อความ FPS บน canvas ถ้า config.debug เป็น true
		if (config.debug) FPS.show(ctx, 10, 28);

		// ใช้ requestAnimationFrame เพื่อเรียกใช้ฟังก์ชัน draw ต่อไป
		requestAnimationFrame(draw);
	}
	// เริ่มต้นการวาดภาพบน canvas
	draw();
}