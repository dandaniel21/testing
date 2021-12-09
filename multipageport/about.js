const fadeAboutImage = document.getElementsByClassName("about-image")[0];
const fadeAboutTable = document.getElementsByClassName("about-table")[0];
const fadeAboutLorem = document.getElementsByClassName("about-lorem")[0];
const aboutContainer = document.getElementsByClassName("about-container")[0];
const observerAbout = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

    if (entry.isIntersecting) {
    fadeAboutImage.classList.add("transition");  
    fadeAboutTable.classList.add("transition");
    fadeAboutLorem.classList.add("lorem-transition");
    return;
    }
    });
},
);
observerAbout.observe(aboutContainer);

const fadeLogo = document.getElementsByClassName("skill-logo")[0];
const observerLogo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

    if (entry.isIntersecting) {
    fadeLogo.classList.add("transition");
    return;
    }
    });
},
);
observerLogo.observe(fadeLogo);

const fadeEduList = document.getElementsByClassName("education-list");
const eduWrap = document.getElementsByClassName("education-wrapper")[0];
const observerEdu = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

    if (entry.isIntersecting) {
        for (i=0;i<fadeEduList.length;i++) {
            fadeEduList[i].classList.add("transition");
        } 
    return;
    }
    });
},
);
observerEdu.observe(eduWrap);

const fadeExpList = document.getElementsByClassName("experience-list");
const expWrap = document.getElementsByClassName("experience-wrapper")[0];
const observerExp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

    if (entry.isIntersecting) {
        for (i=0;i<fadeExpList.length;i++) {
            fadeExpList[i].classList.add("transition");
        }

    return;
    }
    });
},
);
observerExp.observe(expWrap);

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

