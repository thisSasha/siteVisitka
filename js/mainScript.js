setInterval(() => {
    if (document.querySelector('.text_c92e') != null) {
        document.querySelector('.text_c92e').innerHTML = 'У вас есть какие-то вопросы?';
    };
}, 500);
let video = document.querySelector('video');
let videoPopup = document.querySelector('.popupVideo');
videoPopup.onclick = function (e) {
    if (e.target.classList.contains('popupVideo')) {
        videoPopup.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    };
};
video.onended = function () {
    videoPopup.style.display = 'none';
    video.pause();
    video.currentTime = 0;
};
document.body.style.fontSize = document.body.offsetWidth / 102.2 + 'px';