var img = document.getElementById("img");
var txt = document.getElementById("txt");
var txt1 = document.getElementById("txt1");

function show() {
  img.style = "display:block";
  txt.style = "display:none";
  txt1.style = "display:block";
}
function redirect0() {
  location.href = "./html 1.html";
}
function redirect() {
  location.href = "./html 6.html";
}

function redirect1() {
  location.href = "./html 7.html";
}
function redirect2() {
  location.href = "./html 8.html";
}

function restart() {
  var yes = confirm("do you want to restart");
  if (yes) {
    location.href = "./html 0.html";
  }
}
