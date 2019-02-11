var $one_page = $('.one_page'),
    $two_page = $('.two_page'),
    $three_page = $('.three_page'),
    $bg_box = $('.bg_box'),
    $music = $('#music'),
    $audio_btn = $('#audio-btn'),
    $media = $music.find('#media');
var first = document.getElementsByTagName("section")[0].getAttribute("data_one"),
    second = document.getElementsByTagName("section")[1].getAttribute("data_two"),
    third = document.getElementsByTagName("section")[2].getAttribute("data_three"),
    myAry=[first,second,third];
function load(){
    $media[0].play();
}
load();

var flag=false;
$audio_btn.click(function(){
       if(!flag){
           //$(this).css({"-webkit-animation-iteration-count":"0"});
           $(this).css({"-webkit-animation-play-state":"paused"});
           //音乐停止
           media.pause();
           flag=true;
       }else{
           //$(this).css({"-webkit-animation-iteration-count":"infinite"});
           $(this).css({"-webkit-animation-play-state":"running"});
           //音乐播放
           media.play();
           flag=false;
       }
   })

var startX = 0,
startY = 0,
index=0;

function touchStart(evt){
try{
    var touch = evt.touches[0], //获取第一个触点
            x = Number(touch.pageX), //页面触点X坐标
            y = Number(touch.pageY); //页面触点Y坐标
    //记录触点初始位置
    startX = x;
    startY = y;
}catch(e){
    console.log(e.message)
}
}

function touchMove(evt){
try{
    var touch = evt.touches[0], //获取第一个触点
            x = Number(touch.pageX), //页面触点X坐标
            y = Number(touch.pageY); //页面触点Y坐标
    //判断滑动方向
    console.log('startY',startY,'y',y);
    if (y - startY < 0) {
        console.log('上滑了！');
        // console.log(evt.target);
        // var mainView = myApp.addView('.view-main', {domCache: true});
        // evt.target.parentNode.parentNode.id.split('page')[1]=='page1'
        // evt.target.parentNode.parentNode.id=='page1'
        if(evt.target.parentNode.parentNode.id=='page1'){
            $one_page.css({
                transform:'translateY(-13.3rem)',
                transition:'transform 1.5s'
            })
            $two_page.show();
            $two_page.css({
                transform:'translateY(-13.3rem)',
                transition:'transform  1.5s forwards'
            })
        }
        else if(evt.target.parentNode.id || evt.target.parentNode.parentNode.id =='page2'){
            $two_page.css({
                transform:'translateY(-27.3rem)',
                transition:'transform  1.5s '
            })
            $three_page.show();
            $three_page.css({
                transform:'translateY(-26.7rem)',
                transition:'transform 1.5s '
            })
        }
    }else{
        if( y- startY > 0){
            if(evt.target.parentNode.parentNode.id=='page1'){
                return;
            }else if(evt.target.parentNode.id || evt.target.parentNode.parentNode.id =='page2'){
                console.log('下滑了！');
                $two_page.css({
                    transform:'translateY(0rem)',
                    transition:'transform  1.5s'
                })
                $one_page.css({
                    transform:'translateY(0rem)',
                    transition:'transform 1.5s'
                })
            }else if(evt.target.parentNode.parentNode.parentNode.parentNode.id || evt.target.parentNode.parentNode.parentNode.id || evt.target.parentNode.parentNode.id =='page3'){
                console.log('下滑了！');
                $three_page.css({
                    transform:'translateY(-13.3rem)',
                    transition:'transform  1.5s'
                })
                $two_page.css({
                    // display:'block',
                    transform:'translateY(-13.3rem)',
                    transition:'transform 1.5s forwards'
                })
            }
        }
        
    }
}catch(e){
    console.log(e.message);
}
}
function bindEvent(){
    document.addEventListener('touchstart',touchStart,false);
    document.addEventListener('touchmove',touchMove,false);
    // document.addEventListener('touchend',touchEnd,false);
}

bindEvent();
