var targets = document.getElementsByClassName("target");
var airfield = document.getElementById("airfield");
var offset = {x: 0, y: 0};

for (var i = 0; i < targets.length; i++) {
  targets[i].addEventListener("mousedown", function(event) {
    event.preventDefault();
    offset.x = event.clientX - this.offsetLeft;
    offset.y = event.clientY - this.offsetTop;
    document.addEventListener("mousemove", moveTarget);
    document.addEventListener("mouseup", stopMovingTarget);
  });
}

function moveTarget(event) {
  var x = event.clientX - offset.x;
  var y = event.clientY - offset.y;
  var maxX = airfield.clientWidth - this.clientWidth;
  var maxY = airfield.clientHeight - this.clientHeight;
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));
  this.style.left = x + "px";
  this.style.top = y + "px";
}

function stopMovingTarget() {
  document.removeEventListener("mousemove", moveTarget);
  document.removeEventListener("mouseup", stopMovingTarget);
}
