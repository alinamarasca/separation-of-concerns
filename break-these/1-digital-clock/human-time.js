debugger; // once when the script is loaded

function showTime() {
  debugger; // once per second (while you are not paused in the debugger)

  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  // var session = 'AM';
  var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let today = weekday[date.getDay()];

  if (today == "Tuesday"){
    // let img = document.createElement('img');
    let img = document.createElement('IMG');
    console.log(img);
    // img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
    document.write('https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png')
    // document.getElementByTag('body').appendChild(img)
    today = `It's ${today} my dudes!` + img;
    
    
   ;
  }

//   var img = document.createElement('img');
//             img.src = 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
//             document.getElementById('body').appendChild(img);

  // if (h == 0) {
  //   h = 12;
  // }

  // if (h > 12) {
  //   h = h - 12;
  //   session = 'PM';
  // }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  var time = h + ':' + m + ':' + s + ' ' + today;
  document.getElementById('MyClockDisplay').innerText = time;
  document.getElementById('MyClockDisplay').textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
