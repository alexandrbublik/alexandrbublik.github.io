$(".menu_item a").click(function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    $(".menu_item a").removeClass('active');
    $(this).addClass('active');
    // плавный переход по якорю
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href');
    if(id!='#'){    
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    };
});