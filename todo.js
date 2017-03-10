//The var's in this page are what creates the variables that we will be adding 
//so we can interact with them
//The getElementById is what pulls the elements associated with the variable and
//makes them interactable.

var inp = document.getElementById("inp");
var btn = document.getElementById("btn");
var disp = document.getElementById("disp");
var coloring = document.getElementById("coloring");
var clearBtn = document.getElementById("clearBtn");
btn.addEventListener("click", function() {
  
  //These values are what gives the drop down values any meaning. It allowes the 
  //user to actually change the color of whatever the user writes.
  if (coloring.value === "black") {
    
    disp.innerHTML += "<div style='color:#000000'>" + inp.value + "</div>";
  }

  else if (coloring.value === "red") {
    disp.innerHTML += "<div style='color:#ff0000'>" + inp.value + "</div>";
  }

  else if (coloring.value === "blue") {
    disp.innerHTML += "<div style='color:#0000ff'>" + inp.value + "</div>";
  }

  else if (coloring.value === "white") {
    disp.innerHTML += "<div style='color:#FFFFFF'>" + inp.value + "</div>";
  }
});

// This lets the user delete their work by clicking on what they want to delete
disp.addEventListener("click", function(evt) {
    evt.target.parentNode.removeChild(evt.target);
});

//  This is what makes the user to be able to click the clear work button that
//deletes all the users work
clearBtn.addEventListener("click", function() {
  disp.innerHTML = "";
});
