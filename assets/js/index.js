mybutton = document.getElementById("backToTop")

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else  {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

mybutton.addEventListener('click', topFunction)

/////////// Fin du backtoTop ///////////////////





  //// EFFET TYPING sur le text de présentation ////
  
//   function typeEffect(element, speed) {
//     var text = element.innerHTML;
//     element.innerHTML = "";
    
//     var i = 0;
//     var timer = setInterval(function() {
//       if (i < text.length) {
//         element.append(text.charAt(i));
//         i++;
//       } else {
//         clearInterval(timer);
//       }
//   }, speed);
// }
// // application
// var speed = 15;
// //var h1 = document.querySelector('h1');
// var p = document.querySelector('p');
// var delay = p.innerHTML.length * speed + speed;

// // type affect to header
// //typeEffect(h1, speed);


// // type affect to body
// setTimeout(function(){
//   p.style.display = "inline-block";
//   typeEffect(p, speed);
// }, delay);



