"use strict"  


document.addEventListener("DOMContentLoaded", function(event) {
  var img;
  var button = document.getElementsByClassName("button")[0];
  var images = document.getElementsByTagName("img");
  button.addEventListener("click",feed,false);
  // init img
  for (var i = images.length - 1; i >= 0; i--) {
    img = images[i];
    img.addEventListener("mousedown", up,false);
    img.addEventListener("mouseup", down,false);
  }
});

function up(e) {
  var target = e.target;
  var value = target.getAttribute('value');
  target.src = "./images/"+target.getAttribute('id')+"1.jpg";
  target.setAttribute('value','1');
}
function down(e) {
  var target = e.target;
  var value = target.getAttribute('value');
  target.src = "./images/"+target.getAttribute('id')+".jpg";
  target.setAttribute('value','0');
}

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


