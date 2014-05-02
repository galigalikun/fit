$.header.addEventListener("click", function(e) {
    Titanium.Media.showCamera({
        success: function(e) {
            var conf = Alloy.createController('conf').getView();
            conf.open({
                transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
            }); 
        },
        cancel: function() {
           alert("cancel");
        },
        error: function(e) {
           alert("error");
        },
        saveToPhotoGallery: true,
        allowEditing: true,
        mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
    });
});

$.photo.addEventListener("swipe", function(e) {
    switch(e.direction) {
        case "left":
            $.header.fireEvent("click");
            break;
        case "right":
            $.photo.close({
                transition : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
            });
            break;
    }
});
