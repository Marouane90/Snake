function Flocon()
{
	this.init();
}
Flocon.prototype =
{
	init : function()
	{
		this.x = parseInt(Math.random() * 600);
		this.y = 0;
		this.color = "rgba("+parseInt(Math.random() * 200)+", "+parseInt(Math.random() * 200)+", "+parseInt(Math.random() * 200)+", "+parseInt(Math.random() * 200)+")";
		this.speed = parseInt(Math.random() * 8 + 1);
	},
	move : function()
	{
		this.y += this.speed;
		if (this.y > 600)
		{
			this.init();
		}
		this.x += this.speed * windSpeed;
		if (this.x > 600)
		{
			this.x = 0;
		}
		else if (this.x < 0)
		{
			this.x = 600;
		}
	},
	draw : function()
	{
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.speed, this.speed);
	}
};
var wind = 1;
var windSpeed = 1;
var direction = true;
setInterval(function()
{
	if (direction)
	{
		wind++;
		if (wind > 100)
			direction = !direction;
	}
	else
	{
		wind--;
		if (wind < -100)
			direction = !direction;
	}
	windSpeed = wind / 100;
}, 100);
var flocons = [];
var max = 500;
var count = 0;
while (count < max)
{
	flocons.push(new Flocon());
	count++;
}
var context;
function refresh()
{
	context.clearRect(0, 0, 600, 600);
	var count = 0;
	while (count < flocons.length)
	{
		flocons[count].move();
		flocons[count].draw();
		count++;
	}
	requestAnimationFrame(refresh);
}
document.addEventListener("DOMContentLoaded", function()
{
	var canvas = document.querySelector('#dessin');
	context = canvas.getContext('2d');
	requestAnimationFrame(refresh);
});
// var x = 0
// var context; 
// function Flocon()
// {
// 	this.init();
// }
// Flocon.prototype = 
// {
// 	init : function()
// 	{
// 		this.x = parseInt(Math.random() * 600);
// 		this.y = 0;
// 		this.color = "rgba("+parseInt(Math.random() * 200)+", "+parseInt(Math.random() * 200)+", "+parseInt(Math.random() * 200)+", "+parseInt(Math.random() * 200)+")";
// 		this.speed = parseInt(Math.random() * 10 +1);
// 	},
// 	move : function()
// 	{
// 		this.y += this.speed;
// 		if (this.y > 600)
// 		{
// 			this.init();
// 		}
// 		this.x += this.speed / wind;
// 		if (this.x > 600)
// 		{
// 			this.x=0;
// 		}
// 		else if (this.x < 0)
// 		{
// 			this.x = 600;
// 		}
// 	},
// 	draw : function()
// 	{
// 		context.fillStyle = this.color;
// 		context.fillRect(this.x, this.y, 10-this.speed, 10-this.speed);
// 	}
// }
// var wind = 2;
// var windSpeed = 1;
// var direction = true;
// setInterval(function()
// {
// 	if(direction)
// 	{
// 			wind++;
// 		if (wind > 100)
// 			direction = !direction;
// 	}
// 	else
// 	{
// 			wind--;
// 		if (wind < -100)
// 			direction = !direction
// 	}
// 	windSpeed = wind - 50;
// }, 100);
// 	wind = 1;
// 	setTimeout(function()
// 	{
// 		wind = 0.5;
// 	}, 1000);
// 	setTimeout(function()
// 	{
// 		wind = -1;
// 	}, 2000);
// 	setTimeout(function()
// 	{
// 		wind = -2;
// 	}, 3000);
// 	setTimeout(function()
// 	{
// 		wind = -1;
// 	}, 5000);
// 	setTimeout(function()
// 	{
// 		wind = 0.5;
// 	}, 6000);
// 	setTimeout(function()
// 	{
// 		wind = 1;
// 	}, 7000);
// 	setTimeout(function()
// 	{
// 		wind = 2;
// 	}, 8000);
// }, 10000)
// setInterval(function()
// {
// 	wind *= -1;
// }, 5000);
// var flocons = [];
// var max = 500;
// var count = 0;
// while (count < max)
// {
// 	flocons.push(new Flocon());
// 	count++;
// }

// var context;
// function refresh()
// {
// 	context.clearRect(0, 0, 600, 600);
// 	var count = 0;
// 	while (count < flocons.length)
// 	{
// 		flocons[count].move();
// 		flocons[count].draw();
// 		count++;	
// 	}
// 	requestAnimationFrame(refresh);
// }
// document.addEventListener("DOMContentLoaded", function()
// {
// 	var canvas = document.querySelector('#dessin');
// 	context = canvas.getContext('2d');
// 	requestAnimationFrame(refresh);
// });

// var x = 0;
// var contex;
// document.addEventListener("DOMContentLoaded", function()
// {
// 	var canvas = document.querySelector('#dessin');
// 	var context = canvas.getContext('2d');

// 	var my_gradient = context.createLinearGradient(0, 0, 100, 0);
// 	my_gradient.addColorStop(1, "black");
// 	my_gradient.addColorStop(0, "white");
// 	context.fillStyle = my_gradient;

// 	// context.fillStyle = "red";
// 	context.strokeStyle = "pink";
// 	context.fillRect(5, 5, 100, 100);
// 	context.strokeRect(105, 105, 100, 100);
// 	context.clearRect(55, 55, 100, 100);
// 	requestAnimationFrame(refresh);
// 	function refresh()
// 	{ 
// 		context.clearRect(x, 0, 50, 50);
// 		context.fillStyle = my_gradient;
// 		context.fillRect(5, 5, 100, 100);
// 		context.strokeRect(105, 105, 100, 100);
// 		context.clearRect(55, 55, 100, 100);
// 		context.fillStyle = "red";
// 		x += 5;
// 		context.fillRect(x, 0, 50, 50);
// 		requestAnimationFrame(refresh);

// 	}
// });