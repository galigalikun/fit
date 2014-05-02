function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "photo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.photo = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "photo"
    });
    $.__views.photo && $.addTopLevelView($.__views.photo);
    $.__views.header = Ti.UI.createImageView({
        image: "images/tuto2.jpg",
        id: "header"
    });
    $.__views.photo.add($.__views.header);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.header.addEventListener("click", function() {
        Titanium.Media.showCamera({
            success: function() {
                var conf = Alloy.createController("conf").getView();
                conf.open({
                    transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
                });
            },
            cancel: function() {
                alert("cancel");
            },
            error: function() {
                alert("error");
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    });
    $.photo.addEventListener("swipe", function(e) {
        switch (e.direction) {
          case "left":
            $.header.fireEvent("click");
            break;

          case "right":
            $.photo.close({
                transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
            });
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;