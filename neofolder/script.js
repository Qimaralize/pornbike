var vid = document.getElementById("myVideo");

vid.onmouseover = function() {
  vid.play();
}

vid.onmouseout = function() {
  vid.pause();
}