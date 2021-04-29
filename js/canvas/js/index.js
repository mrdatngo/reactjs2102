var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");

// line
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.moveTo(200, 0);
ctx.lineTo(0, 100);
ctx.stroke();

// circle
ctx.beginPath();
ctx.arc(100, 50, 40, 0, Math.PI / 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 200, 40, Math.PI, Math.PI * 2);
ctx.stroke();

// Text
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);

// draw image
var img = document.getElementById("scream");
ctx.drawImage(img, 10, 10, 100, 100);
