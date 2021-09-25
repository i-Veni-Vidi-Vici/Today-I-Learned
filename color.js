/*스크립트 제외*/
var Links ={
     SetColor:function(color){
//     var alist= document.querySelectorAll('a');
//     var i =0;
//     while(i<alist.length){
//     alist[i].style.color =color;
//     i++;
// }
// } 
$('a').css('color',color);//이웹페이즈이 모든 a태그를 jQuery로 제어하겟다
}
}

var Body={
    setColor:function(color){
        // document.querySelector('body').style.color=color;
        $('body').css('color', color);
    }/*객체는 객체의 속성과 속성을 구분할때 콤마를찍는다*/
    ,SetBackgroundColor:function(color){
        //document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor',color);
    }
}



function nightDayHandler(self){
    var target = document.querySelector('body');
if(self.value==='night'){/*value값을 찾는것*/

Body.SetBackgroundColor('black');
Body.setColor('white');
self.value= 'day';
Links.SetColor('powderblue');


} else{
Body.SetBackgroundColor('white');
Body.setColor('black');
self.value= 'night';
 Links.SetColor('blue');

}
}
