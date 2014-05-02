$.header.addEventListener("click", function(e) {
    var photo = Alloy.createController('photo').getView();
    photo.open({
       transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    });
});

$.index.addEventListener("swipe", function(e) {
    switch(e.direction) {
        case "left":
            $.header.fireEvent("click");
            break;
        case "right":
            {
    var top = Alloy.createController('top').getView();
    top.open({
        transition : Titanium.UI.iPhone.AnimationStyle.CURL_DOWN
    });
            }
            break;
    }
});

$.index.open();
