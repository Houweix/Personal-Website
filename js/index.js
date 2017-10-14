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




    //初始化aniview
    var options = {
        animateThreshold: 100
    }

    $('.aniview').AniView(options);





    var oContainer = document.getElementById("container1");
    var counter = 0;

    //循环生成所有的图片并预加载
    for(var i=0; i<9; i++){
        //图片预加载
        var oImg = new Image();
        oImg.onload = function(){
            counter++;
            if(counter == 9){
                loadSuccess();
            }
        };
        oImg.src = "img/"+(i + 1) +".jpg";
//            oImg.style.transform = "rotateY(0deg) translateZ(0)";
        //动态加入DOM结构
        oContainer.appendChild(oImg);
    }

    var num = 0;
    oContainer.onclick = function(){
        //num是一个系数，每次点击旋转的度数要乘以这个系数
        num++;
        oContainer.style.transform = "rotateY("+ num * 40 +"deg)";
    };


    function loadSuccess(){
        var aImg = oContainer.getElementsByTagName("img");
        for(var i=0; i<aImg.length; i++){
            aImg[i].style.transitionDelay = i * 100 + "ms";
            //拼接字符串的时候出现加法要加括号
            aImg[i].style.transform = "rotateY("+ (i + 1) * 40 +"deg) translateZ(270px)";
        }


    }



});


