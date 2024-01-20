window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}
function closePicChoices() {
  window.scrollTo(0, 0)
  var pic = document.getElementById("pictures");
  var reg = document.getElementById("reg");
  pic.hidden = true;
  reg.hidden = false;
}
function openPicChoices() {
  window.scrollTo(0, 0)
  var pic = document.getElementById("pictures");
  var reg = document.getElementById("reg");
  pic.hidden = false;
  reg.hidden = true;
}
function pickPic(num){
  ci =document.getElementById("currentPic");
  pfpInput = document.getElementById("pfp");
  var imgName;
  if(num==0){
    imgName = 'KermitPfp.png';
  }
  else if(num==1){
    imgName = 'MikePFP.png';
  }
  else if(num==2){
    imgName = 'PatrickPfp.png';
  }
  else if(num==3){
    imgName = 'SassyDog.png';
  }
  else{
    imgName = 'SassyPat.png';
  }
  ci.src = '../../resources/img/pfp/' + imgName;
  pfpInput.value = imgName;
  closePicChoices();
}

function remMes(id) {
  var input = document.getElementById(id);
  input.setCustomValidity("");
}

function checkMatch() {
  var myInput = document.getElementById("psw");
  var confirm = document.getElementById("cpsw");
  if (confirm.value == myInput.value) {
    confirm.setCustomValidity("");
  }
  else {
    confirm.setCustomValidity("Must match");
  }
}

function chkPsw() {
  var myInput = document.getElementById("psw");
  var passpswd = true;
  var message = "Must have:";
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var symbols = /$:|@|!|#|\$|%|\^|&|\*|\(|\)/g;
  var minLength = 8;
  var err = [];
  if (myInput.value.match(lowerCaseLetters)) {
  } else {
    passpswd = false;
    err.push("Lower Case");
  }
  if (myInput.value.match(upperCaseLetters)) {
  } else {
    passpswd = false;
    err.push("Upper Case");
  }
  if (myInput.value.match(numbers)) {
  } else {
    passpswd = false;
    err.push("Number");
  }
  if (myInput.value.match(symbols)) {
  } else {
    passpswd = false;
    err.push("Symbol");
  }
  if (myInput.value.length >= minLength) {
  } else {
    passpswd = false;
    err.push("Length >= " + minLength);
  }
  if (passpswd == true) {
    myInput.setCustomValidity("")
    checkMatch();
  }
  else {
    message = message + err[0]
    err.slice(1).forEach(element => {
      message = message + ", " + element;
    });
    myInput.setCustomValidity(message)
  }
}

function toggleDiet(){
  var diet = document.getElementById("diet");
  var prof = document.getElementById("prof");
  diet.hidden = !diet.hidden;
  prof.hidden = !prof.hidden;
}