let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let setBtn = document.getElementById("set-btn");
let startBtn = document.getElementById("start-btn");
let Reset = document.getElementById("resetBtn");
let Stop = document.getElementById("stopBtn");

// let countdownDisp = document.getElementById("countdown-disp");

var HourEL = document.getElementById("hour-el");
var MinuteEl = document.getElementById("minutes-el");
var SecondsEl = document.getElementById("seconds-el");

setBtn.addEventListener("click", function () {
  display();
});
// setInterval(display, 1000);

// setBtn.addEventListener("click", function () {
//   function display() {
//     if (hour.value == false) {
//       hour.value = 0;
//       if (minutes.value == false) {
//         minutes.value = 0;
//         if (seconds.value == false) {
//           seconds.value = 0;
//         }
//       }
//     }
//     var Hr = hour.value;
//     var Min = minutes.value;
//     var Sec = seconds.value;
//     countdownDisp.innerHTML = `
//     ${Hr} : ${Min} : ${Sec}

//     `;
//   }

//   setInterval(display, 1000);
// });

function display() {
  if (hour.value == false) {
    hour.value = 0;
    if (minutes.value == false) {
      minutes.value = 0;
      if (seconds.value == false) {
        seconds.value = 0;
      }
    }
  }

  // var Hr = hour.value;
  // var Min = minutes.value;
  // var Sec = seconds.value;
  // countdownDisp.innerHTML = `
  // ${Hr} : ${Min} : ${Sec + "1"}

  // `;

  HourEL.textContent = hour.value + " : ";
  MinuteEl.textContent = minutes.value + " : ";
  SecondsEl.textContent = seconds.value;
}
// var Decrement = null;

startBtn.addEventListener("click", function () {
  function decrement() {
    if (hour.value == 0 && minutes.value == 0 && seconds.value == 0) {
      hour.value = 0;
      minutes.value = 0;
      seconds.value = 0;
    } else if (minutes.value == 0 && seconds.value == 0) {
      // seconds.value--;
      minutes.value = 59;
      seconds.value = 59;
      hour.value--;
    } else if (seconds.value != 0) {
      seconds.value--;
    } else if (minutes.value != 0 && seconds.value == 0) {
      seconds.value = 59;
      minutes.value--;
    } else if (hour.value != 0 && minutes.value == 0 && seconds.value == 0) {
      minutes.value = 59;
      seconds.value == 59;
      hour.value--;
    }
    return;
  }
  function startInterval() {
    startTimer = setInterval(function () {
      decrement();
      display();
    }, 1000);
  }
  startInterval();
});

setInterval(function () {
  display();
}, 1000);

// Stop.addEventListener("click", function () {
//   function stopInterval() {
//     clearInterval(startTimer);
//   }
//   stopInterval();
// });

function stopInterval() {
  clearInterval(startTimer);
}

Reset.onclick = function () {
  stopInterval();
  hour.value = 0;
  minutes.value = 0;
  seconds.value = 0;
};

// console.log("clicked");

// function ResetInterval() {
//   console.log("clicked!");
//   function Reset() {
//     startInterval();
//   }
//   Reset();
// }

// function stopInterval() {
//   return stopInterval();
// }
// stopInterval();

// function startInterval() {
//   function stopCounting() {
//     clearInterval(startTimer);
//   }
//   stopCounting();
// }
