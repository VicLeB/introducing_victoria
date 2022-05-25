const imageTextContainer = document.getElementsByClassName('image-text-container');
const imageEffect = document.getElementsByClassName('image');

document.addEventListener('keydown', event => {
    if (event.key === "ArrowUp"){
        imageTextContainer[0].style.opacity = '100%';
        imageEffect[0].style.filter= 'blur(6px)';

    } else if (event.key === "ArrowLeft"){
        imageTextContainer[1].style.opacity = '100%';
        imageEffect[1].style.filter= 'blur(6px)';

    } else if (event.key === "ArrowRight"){
        imageTextContainer[3].style.opacity = '100%';
        imageEffect[3].style.filter= 'blur(6px)';

    } else if (event.key === "ArrowDown"){
        imageTextContainer[2].style.opacity = '100%';
        imageEffect[2].style.filter= 'blur(6px)';
    }
});


