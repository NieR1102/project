window.onload=function(){
    
    //轮播
    var mySwiper = new Swiper("#box",{
    //				direction:"vertical",
                    loop:true,
    //				speed:2000,
                    autoplay: {
                    delay: 3000,//1秒切换一次
                },
                    // 如果需要分页器
                    pagination: {
                      el: '.swiper-pagination',//指定分页器的元素对象
    //			      type:"progressbar",
                      clickable:true,
                      renderBullet:function(index,className){
                          //console.log(index,className);//swiper-pagination-bullet
                          return '<span class="' + className + '">' + (index + 1) + '</span>';;
                      }
                    },
                    // 如果需要前进后退按钮
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                    
                });

    //顶部盒子
                //显隐
                $(function(){
                    $('#toggle_hidebox').click(function(){
                        // $('#h_top').toggle();
                        
                        $('#h_top').toggle();
                        //盒子固定定位为啥不行呢
                        var iclass=$('#h_top').attr('display');
                        if(iclass=='block'){
                            $('#h_top').css({
                                position:fixed,
                                left:0,
                                top:0
                            }),
                            $('#header').css('top',312),
                            $('#nav').css('top',354)
                        }
                        else{
                            $('#header').css('top',0),
                            $('#nav').css('top',42)
                        }
                    });
                });
                //关闭盒子
                $(function(){
                    $('.closeh_box').click(function(){
                        $('#h_top').hide();
                    });
                });
    //二级菜单遮罩层
    
//    $(".first_menu > span").click(function(){
//        var iclass = $(this).attr("class");
//        if (iclass=="current"){
//            $(this).next().hide();
//        }else {
//            $(this).addClass("current").next().show()
//                    .parent().siblings()
//                    .children("a").removeClass("current").next().hide();  
//            return false;
//        }
//    });


   $(".first_menu> span").click(function(){  
       var iclass = $(this).attr("class");  
       if (iclass=="current"){  
           $(this).next().hide();  
       }else {  
           $(this).addClass("current").next().show()  
                   .parent().siblings()  
                   .children("span").removeClass("current").next().hide();
            $(this).next().css('width',$(document.body).outerWidth(true));
            $(this).next().css({
                position:'absolute',
                left:0,
                top:58
            })    
           return false;  
       }  
   }); 

    //有问题，遮罩层闪屏
     /* var Occlude=document.getElementById("Occlude");
    $('.list').on('mouseenter',function(){
            // box2.style.display = "block";
            Occlude.style.display = "block";
            Occlude.style.width = document.documentElement.clientWidth + "px";
            Occlude.style.height = document.documentElement.clientHeight + "px";
            document.body.style.overflow = "hidden";
    }) 
    $('.list').on('mouseleave',function(){
        Occlude.style.display = "none";
        document.body.style.overflow = "auto";
    })  */
    //回顶
                    function show() {
                    $(window).scroll(function () {
                        if ($(window).scrollTop() > 100) {
                            $("#btt").fadeIn(100);
                        } else {
                    $           ("#btt").fadeOut(100);
                                }
                    });
                }
                function backToTop() {
                    $('html,body').animate({scrollTop: 0}, 800);
                }
                $('#btt').on('click',function(){
                    backToTop();
                })
                show();
        
}
