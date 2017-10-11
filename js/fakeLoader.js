/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT 
-----------------------------------------------------------------------*/
(function ($) {
 
    $.fn.fakeLoader = function(options) {

        //Defaults
        var settings = $.extend({
            timeToHide:1200, // fakeLoader消失的时间，单位毫秒。
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width 
            height:'100%', // Default Height
            zIndex: '999',  // Default zIndex 
            bgColor: '#2ecc71', // 全屏遮罩的背景颜色。可以是hex、RGB 或 RGBA 颜色值。
            spinner:'spinner7', // 加载时候的效果 可选的spinner：'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'。
            imagePath:'', // 如果你想自定义图片，使用该选项。
            fadeDiv:''
        }, options);

        //Customized Spinners
        var spinner01 = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
        var spinner02 = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
        var spinner03 = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
        var spinner04 = '<div class="fl spinner4"></div>'; 
        var spinner05 = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>'; 
        var spinner06 = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'; 
        var spinner07 = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'; 

        //The target
        var el = $(this);

        //Init styles
        var initStyles = {
            'position':settings.pos,
            'width':settings.width,
            'height':settings.height,
            'top':settings.top,
            'left':settings.left
        };

        //Apply styles
        el.css(initStyles);

        //Each 
        el.each(function() {
            var a = settings.spinner;
            //console.log(a)
                switch (a) {
                    case 'spinner1':
                            el.html(spinner01);   //是将此内容直接替换进 fakeloader 元素， 也可换成添加 el.append(spinner01);
                        break;
                    case 'spinner2':
                            el.html(spinner02);
                        break;
                    case 'spinner3':
                            el.html(spinner03);
                        break;
                    case 'spinner4':
                            el.html(spinner04);
                        break;
                    case 'spinner5':
                            el.html(spinner05);
                        break;
                    case 'spinner6':
                            el.html(spinner06);
                        break;
                    case 'spinner7':
                            el.html(spinner07);
                        break;
                    default:
                        el.html(spinner01);
                    }

                centerLoader();
                //Add customized loader image

                if (settings.imagePath !='') {

                    el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
                    centerLoader();
                }
        });

        //Time to hide fakeLoader
        setTimeout(function(){

            if(settings.fadeDiv != ''){
                $("#"+settings.fadeDiv).css("display","block");
            }

            $(el).fadeOut();   //加载后消失的动画效果 可改变
        }, settings.timeToHide);

        //Return Styles 
        return this.css({
            'backgroundColor':settings.bgColor,  //遮罩的背景颜色
            'zIndex':settings.zIndex
        });

 
    }; // End Fake Loader
 

        //Center Spinner
        function centerLoader() {

            var winW = $(window).width();
            var winH = $(window).height();

            var spinnerW = $('.fl').outerWidth();
            var spinnerH = $('.fl').outerHeight();

            $('.fl').css({
                'position':'absolute',
                'left':(winW/2)-(spinnerW/2),
                'top':(winH/2)-(spinnerH/2)
            });

        }

        $(window).load(function(){
                centerLoader();
              $(window).resize(function(){
                centerLoader();
              });
        });


}(jQuery));




