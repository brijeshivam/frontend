

async function getQuote(link) {
  let myObject = await fetch(link);
  let myJson = await myObject.json();
  for (var key in myJson) {
    //alert("Key: " + key + " value: " + jsonObj[key]);
    if (key == "content") {
      document.getElementById("h1").innerHTML = myJson[key];
    }
  }
}
function reload() {
  location.reload();
}
// function imageLoad() {
//   var image = document.getElementById("image");
//   var downloadingImage = new Image();

//   downloadingImage.onload = function () {
//     image.src = this.src;
//   };
//   downloadingImage.src = stringModify();
// }

function stringModify() {
  var link =
    "https://source.unsplash.com/" +
    window.innerWidth +
    "x" +
    window.innerHeight +
    "/?nature";

  return link;
}

window.addEventListener("load", () => {
  var image = document.getElementById("image");
  var downloadingImage = new Image();

  downloadingImage.onload = function () {
    image.src = this.src;
    getQuote("https://api.quotable.io/random?");
  };
  downloadingImage.src = stringModify();
  
});
