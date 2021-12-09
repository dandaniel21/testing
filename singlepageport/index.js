function todayDate(){
    var d = new Date();
    var n = d.getFullYear() + "  ";
    return document.getElementById("date").innerHTML = n;
  }

function setMenuOpen() {
  var topbar = document.getElementsByClassName("topbar")[0];
  var menu = document.getElementsByClassName("menu")[0];
  topbar.classList.toggle("active");
  menu.classList.toggle("active");
  // if (topbar.classList.contains("active")){
  //   topbar.classList.remove("active");
  // } else {
  //   topbar.classList.add("active");
  // }
}

function validateForm() {
    let classVal = document.getElementsByClassName("val");
    let engine = (idVal, index, message) => {
      if(document.getElementById(idVal).value == '') {
        classVal[index].innerHTML = message;
        document.getElementById(idVal).style.border = "2px solid red";
      } else {
        classVal[index].innerHTML = "";
        document.getElementById(idVal).style.border = "2px solid green";
      }
    }
    engine("email", 0, "*Please input your Email");
    engine("subject", 1, "*Please input your Subject");
    engine("message", 2, "*Please input your Messages");
    return false
}
  
