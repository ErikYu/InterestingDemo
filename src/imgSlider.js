function showZone() {
    if(!$('h3')) return false;
    var $next=$('h3');
    var $slideBanner=$('.slideBanner');
    $next.click(function () {
        if($slideBanner.css('left')!='-1600px'){
            $slideBanner.animate({'left':'-=800px'}, 1000);
        } else{
            $slideBanner.animate({'left':'0px'}, 1000);
        }
    });
};
addLoadEvent(showZone());