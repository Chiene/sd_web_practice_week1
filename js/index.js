"use strict"  
document.addEventListener("DOMContentLoaded", function(event) {
var theParent = document.querySelector("img");
console.log(theParent);
theParent.addEventListener("click", doSomething, false);
 
function doSomething(e) {
    
}


var images = document.getElementsByTagName("img");
for (var i = images.length - 1; i >= 0; i--) {
  var img = images[i];
  img.addEventListener("click", function(e) {
  var target = e.target;
  var value = target.getAttribute('value');
  if(value == 0) {
    target.src = "./images/"+target.getAttribute('id')+"1.jpg";
    target.setAttribute('value','1');
    //target.value = 1;
    console.log(value);
    
  }
  else {
    target.src = "./images/"+target.getAttribute('id')+".jpg";
    target.setAttribute('value','0');
    console.log(value);
  }

 },false);
};


});

function changeCatImage (cat_id) {
  
}

