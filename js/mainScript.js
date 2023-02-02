setInterval(() => {
    if(document.querySelector('.text_c92e')!=null){
        document.querySelector('.text_c92e').innerHTML = 'У вас есть какие-то вопросы?';
    };

}, 5000);
(function(){
    new InstagramFeed({
        'username': 'aromaltis',
        'container': document.getElementById("insta"),
        'display_profile': true,
        'display_biography': true,
        'display_gallery': true,
        'display_captions': true,
        'max_tries': 8,
        'callback': null,
        'styling': true,
        'items': 8,
        'items_per_row': 4,
        'margin': 1,
        'lazy_load': true,
        'on_error': console.error
    });
})();