const alarmSound = new Audio('alarmsound.mp3');
function getTime() {
 let date = new Date();
 let hours = date.getHours();
 let minutes = date.getMinutes();
 let seconds = date.getSeconds();
 let ampm = hours >= 12 ? 'PM' : 'AM'; 


hours = hours % 12;
hours = hours ? hours : 12;

minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

 let timeString = hours + ':' + minutes + ':' + seconds;
 let ampmString = ampm;

document.getElementById("time").innerHTML = timeString;
document.getElementById("ampm").innerHTML = ampmString;

setTimeout(getTime, 1000);
}

function setAlarm() {
 let alarmTime = document.getElementById("alarmTime").value;

if (alarmTime) {
  let now = new Date();
  let alarm = new Date(now.toDateString() + " " + alarmTime);

  let difference = alarm - now;

  if (difference < 0) {
   difference += 24 * 60 * 60 * 1000; 
  }

  setTimeout(function() {
    alarmSound.play();
    /*alert("¡ despierta... ya es hora !");*/
  }, difference);
 }
}

window.onload = function() {
  getTime();
}