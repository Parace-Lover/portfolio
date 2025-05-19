$(function(){
    $('#jongwoo').fullpage({
        anchors : ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor : ['#aaa','#bbb','#ccc','#ddd','#eee'],
        navigation : true, 
        NavigationTooltips : ['메뉴1','메뉴2','메뉴3','메뉴4', '메뉴5','푸터'],
        NavigationPosition : 'left',
        responsiveWidth : 1000,
        afterLoad : function(anchorslink, index){
            console.log(index)
            if(index == 5){
                alert('굿굿')
        }
        if(index == 2 ){
            $('header').css({
                'background-color' : 'yellow'
            })
        }else {
            $('header').css({
                'background-color' : 'green'
            })
         }
       }
    })
})