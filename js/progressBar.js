$(document).ready(function(){
  $(window).scroll(function(){

    var $post = $('#progress')
    var $postExecuted = false;
    var $postThreshold = $post.offset().top - 100;

    // service-item 나타내기
    if(!$postExecuted){
        if( $(this).scrollTop() > $postThreshold ){
            $post.addClass('active');
            $postExecuted = true;
          }
      }


    var $animation = $('#introduce_2')
    var $animationExecuted = false;
    var $animationThreshold = $animation.offset().top - 500;

    if(!$animationExecuted){
      if($(this).scrollTop() > $animationThreshold){
          $animation.addClass('active')
          $animationExecuted = true;
      }
    }

    var $animation = $('#planningCon')
    var $animationExecuted = false;
    var $animationThreshold = $animation.offset().top - 800;

    if(!$animationExecuted){
      if($(this).scrollTop() > $animationThreshold){
          $animation.addClass('active')
          $animationExecuted = true;
      }
    }



  });
});
