"use strict"  
document.addEventListener("DOMContentLoaded", function(event) {

var images = document.getElementsByTagName("img");
for (var i = images.length - 1; i >= 0; i--) {
  var img = images[i];
  img.addEventListener("click", function(e) {
  var target = e.target;
  var value = target.getAttribute('value');
  if(value == 0) {
    target.src = "./images/"+target.getAttribute('id')+"1.jpg";
    target.setAttribute('value','1');
  }
  else {
    target.src = "./images/"+target.getAttribute('id')+".jpg";
    target.setAttribute('value','0');
  }
 },false);
}
var button = document.getElementsByClassName("button")[0];
button.addEventListener("click",feed,false);
console.dir(button);


});
function feed () {
  // init
  var cats = document.getElementsByClassName("cat");
  for (var i = cats.length - 1; i >= 0; i--) {
    cats[i].style.border = '3px solid #DDD';
  };

  var inputText = document.getElementsByClassName("text")[0];
  var select_category = document.getElementsByClassName(inputText.value);
  //class
  for (var i = select_category.length - 1; i >= 0; i--) { 
    select_category[i].style.border = '3px solid rgba(42, 242, 42, 1)';
    //
  }
  // id
  var checked = document.querySelector('input[name="selectCat"]:checked').value;
  console.dir(checked);

  switch(checked) {
    case "All":
      for (var i = cats.length - 1; i >= 0; i--) {
        cats[i].style.border = '3px solid rgba(42, 242, 42, 1)';
      };
      break;
    case "None":
      break;
    default:
      document.getElementById(checked).style.border = '3px solid rgba(42, 242, 42, 1)';
      break;
  } 
 


}


