$(function(){
  $('.popup-btn').click(function(){
    $('.popup-btn a').toggleClass('on')
    $('.popup-btn i').toggleClass('fa-arrow-up fa-arrow-down')
    $('.popup-txt').slideToggle()
  })
})