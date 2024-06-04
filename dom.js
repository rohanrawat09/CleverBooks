function navBar(){
    let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-80px"; // Adjust as needed
  }
  prevScrollpos = currentScrollPos;
}
}
navBar();
function countUp(){
    document.addEventListener('DOMContentLoaded', function() {
        const counters = document.querySelectorAll('.counter');
        const options = {
          threshold: 0.5
        };
      
        const counterObserver = new IntersectionObserver(function(entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const counter = entry.target;
              const target = +counter.getAttribute('data-target');
              const increment = 1; // Increment value
              const interval = 10; // Time between increments in milliseconds
      
              let count = 0;
              counter.innerText = count;
      
              const updateCounter = () => {
                count += increment;
                if (count < target) {
                  counter.innerText = count;
                  setTimeout(updateCounter, interval);
                } else {
                  counter.innerText = target;
                }
              };
      
              updateCounter();
            }
          });
        }, options);
        counters.forEach(counter => {
          counterObserver.observe(counter);
        });
      });
}
countUp();
function boutton(){
var c1 = document.querySelector(".class1");
var c2 = document.querySelector(".class2");
var btn = document.querySelector(".icon");

var toggled = false;

btn.addEventListener("click", function() {
    if (!toggled) {
        c1.style.transform = "scale(0)";
        c2.style.transform = "scale(1)";
        toggled = true;
    } else {
        c1.style.transform = "scale(1)";
        c2.style.transform = "scale(0)";
        toggled = false;
    }
    // c2.style.opacity = "1";
    // c1.style.opacity = "0"
});
}
boutton();
function percent(){
var mc1 = document.querySelector("#mcounter1");
var mc2 =document.querySelector("#mcounter2");
var mc3 =document.querySelector("#mcounter3");
document.querySelector("#stock").addEventListener("click", function(){
    mc1.style.opacity = "1";
    mc2.style.opacity = "0";
    mc3.style.opacity = "0";
});
document.querySelector("#cash").addEventListener("click", function(){
    mc1.style.opacity = "0";
    mc2.style.opacity = "1";
    mc3.style.opacity = "0";
});
document.querySelector("#revenue").addEventListener("click", function(){
    mc1.style.opacity = "0";
    mc2.style.opacity = "0";
    mc3.style.opacity = "1";
});
}
percent();
document.addEventListener("DOMContentLoaded", function() {
  const toTopButton = document.getElementById('to-top');
  toTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});


