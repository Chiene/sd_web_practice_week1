"use strict"  
document.addEventListener("DOMContentLoaded", function(event) {

var images = document.getElementsByTagName("img");
for (var i = images.length - 1; i >= 0; i--) {
  var img = images[i];
  img.addEventListener("mousedown", function(e) {
    var target = e.target;
    var value = target.getAttribute('value');
    target.src = "./images/"+target.getAttribute('id')+"1.jpg";
    target.setAttribute('value','1');
   },false);
  img.addEventListener("mouseup", function(e) {
  var target = e.target;
  var value = target.getAttribute('value');
  target.src = "./images/"+target.getAttribute('id')+".jpg";
  target.setAttribute('value','0');
 },false);
  
}
var button = document.getElementsByClassName("button")[0];
button.addEventListener("click",feed,false);
});
//'3px solid #DDD'
//'3px solid rgba(42, 242, 42, 1)'
//checked = document.querySelector('input[name="selectCat"]:checked').value;
function feed () {
  var results ;
  var result_class;
  var className = document.getElementsByClassName('text')[0].value;
  var idName = document.querySelector('input[name="selectCat"]:checked').value;
  var cats = document.getElementsByClassName("cat");
  // init
  
  for (var i = cats.length - 1; i >= 0; i--) {
  cats[i].style.border = '3px solid #DDD';
  };


  if (className == '' ) { results = cats;}
  else { results = document.getElementsByClassName(className); };

  
  switch(idName) {
    case "All":
      for (var i = results.length - 1; i >= 0; i--) {
        results[i].style.border = '3px solid rgba(42, 242, 42, 1)';
      }
      break;
    default:
      results = document.getElementById(idName);
      result_class = results.className;
      if(result_class.indexOf(className) > -1) {
       results.style.border = '3px solid rgba(42, 242, 42, 1)';
      }

      break;
  }
}


