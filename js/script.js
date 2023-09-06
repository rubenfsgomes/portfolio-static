function hideHeader() {
    var x = document.getElementById("header");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function fadeOutDiv() {
    var myDiv = document.getElementById("myDiv");
    myDiv.classList.add("hidden");
    setTimeout(function () {
      myDiv.style.display = "none";
    }, 500); 
  }