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



