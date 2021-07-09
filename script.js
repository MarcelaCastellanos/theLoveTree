var treeW, treeH, centerX, centerY;
var clicked, animating = false;


$(window).on('load', function(e) {
    $('.bubbles').each(function () {
        $(this).css('display', "block");
    });

    init();

    $('.box').click(function(){
        if($(".noteBox").css('display') == 'none'){
            $(".noteBox").css('display', 'block');
            $(".noteLink").css('display', 'none');
            
        }
        else{
            $(".noteBox").css('display', 'none');
            $(".noteLink").css('display', 'block');
        }
    });


    $(".overlayBubble").click(function(){
      if(animating)
        return;
        if(clicked == $(this).parent().attr('id')){
            
            $(this).parent().css('z-index', 1);

            var overlay = $(this).parent().children( ".overlayBubble" );
            if(overlay.css('opacity') == 0){
                animating = true;
                $(this).parent().animate({
                    width: $(this).width()/2,
                    height: $(this).width()/2,
                    top: 0,
                    left: 0

                }, 1000, function(){
                    animating = false;
                    overlay.fadeTo(200, 1);
                });

            }
            var child = $(this).parent().children('.innerContent').get(0);
            if(child.tagName == "VIDEO"){
                if(!child.paused){
                    child.pause();
                }
            }

            clicked = null;

        }
        else{
            clicked = $(this).parent().attr('id');
            $('.bubbles').each(function () {
                $(this).css('z-index', 1);

                var overlay = $(this).children( ".overlayBubble" );
                if(overlay.css('opacity') == 0){
                    animating = true;
                    $(this).animate({
                        width: $(this).width()/2,
                        height: $(this).width()/2,
                        top: 0,
                        left: 0

                    }, 1000, function(){
                        animating = false;
                        overlay.fadeTo(200, 1);
                    });

                }
                var child = this.children[0];
                if(child.tagName == "VIDEO"){
                    if(!child.paused){
                        child.pause();
                    }
                }
            });

            $(this).parent().css('z-index', 0);
            var overlay = $(this);
            console.log(this);
            animating = true;
            overlay.animate({
                opacity: 0}, 200, function(){
                    $(this).parent().animate({
                        width: $(this).width()*2,
                        height: $(this).width()*2,
                        top: -$(this).width()/2,
                        left: -$(this).width()/2
        
                    }, 1000, function(){
                      animating = false;
                    });
                });

            var child = $(this).parent().children('.innerContent').get(0);
            if(child.tagName == "VIDEO"){
                if(child.paused){
                    child.play();
                }
                else{
                    child.pause();
                }
            }
            
        }
    })
    console.log( "ready!" );
}); 

$( window ).resize(function() {
    init();
    console.log($(".treeBG").width());
});


function init(){

    $('.bubbles').each(function () {

        $(this).css('z-index', 1);

        var overlay = $(this).children( ".overlayBubble" );
        if(overlay.css('opacity') == 0){
            $(this).animate({
                width: $(this).width()/2,
                height: $(this).width()/2,
                top: 0,
                left: 0

            }, 0, function(){
                overlay.fadeTo(0, 1);
            });

        }
        var child = this.children[0];
        if(child.tagName == "VIDEO"){
            if(!child.paused){
                child.pause();
            }
        }
    });
    treeW = $(".treeBG").width();
    treeH = $(".treeBG").height();
    
    centerX = $( window ).width()/2;
    centerY = $( window ).height()/2;

    $("#bubble1").width(treeH*0.13);
    $("#bubble1").height(treeH*0.13);
    $("#bubble1").css('transform', `translate(${centerX - $("#bubble1").width()/2 - (treeW*0.24)}px, ${centerY - $("#bubble1").height()/2 +(treeH*0.05)}px)`);

    $("#bubble2").width(treeH*0.2);
    $("#bubble2").height(treeH*0.2);
    $("#bubble2").css('transform', `translate(${centerX - $("#bubble2").width()/2 - (treeW*0.17)}px, ${centerY - $("#bubble2").height()/2 + (treeH * 0.25)}px)`);

    $("#bubble3").width(treeH*0.2);
    $("#bubble3").height(treeH*0.2);
    $("#bubble3").css('transform', `translate(${centerX - $("#bubble3").width()/2 - (treeW*0.13)}px, ${centerY - $("#bubble3").height()/2 - (treeH*0.17)}px)`);

    $("#bubble4").width(treeH*0.13);
    $("#bubble4").height(treeH*0.13);
    $("#bubble4").css('transform', `translate(${centerX - $("#bubble4").width()/2 + (treeW*0.025)}px, ${centerY - $("#bubble4").height()/2 - (treeH*0.3)}px)`);

    $("#bubble5").width(treeH*0.13);
    $("#bubble5").height(treeH*0.13);
    $("#bubble5").css('transform', `translate(${centerX - $("#bubble5").width()/2 + (treeW*0.1)}px, ${centerY - $("#bubble5").height()/2 +(treeH*0.05)}px)`);

    $("#bubble6").width(treeH*0.13);
    $("#bubble6").height(treeH*0.13);
    $("#bubble6").css('transform', `translate(${centerX - $("#bubble6").width()/2 + (treeW*0.13)}px, ${centerY - $("#bubble6").height()/2 + (treeH * 0.3)}px)`);

    $("#bubble7").width(treeH*0.2);
    $("#bubble7").height(treeH*0.2);
    $("#bubble7").css('transform', `translate(${centerX - $("#bubble7").width()/2 + (treeW*0.16)}px, ${centerY - $("#bubble7").height()/2  - (treeH*0.21)}px)`);

    $("#bubble8").width(treeH*0.2);
    $("#bubble8").height(treeH*0.2);
    $("#bubble8").css('transform', `translate(${centerX - $("#bubble8").width()/2 + (treeW*0.26) }px, ${centerY - $("#bubble8").height()/2 + (treeH*0.21)}px)`);

}