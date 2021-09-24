
        //鼠标移入nav>ul>li>a 让.dropdown实现下拉显示slideDown
        //移除.dropdown 让其隐藏
         //hover nav>ul>li 时 a变色 col-active
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
        