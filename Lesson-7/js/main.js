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
    }else{
        //анимируем переход на верх страницы за 1500 мс
        $('body,html').animate({scrollTop: 0}, 1500);
    }
});

$(document).ready(function(){
        var $menu = $("div#header_wrapper");
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("default").addClass("header_fixed").fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("header_fixed")) {
                $menu.fadeOut('fast', function(){
                    $(this).removeClass("header_fixed").addClass("default").fadeIn('fast');    
                });                
            }
        });//scroll
    });
