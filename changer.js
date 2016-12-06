// creates variables and saves DOM elements to each
var newBGcolor = document.getElementById("newBGcolor");
var colorChangeButton = document.getElementById("colorChangeButton");

/* Eventlistener for button.
    Sets the body's background color to the user provided value */

colorChangeButton.addEventListener("click",function(){
    document.body.style.backgroundColor = newBGcolor.value;

})