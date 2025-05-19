$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>=300){
            $('.gotop').fadeIn()
        }else{
            $('.gotop').fadeOut()
        }
    })
    $('.gotop').click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop : 0
        }, 2000)
    })
})