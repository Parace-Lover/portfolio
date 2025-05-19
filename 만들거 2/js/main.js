(function(){
  const spanEl = document.querySelector('h1 span')
  const  textArr = ['Magazine', 'Introduce','Portfolio','Journal']

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