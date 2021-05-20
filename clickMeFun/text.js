var turn = 0;
function modalHide() {
  var modal = document.getElementById("timer");
  modal.style.display = "none";
  document.getElementById("text").style.display = "block";
  turn = 0;
}

function btn1() {
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  btn1.style.visibility = "hidden";
  btn2.style.visibility = "visible";
  btn1.innerHTML = "I'm Here";
  btn2.innerHTML = "I'm Here";

  if (turn > 2) {
    document.getElementById("timer").style.display = "block";
    document.getElementById("img").style.display = "block";
    document.getElementById("text").style.display = "none";
    document.getElementById("start").innerHTML = "Start Again!";
  }
  turn++;
}
function btn2() {
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  btn2.style.visibility = "hidden";
  btn1.style.visibility = "visible";
}
