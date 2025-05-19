$(function(){
    let dial_num = 1
    const max_num = 8
    $('.tv-dial').click(function(){
        $('.tv-dial').css({
            'transform' : `rotate(${45*dial_num}deg)`
        })
        if(dial_num >= max_num){
            dial_num = 0
        }
        $('.tv-channel').removeClass('on')
        $('.tv-channel').eq(dial_num).addClass('on')
        dial_num++
    })
})