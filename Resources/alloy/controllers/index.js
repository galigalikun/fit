function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header = Ti.UI.createImageView({
        image: "images/tuto1.jpg",
        id: "header"
    });
    $.__views.index.add($.__views.header);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.header.addEventListener("click", function() {
        var photo = Alloy.createController("photo").getView();
        photo.open({
            transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
    });
    $.index.addEventListener("swipe", function(e) {
        switch (e.direction) {
          case "left":
            $.header.fireEvent("click");
            break;

          case "right":
            var top = Alloy.createController("top").getView();
            top.open({
                transition: Titanium.UI.iPhone.AnimationStyle.CURL_DOWN
            });
        }
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;