setInterval(() => {
    if(document.querySelector('.text_c92e')!=null){
        document.querySelector('.text_c92e').innerHTML = 'У вас есть какие-то вопросы?';
    };
}, 5000);

onclick = function(e) {
    if(e.target.classList.contains('swiper-slide')){
        document.querySelector('.swiper').style.display = 'none';
    } else if(e.target.id=='aboutProduct'){
        document.querySelector('.swiper').style.display = 'flex';
    };
};