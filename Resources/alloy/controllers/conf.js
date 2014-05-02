function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "conf";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.conf = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "conf"
    });
    $.__views.conf && $.addTopLevelView($.__views.conf);
    $.__views.header = Ti.UI.createImageView({
        image: "images/conf.jpg",
        id: "header"
    });
    $.__views.conf.add($.__views.header);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.header.addEventListener("click", function() {
        var top = Alloy.createController("top").getView();
        top.open({
            transition: Titanium.UI.iPhone.AnimationStyle.CURL_DOWN
        });
    });
    $.conf.addEventListener("swipe", function(e) {
        switch (e.direction) {
          case "left":
            $.header.fireEvent("click");
            break;

          case "right":
            $.conf.close({
                transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
            });
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;