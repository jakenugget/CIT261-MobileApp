function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}
const myCanvas = document.getElementById('myCanvas');

function canvas() {
  var c = myCanvas.getContext('2d');
  c.fillstyle = 'rgba(255, 25, 52, 0.8)';
  
  c.fillRect(20, 10, 80, 140);
}

function canvas1() {
  var c = myCanvas.getContext('2d');
  c.fillstyle = 'rgba(150, 99, 200, 0.5)';
  c.beginPath();
  c.arc(190,110,40,0,2*Math.PI);
  c.stroke();
  c.fill;
}
