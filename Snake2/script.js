var x, y, xy;

var one = document.getElementsByClassName(x + '_' + y)[0];
var next = document.getElementsByClassName(x + '_' + y)[0];
  x = 0;
  y = 0;




var step = function(){
  setTimeout(step, 100); // циклически выполняем шаги один за одним, вызывая функцию саму из себя
                         // описываем один шаг тут
  if (y <= 9) {
    next = document.getElementsByClassName(x + '_' + y)[0];
    next.classList.add("s")
    y++
  }

  else if (y = 9) {
    next.classList.add("s")
    x++;
    y = 0;
  }

  else if ((x == 2) && (y == 2)) {
    next.classList.add("s")
    y = 0;
    x = 0;
    console.log ('End')

  }


}
step(); 
