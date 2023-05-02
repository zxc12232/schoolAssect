$(function(){    
    let j=0;    
    
    function isMobile() {
        try{ document.createEvent("TouchEvent"); return true; }      
        catch(e){ return false;}      
    }
    $('.ind-course-area main div').click(function(){
        j=$(this).index();
        if($(this).hasClass("active")){}
        else{            
            if(isMobile()){
                //行動裝置
                $('.ind-course-area main div').animate({width:"50%"},0.5).removeClass('active');
                $(this).animate({width:"70%"},200).addClass('active');
            }
            else{
                //電腦裝置
                $('.ind-course-area main div').animate({width:"20%"},0.5).removeClass('active');
                $(this).animate({width:"50%"},200).addClass('active');
            }
        }
    });

    
});
