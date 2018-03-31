import $ from 'jquery'
export function carousel(){
      //小轮播图
  var smallAs = $('#smallCarousel').find('a');
  var index = 0;
  var timer = 0;
  changeImg(1);
  setTimer();
  function setTimer(){
      timer = setInterval(function(){
          changeImg(1);
      },2000);
  }
  $(smallAs).mouseenter(function(){
     clearInterval(timer);
  });
  $(smallAs).mouseleave(function(){
     setTimer();
  });
  $('#leftBtn').click(function(){
      changeImg(-1);
  });
  $('#rightBtn').click(function(){
      changeImg(1);
  });
  
  function changeImg(num){
      if(smallAs.eq(index).is(':animated')){
          return;
      }
      smallAs.eq(index).fadeIn(1000);
      index += num;
      smallAs.eq(index).fadeOut(1000);
      if(index > smallAs.length){
          index = 0;
      }
      if(index < 0){
          index = smallAs.length;
      }
  }
   //大轮播图
   var bigAs = $('#bigCarousel').find('.bigCover');
   bigAs[0].innerHTML+=bigAs.html();
   var a = 0;
   setInterval(move,2000);
   function move(){
       a ++;
       if(a > 3){
           a = 0;
           bigAs.css('left',0);
       }
       bigAs.animate({left:-750*a},1000);
   }
   
}