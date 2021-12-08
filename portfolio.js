const fadePort = document.getElementsByClassName("item");
const portWrap = document.getElementsByClassName("portfolio-container")[0];
const observerPort = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

    if (entry.isIntersecting) {
        for (i=0;i<fadePort.length;i++) {
            fadePort[i].classList.add("transition");
        }
    return;
    }
    });
},
);
observerPort.observe(portWrap);


function todayDate(){
    var d = new Date();
    var n = d.getFullYear() + "  ";
    return document.getElementById("date").innerHTML = n;
  }

const fadeNav = document.getElementsByTagName("nav")[0];
const inFooter = document.getElementsByTagName("footer")[0];
const observerNav = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

    if (entry.isIntersecting) {
    fadeNav.classList.add("transition");
    return;
    }
    fadeNav.classList.remove("transition");
    });
},
);
observerNav.observe(inFooter);