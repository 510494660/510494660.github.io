        //鼠标移入nav>ul>li>a 让.dropdown实现下拉显示slideDown
        //移除.dropdown 让其隐藏
         //hover nav>ul>li 时 a变色 
        $('nav>ul>li').hover(function(){
            $(this).find('.dropdown').stop().slideDown();
            $(this).children().css('color','#e97730')
        },function(){
            $(this).find('.dropdown').stop().slideUp();
            $(this).children().css('color','#535353')
        })
        //点击 .sear  .search从右侧显示
        $('.sear').click(function(){
            $('.search').fadeIn()
            $('.sear').hide()
            $('.close').show()
            
        })
        //点击。close .search隐藏
        $('.close').click(function(){
            $('.search').stop().fadeOut()
            $('.close').stop().hide()
            $('.sear').stop().show()
            
        })

       //点击按钮 显示mask 让sidebar从右侧进入
       $('.shopbag').click(function(){
        $('body').css('overflow-y','hidden')
        $('.mask').fadeIn();
        $('.sidebar').animate({'right':0},1000)
    })
    $('.mask').click(function(){
        $('body').css('overflow-y','auto')
        $('.mask').fadeOut();
        $('.sidebar').animate({'right':-388},1000)
    })
        //点击cart-delt 删除
        $('.cart-delt').click(function(){
            $(this).parent().parent().remove();
        })

        //total 计算
        

        //全局btn：hover效果
        var newSpan = $("<span class='slide-bg'>")
        $('.slide-btn').hover(function(){
            //当.slide_btn hover的时候，新建一个叫.slide_bg 的span标签
            //并改其样式
            $(this).prepend(newSpan);
            $(newSpan).stop().animate({width:'100%'},500).css("left",0);
        },function(){
            $(newSpan).animate({width:0},500).css({"left":"auto","right":0})
        })
        
        // banner轮播

    var ind =0
    var num=$('.banner-con').length
$('.banner-but .left').click(function(event){
    event.preventDefault()
    //    console.log(num)
        ind= ind -1

        if(ind<0){
           ind =num-1
        }
        $('.banner-par .banner-con').eq(ind).fadeIn().siblings().fadeOut()

})
    $('.banner-but .right').click(function (event) {
        event.preventDefault()
        // console.log(num)
        ind = ind + 1

        if (ind >num-1) {
            ind = 0
        }
        $('.banner-par .banner-con').eq(ind).fadeIn().siblings().fadeOut()

    })




       






        //
        
        //点击back页面滚动到最顶端
        //滚动显示back nav
        $('.back').click(function(){
            $('html').animate({scrollTop:0},500)
        })
        $(window).scroll(function(){
            var scroll = $(window).scrollTop()
            if(scroll>300){
                console.log(1)
                $('.back').fadeIn()
                $('.header-bot').css({'top':0,'position':'fixed'})
            }else{
                $('.back').fadeOut()
                $('.header-bot').css({'top':0,'position':'relative'})
            }
        })

        //hover service-img img 变小
        $('.service-img').hover(function(){
            $(this).children().animate({width:'50%'},500)
        },function(){
            $(this).children().animate({width:'65%'},500)
        })



        
 