var x, y, xy;

// var one = document.getElementsByClassName(x + '_' + y)[0];
var next = document.getElementsByClassName(x + '_' + y)[0];
var snake_head = document.getElementsByClassName(x + '_' + y)[0];

var items = document.getElementsByClassName('s');
var len = items.length
//  xy = x + '_' + y;
  x = 0;
  y = 0;


//var next = document.getElementsByClassName(x + '_' + y)[0];
//next[0].classList.add('s')
//next[0].classList.toggle("s")


function snake() {
  snake = document.getElementsByClassName('s');
  long = snake.length      //длинна заполненной змейки
  snake[0]              //первая заполненная ячейка
  snake[0].classList.remove('s') // удаляет первую ячейку

  if (long > 3) {
    snake[0].classList.remove('s')
  }
}




//document.getElementsByClassName('s')[0].getAttribute('data-n')





var step = function(){
  setTimeout(step, 200); // циклически выполняем шаги один за одним, вызывая функцию саму из себя
                         // описываем один шаг тут
  next = document.getElementsByClassName(x + '_' + y)[0];

  if (x > 9 && y > 9) {
    x = 0;
    y = 0;
    console.log ('End')
  }

  else if (y <= 9) {
    next.classList.toggle("s");
    ++y
  }

  else if (y > 9) {
    y = 0;
    next.classList.toggle("s");
    ++x;
  }
}
//step(); 

var move_up = function() {
  x--
}



/* Обработчика клавиш  */

var butt = function(){
  document.body.onkeydown = function(event){
    snake_head = document.getElementsByClassName(x + '_' + y)[0];

    y = (y > 9) ? 0 : y;
    y = (y < 0) ? 9 : y;
    x = (x > 9) ? 0 : x;
    x = (x < 0) ? 9 : x;


    if (event.keyCode == 37) {
      console.log ('KeyLeft')
      y--
      snake_head.classList.toggle("s");
    }

    if (event.keyCode == 38) {
      console.log ('KeyUp')
      x--
      snake_head.classList.toggle("s");
    }

    if (event.keyCode == 39) {
      y++
      snake_head.classList.toggle("s");
      console.log ('KeyRight')
    }

    if (event.keyCode == 40) {
      snake_head.classList.toggle("s");
      x++
      console.log ('KeyDown')
    };
  };
};
butt();

/* ---End---  */




















/*var step2 = function() {
    var timerId = setTimeout(function tick() {
      if (y <= 9) {
        document.getElementsByClassName(x + '_' + y)[0].classList.toggle("s")
        y++ 
      };
    console.log( "тик" );
    console.log( "тик второй" );
    timerId = setTimeout(tick, 5000);
  }, 5000);
}
step2();*/

/*var step3 = function() {

  var timerId = setInterval(function() {
      if (y <= 9) {
        document.getElementsByClassName(x + '_' + y)[0].classList.toggle("s")
        y++ 
      };
    console.log( "тик" );
    console.log( "тик второй" );
  }, 2000);

}*/
//step3();







/*(function(width, height, length, current, dx, dy, x, y, hasFood, newEl){     
    
document.body.onkeydown = function(e){
    dx = (e.keyCode - 38) % 2, dy = (e.keyCode - 39) % 2;
};
    
var timer = setInterval(function () {
    x = (x + dx) < 0 ? width - 1 : (x + dx) % width; 
    y = (y + dy) < 0 ? height - 1 : (y + dy) % height;
    newEl = document.getElementsByClassName(y + '_' + x)[0]
    if(newEl.className.indexOf('s') > 0) {
      clearInterval(timer), alert('Game Over! Score: ' + length)
    };
    if(newEl.className.indexOf('f') > 0) {
      newEl.className = newEl.className.replace(' f', ''), length++, hasFood = false;
    }
    newEl.className += ' s', newEl.setAttribute('data-n', current++);

    for(var i = 0, min = Infinity, item, items = document.getElementsByClassName('s'), len = items.length; i < len && len > length; i++)
      if(+items[i].getAttribute('data-n') < min)
        min = +items[i].getAttribute('data-n'), item = items[i];

    if(!!item) item.className = item.className.replace(' s', '');

    for(var fItem, fX, fY; !hasFood; fX = Math.round(Math.random() * 10 % width), fY = Math.round(Math.random() * 10 % height))
      if(!!fX && !!fY && document.getElementsByClassName(fY + '_' + fX)[0].className.indexOf('s') < 0)
        hasFood = true, document.getElementsByClassName(fY + '_' + fX)[0].className += ' f';
}, 1000);

})(10, 10, 5, 1, 1, 0, 0, 0, false, null);*/