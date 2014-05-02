$.header.addEventListener("click", function(e) {
    var top = Alloy.createController('top').getView();
    top.open({
        transition : Titanium.UI.iPhone.AnimationStyle.CURL_DOWN
    });
});

$.conf.addEventListener("swipe", function(e) {
    switch(e.direction) {
        case "left":
            $.header.fireEvent("click");
            break;
        case "right":
            $.conf.close({
                transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
            });
            break;
    }
});
