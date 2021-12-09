function validateForm() {
      let classVal = document.getElementsByClassName("val");
      let engine = (idVal, index, message) => {
        if(!document.getElementById(idVal).value) {
          classVal[index].innerHTML = message;
          document.getElementById(idVal).style.border = "1px solid red";
        } else {
          classVal[index].innerHTML = "";
          document.getElementById(idVal).style.border = "1px solid green";
        }
      }
      engine("email", 0, "*Please input your Email");
      engine("subject", 1, "*Please input your Subject");
      engine("message", 2, "*Please input your Messages");
      return false;
}

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