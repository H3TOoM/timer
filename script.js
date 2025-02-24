function timer() {
  // variables declaration

  var sec = document.querySelector(".sec");
  var min = document.querySelector(".min");
  var hour = document.querySelector(".hour");
  var start = document.querySelector(".start");
  var reset = document.querySelector(".reset");

  var s = 0;
  var m = 0;
  var h = 0;

  // setInterval function

  function tim() {
    setInterval(function timStart() {
      s++;
      if (s === 60) {
        s = 0;
        m++;
        if (m === 60) {
          m = 0;
          h++;
        }
      }
      sec.innerHTML = s;
      min.innerHTML = m;
      hour.innerHTML = h;
    }, 1000);
  }

  // Buttons Events

  start.onclick  = tim
  reset.onclick = function () {
   location.relaod();
  }
}


// Calling Function

timer();
