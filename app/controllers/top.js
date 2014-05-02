var menuOpen = false;

$.menu.addEventListener("click", function(e) {
    if (menuOpen){
        moveTo="0";
        menuOpen=false;
    }else{
        moveTo="205dp";
        menuOpen=true;
    }

    $.mainview.width = Titanium.Platform.displayCaps.platformWidth;
    $.mainview.animate({
        right: moveTo,
        curve : Titanium.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 400
    });

});

$.photo.addEventListener("click", function(e) {
    var index = Alloy.createController('index').getView();
    index.open({
        transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    });
});
