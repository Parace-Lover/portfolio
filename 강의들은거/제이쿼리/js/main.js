$(function(){
    $('.gallery li').each(function(index, el){//갤러리 li한테 각각 할일(el = li)
        $(el).mouseenter(function(){  // li 에 마우스를 가져다 댈시 할일
            $(this).find('video')[0].play() // 마우스 가져다 댄 li(this) 안에 video 찾아서 재생
        })
        $(el).mouseleave(function(){ //li에 마우스 사라지면 할일.
            $(this).find('video')[0].pause()  // 마우스 가져다댄 li 안에 비디오 스탑!
            $(this).find('video')[0].currentTime = 0 // 그 비디오가 재생시간(시작)이 0초부터
        })
        $(el).click(function(){//li를 클릭하면 할일.
            //li에 있는 정보를 가지고 온다.
            const title = $(this).find('h3').text() // 클릭한 li 안에 있는 h3 텍스트 부분 title에 넣기
            const text = $(this).find('p').text() // 클릭한 li 안에 있는 p 텍스트 부분 text에 넣기.
            const videoSrc = $(this).find('video').attr('src') // 클릭한 li 안에 있는 비디오의 src 속성을 videoSrc 에 넣기
            
            // popup 에 있는 태그들한테 입력.
            $('.popup').find('h2').text(title) // popup 안에 있는 h2의 텍스트 부분을 타이틀로 설정.
            $('.popup').find('p').text(text) // popup 안에 있는 p 의 텍스트 부분을 text로 설정
            $('.popup').find('video').attr('src', videoSrc) // popup 안에 있는 video src 속성부분을 videoSrc로 설정

            $('.popup').addClass('on')// popup에 on 클래스 추가 (on 클래스 : left : 0, opacity : 1 )
            $('.popup').find('video')[0].play()// popup 안에 있는 video 재생하기.
        })
    })

    $('.popup button').click(function(){ // popup 에 있는 button 클릭했을 때 할일
        $('.popup').removeClass('on') // popup 의 on 클래스 삭제 (on이 삭제되므로 left : -100%, opacity : 0 으로 됨)
        $('.popup').find('video')[0].pause()  // popup 안에 있는 video 멈춤!
    })
})