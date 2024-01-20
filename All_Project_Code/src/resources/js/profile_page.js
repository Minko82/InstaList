window.onbeforeunload = function(){
    window.scrollTo(0, 0)
  }
function closePicChoices(){
  window.scrollTo(0, 0)
  var pic = document.getElementById("pictures");
  var reg = document.getElementById("profile");
  pic.hidden = true;
  reg.hidden = false;
}
function openPicChoices(){
  window.scrollTo(0, 0)
  var pic = document.getElementById("pictures");
  var reg = document.getElementById("profile");
  pic.hidden = false;
  reg.hidden = true;
} 