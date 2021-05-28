var input;
var out;
window.addEventListener("load", 
() => {
    input = document.getElementById("text");
    out = document.getElementById("here");
});
function showOutput() {
  var num = parseInt(input.value);
  out.innerHTML = "";
  for (i = 1; i <= num; i++) {
    for (j = 1; j <= i; j++) {
      out.innerHTML += "* ";
    }
    out.innerHTML += "<br/>";
  }
}


