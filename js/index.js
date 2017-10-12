$(document).ready(function(){

    //页面开始前的动画效果
    $(".fakeloader").fakeLoader({
        timeToHide:1500,  //加载时间
        zIndex:999,
        bgColor:"#2ecc71",  //背景颜色
        spinner:"spinner5", //样式
        fadeDiv:"all"
    });



    var $top = $("#top");

    $top.css("display","none");
    // 监听滚动事件
    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $top.fadeIn(500);
        }
        else
        {
            $top.fadeOut(500);
        }
    });

    //当点击跳转链接后，回到页面顶部位置
    $top.click(function(){
        //$('body,html').animate({scrollTop:0},1000);
        if ($('html').scrollTop()) {
            $('html').animate({ scrollTop: 0 }, 600);
            return false;
        }
        $('body').animate({ scrollTop: 0 }, 600);
        return false;
    });





});


