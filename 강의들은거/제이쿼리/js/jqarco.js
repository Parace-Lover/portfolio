$(function(){
  $('.question').click(function(){
    $(this).next().slideToggle().siblings('.answer').slideup()
  })
})