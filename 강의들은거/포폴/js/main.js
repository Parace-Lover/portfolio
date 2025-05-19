(function(){
  const spanEl = document.querySelector('main h2 span')
  const  textArr = ['영상편집자', '디자이너','한빈바보','웹퍼블리셔']

  let index = 0;
  let currentTxt = textArr[index].split("")

  function writeTxt(){
    spanEl.textContent +=currentTxt.shift()
    if(currentTxt.length !== 0){
       setTimeout(writeTxt,Math. floor(Math.random()*100))
    }else{
     currentTxt =spanEl.textContent.split("")
     setTimeout(deleteTxt, 3000)
    }
  }
  function deleteTxt(){
      currentTxt.pop()
      spanEl.textContent = currentTxt.join("")
      if(currentTxt.length !== 0){
         setTimeout(deleteTxt, Math.floor(Math.random()*100))
      }else{
           index = (index+1) % textArr.length
           currentTxt = textArr[index].split("")
           writeTxt()
      }
  }
  writeTxt()
})()

const headerEl = document.querySelector('header')

window.addEventListener('scroll', function(){
    if(window.scrollY > 0){
        headerEl.classList.add('on')
    }else {
        headerEl.classList.remove('on')
    }
})


const animationMove = function(selector){
    const targetEl = document.querySelector(selector)
    const bs = window.scrollY
    const targetSy = targetEl.getBoundingClientRect().top + bs
    window.scrollTo({
        top : targetSy,
        behavior : 'smooth'
    })
}

const scrollMove = document.querySelectorAll('[data-animation-scroll="true"]')
for(let i = 0; i < scrollMove.length; i++){
    scrollMove[i].addEventListener('click',function(){
        const target = this.dataset.target
        animationMove(target)
    })

}