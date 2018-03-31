import $ from 'jquery'
export function scroll(){
          //输入框随鼠标下滑
  $(window).scroll(function(){
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    if(top > 60){
      $('#header-bottom-content')[0].className='header-bottom-content fix';
    }else if(top < 60){
      $('#header-bottom-content')[0].className='header-bottom header-bottom-content';
    }
});
}