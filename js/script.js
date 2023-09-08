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

function showDiv(div) {
    var div1, div2, div3, div4;

    // Get references to the four div elements
    div1 = document.getElementById("high-school");
    div2 = document.getElementById("gap-year");
    div3 = document.getElementById("university");
    div4 = document.getElementById("uapgo");
    
    // Hide all divs by default
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';

    // Show the selected div and hide the rest
    switch (div) {
        case 'hs':
            div1.style.display = 'grid';
            console.log("in")
            break;
        case 'gy':
            div2.style.display = 'block';
            console.log("in")

            break;
        case 'un':
            div3.style.display = 'block';
            break;
        case 'ua':
            div4.style.display = 'block';
            break;
    }
}
