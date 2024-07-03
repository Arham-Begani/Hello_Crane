var image = document.getElementById("Moving_gif");
 var imageLeft = 0;
 function move(){
     imageLeft++;
     image.style.left = imageLeft + "px";

 }
 setInterval(move, 0);


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const logoElement = document.querySelector('.logo');
const movingImage = document.getElementById('moving-image');

logoElement.addEventListener('mouseover', () => {
  movingImage.style.top = '100px';
  movingImage.style.left = '100px';
  movingImage.style.opacity = '1';
});

logoElement.addEventListener('mouseout', () => {
  movingImage.style.top = '0';
  movingImage.style.left = '0';
  movingImage.style.opacity = '0';
});