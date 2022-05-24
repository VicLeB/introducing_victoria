const puppyButton = document.getElementById('puppyButton');
const puppyImage = document.getElementById('puppy-image');
let isShowing = false;

puppyButton.addEventListener('click', function(){
    if (isShowing) {
        isShowing = false;
        puppyImage.style.display = "none";
    } else {
        isShowing = true;
        puppyImage.style.display = "block";
    }
});



