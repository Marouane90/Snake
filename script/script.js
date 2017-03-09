"use strict";
var stage;
class Square
{
    constructor(x, y, size, fill)
    {
        this.square = new PIXI.Graphics();
        this.square.interactive = true;
        this.size = size;
        this._fill = fill;
        this.posX = x;
        this.posY = y;
        this.x = x * (this.size + 1) + 1;
        this.y = y * (this.size + 1) + 1;
        this.square.beginFill(this._fill);
        this.square.drawRect(this.x, this.y, this.size, this.size);
        this.square.endFill();
        stage.addChild(this.square);
        this.position = stage.getChildIndex(this.square);
    }
    set fill(fill)
    {
        this._fill = fill;
        this.square.clear();
        this.square.beginFill(this._fill);
        this.square.drawRect(this.x, this.y, this.size, this.size);
        this.square.endFill();
    }
}
document.addEventListener("DOMContentLoaded", function()
{
    var size = 10;
    var map = [];
    //Create the renderer
    var renderer = PIXI.autoDetectRenderer(551, 551);
    //Add the canvas to the HTML document
    document.body.appendChild(renderer.view);
    //Create a container object called the `stage`
    stage = new PIXI.Container();
    var x = 0;
    while (x < 50)
    {
        map[x] = [];
        var y = 0;
        while (y < 50)
        {
            var cell = new Square(x, y, size, 0xFFFFFF);
            map[x][y] = cell;
            y++;
        }
        x++;
    }

    
    var x = parseInt(Math.random() * 50);
    var y = parseInt(Math.random() * 50);
    map[x][y].fill = 0x83C3E6;
    var x = parseInt(Math.random() * 50);
    var y = parseInt(Math.random() * 50);
    map[x][y].fill = 0x83C3E6;
    var x = parseInt(Math.random() * 50);
    var y = parseInt(Math.random() * 50);
    map[x][y].fill = 0x83C3E6;

var coords = [];
    var x = parseInt(Math.random() * 50);
    var y = parseInt(Math.random() * 50);
    map[x][y].fill = 0xFF0000;
    map[x][y+1].fill = 0xFF0000;
    map[x][y-1].fill = 0xFF0000;
coords.push([x, y-1]);
coords.push([x, y]);
coords.push([x, y+1]);
    //Tell the `renderer` to `render` the `stage`
    renderer.render(stage);


function moveDirection(info)
{
    // var input= document.querySelector('input');
    if(info.keyCode == 37)
    {
        var tmp = coords[0];
        var x = tmp[0];
        var y = tmp[1];
        map[x-1][y].fill = 0xFF0000;
        coords.unshift([x - 1, y]);

        var tmp = coords.pop();
        var x = tmp[0];
        var y = tmp[1];
        map[x][y].fill = 0xFFFFFF;
    }
    if(info.keyCode == 38)
    {
        var tmp = coords[0];
        var x = tmp[0];
        var y = tmp[1];
        map[x][y-1].fill = 0xFF0000;
        coords.unshift([x, y-1]);

        var tmp = coords.pop();
        var x = tmp[0];
        var y = tmp[1];
        map[x][y].fill = 0xFFFFFF;
    }
    if(info.keyCode == 39)
    {
        var tmp = coords[0];
        var x = tmp[0];
        var y = tmp[1];
        map[x+1][y].fill = 0xFF0000;
        coords.unshift([x + 1, y]);

        var tmp = coords.pop();
        var x = tmp[0];
        var y = tmp[1];
        map[x][y].fill = 0xFFFFFF;
    }
    if(info.keyCode == 40)
    {
        var tmp = coords[0];
        var x = tmp[0];
        var y = tmp[1];
        map[x][y+1].fill = 0xFF0000;
        coords.unshift([x, y+1]);

        var tmp = coords.pop();
        var x = tmp[0];
        var y = tmp[1];
        map[x][y].fill = 0xFFFFFF;
    }
    // console.log("moveDiv >", info.keyCode);
}
    function move() {

        snake.speed = parseInt(Math.random() * 2);
            this.y += this.speed;
        if (this.y > 200)
        {
            this.init();
        }
    }
    function refresh()
    {
        renderer.render(stage);
        requestAnimationFrame(refresh);
    }
    requestAnimationFrame(refresh);
    document.onkeydown = moveDirection;
});


// var snake = window.snake || {};
// function launchFullscreen(element) {
//   if(element.requestFullscreen) {
//     element.requestFullscreen();
//   } else if(element.mozRequestFullScreen) {
//     element.mozRequestFullScreen();
//   } else if(element.webkitRequestFullscreen) {
//     element.webkitRequestFullscreen();
//   } else if(element.msRequestFullscreen) {
//     element.msRequestFullscreen();
//   }
// }
// window.onload = function(){
//     document.addEventListener("fullscreenchange", function(){snake.game.adjust();});
//     document.addEventListener("webkitfullscreenchange", function(){snake.game.adjust();});
//     document.addEventListener("mozfullscreenchange", function(){snake.game.adjust();});
//     document.addEventListener("MSFullscreenChange", function(){snake.game.adjust();});

//     snake.game = (function()
//     {
//         var canvas = document.getElementById('canvas');
//         var ctx = canvas.getContext('2d');
//         var status=false;
//         var score = 0;
//         var old_direction = 'right';
//         var direction = 'right';
//         var block = 10;
//         var score = 0;
//         var refresh_rate = 250;
//         var pos = [[5,1],[4,1],[3,1],[2,1],[1,1]];
//         var scoreboard = document.getElementById('scoreboard');
//         var control = document.getElementById('controls');
//         var keys = {
//             37 : 'left',
//             38 : 'up',
//             39 : 'right',
//             40 : 'down'
//             };
//         function adjust()
//         {
//             if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement )
//             {
//                 canvas.width=window.innerWidth;
//                 canvas.height=window.innerHeight;
//                 control.style.display='none';
//             }
//             else
//             {
//                 canvas.width=850;
//                 canvas.height=600;
//                 control.style.display='inline';
//             }
//         }
//         var food = [Math.round(Math.random(4)*(canvas.width - 10)), Math.round(Math.random(4)*(canvas.height - 10)),];
//         function todraw()
//         {
//             for(var i = 0; i < pos.length; i++)
//             {
//                 draw(pos[i]);
//             }
//         }
//         function giveLife()
//         {
//             var nextPosition = pos[0].slice();
//             switch(old_direction)
//             {
//                 case 'right':
//                     nextPosition[0] += 1;
//                     break;
//                 case 'left':
//                     nextPosition[0] -= 1;
//                     break;
//                 case 'up':
//                     nextPosition[1] -= 1;
//                     break;
//                 case 'down':
//                     nextPosition[1] += 1;
//                     break;    
//             }
//             pos.unshift(nextPosition);
//             pos.pop();
//         }
//         function grow()
//         {
//             var nextPosition = pos[0].slice();
//             switch(old_direction)
//             {
//                 case 'right':
//                     nextPosition[0] += 1;
//                     break;
//                 case 'left':
//                     nextPosition[0] -= 1;
//                     break;
//                 case 'up':
//                     nextPosition[1] -= 1;
//                     break;
//                 case 'down':
//                     nextPosition[1] += 1;
//                     break;    
//             }
//             pos.unshift(nextPosition);
//         }
//         function loop()
//         {
//             ctx.clearRect(0,0,canvas.width,canvas.height);
//             todraw();
//             giveLife();
//             feed();
//             if(is_catched(pos[0][0]*block,pos[0][1]*block,block,block,food[0],food[1],10,10))
//             {
//                 score += 10;
//                 createfood();
//                 scoreboard.innerHTML = score;
//                 grow();
//                 if(refresh_rate > 100)
//                 {
//                     refresh_rate -=5;
//                 }
//             }
//             snake.game.status = setTimeout(function() { loop(); },refresh_rate);
//         }
//         window.onkeydown = function(event){
//              direction = keys[event.keyCode];
//                 if(direction)
//                 {
//                     setWay(direction);
//                     event.preventDefault();
//                 }
//             };
//         function setWay(direction)
//         {
//             switch(direction)
//             {
//                 case 'left':
//                     if(old_direction!='right')
//                     {
//                         old_direction = direction;
//                     }
//                     break;
//                 case 'right':
//                     if(old_direction!='left')
//                     {
//                         old_direction = direction;
//                     }
//                     break;
//                 case 'up':
//                     if(old_direction!='down')
//                     {
//                         old_direction = direction;
//                     }
//                     break;
//                 case 'down':
//                     if(old_direction!='up')
//                     {
//                         old_direction = direction;
//                     }
//                     break;
//             }

//         }
//         function feed()
//         {
//             ctx.beginPath();
//             ctx.fillStyle = "#ff0000";
//             ctx.fillRect(food[0],food[1],10,10);
//             ctx.fill();
//             ctx.closePath();
//         }
//         function createfood()
//         {
//             food = [Math.round(Math.random(4)*850), Math.round(Math.random(4)*600)];
//         }
//         function is_catched(ax,ay,awidth,aheight,bx,by,bwidth,bheight) {
//             return !(
//             ((ay + aheight) < (by)) ||
//             (ay > (by + bheight)) ||
//             ((ax + awidth) < bx) ||
//             (ax > (bx + bwidth))
//             );
//         }
//         function draw(pos)
//         {
//             var x = pos[0] * block;
//             var y = pos[1] * block;
//             if(x >= canvas.width || x <= 0 || y >= canvas.height || y<= 0)
//             {
//                     document.getElementById('pause').disabled='true';
//                     snake.game.status=false;
//                     ctx.clearRect(0,0,canvas.width,canvas.height);
//                     ctx.font='40px san-serif';
//                     ctx.fillText('Game Over',300,250);
//                     ctx.font = '20px san-serif';
//                     ctx.fillStyle='#000000';
//                     ctx.fillText('To Play again Refresh the page or click the Restarts button',200,300);
//                     throw ('Game Over');
//             }
//             else
//             {
//                 ctx.beginPath();
//                 ctx.fillStyle='#000000';
//                 ctx.fillRect(x,y,block,block);
//                 ctx.closePath();
//             }
//         }
//         function pause(elem)
//         {
//             if(snake.game.status)
//             {
//                 clearTimeout(snake.game.status);
//                 snake.game.status=false;
//                 elem.value='Play'
//             }
//             else
//             {
//                 loop();
//                 elem.value='Pause';
//             }
//         }
//         function begin()
//         {
//             loop();
//         }
//         function restart()
//         {
//             location.reload();
//         }
//         function start()
//         {
//             ctx.fillStyle='#000000';
//             ctx.fillRect(0,0,canvas.width,canvas.height);
//             ctx.fillStyle='#ffffff';
//             ctx.font='40px helvatica';
//             ctx.fillText('Vignesh',370,140);
//             ctx.font='20px san-serif';
//             ctx.fillText('presents',395,190);
//             ctx.font='italic 60px san-serif';
//             ctx.fillText('Feed The Snake',240,280);
//             var img = new Image();
//             img.onload = function()
//             {
//                 ctx.drawImage(img,300,300,200,200);
//                 ctx.fillRect(410,330,10,10);
//             }
//             img.src ='snake.png';
//         }
//         function fullscreen()
//         {
//             launchFullscreen(canvas);
//         }
//         return {
//             pause: pause,
//             restart : restart,
//             start : start,
//             begin: begin,
//             fullscreen : fullscreen,
//             adjust : adjust,
//         };
//     })();
//     snake.game.start();
// }