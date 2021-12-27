const edits = document.querySelector('#fixers');
const touchUp = document.querySelector('#touchup');
const deleteHim = document.querySelector('#deletions');
const hindsight = document.querySelector('#hindsight');
const other = document.querySelector('#other');
console.log
touchUp.addEventListener('mouseenter', touchup);
function touchup(){
  const editPhotoBox = document.querySelector('.fixes')
  editPhotoBox.style.backgroundImage = "url(https://i.imgur.com/Igng04S.jpg)"
}
touchUp.addEventListener('mouseleave',returnOriginalImage);
function returnOriginalImage(){
  const editPhotoBox = document.querySelector('.fixes')
  editPhotoBox.style.backgroundImage = "url(https://i.imgur.com/u8mi5KG.jpg)"
}
deleteHim.addEventListener('mouseenter',displayDeletedImage);
function displayDeletedImage(){
  const editPhotoBox = document.querySelector('.fixes')
  editPhotoBox.style.backgroundImage = "url(https://i.imgur.com/UUghP4I.jpg)"
}
deleteHim.addEventListener('mouseleave',returnOriginalImage);
function returnOriginalImage(){
  const editPhotoBox = document.querySelector('.fixes')
  editPhotoBox.style.backgroundImage = "url(https://i.imgur.com/u8mi5KG.jpg)"
}

hindsight.addEventListener('mouseenter',displayGoose);
function displayGoose(){
  const editPhotoBox = document.querySelector('.fixes')
  editPhotoBox.style.backgroundImage = "url(https://i.imgur.com/fS9Cfrh.jpg)"
}
hindsight.addEventListener('mouseleave',returnOriginalImage);
function returnOriginalImage(){
  const editPhotoBox = document.querySelector('.fixes')
  editPhotoBox.style.backgroundImage = "url(https://i.imgur.com/u8mi5KG.jpg)"
}
other.addEventListener('mouseenter',displayNicePic);
function displayNicePic(){
  const editPhotoBox = document.querySelector('.fixes')
  editPhotoBox.style.backgroundImage = "url(https://i.imgur.com/UeKCGs8.jpg)"
}
other.addEventListener('mouseleave',returnOriginalImage);
function returnOriginalImage(){
  const editPhotoBox = document.querySelector('.fixes')
  editPhotoBox.style.backgroundImage = "url(https://i.imgur.com/u8mi5KG.jpg)"
}

function submitForm() {
  alert('Submit button pressed');
  return false; //do not submit the form
  event.preventDefault();
}

//const validateEmail = document.querySelector('#email')
//function EmailValidation(enteredEmail) {
  //var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  //if(enteredEmail.value.match(enteredEmail)) {
 // alert(“Yeah! a valid email!”);
 //document.form1.text1.focus();
// return true;
// }
//Else {
  //alert(“Sorry! an invalid email!”);
  //document.form1.text1.focus();
 // return false;
//}
//}
//console.log
