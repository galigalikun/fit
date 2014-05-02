function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "top";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.top = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "top"
    });
    $.__views.top && $.addTopLevelView($.__views.top);
    $.__views.menuview = Ti.UI.createView({
        backgroundColor: "black",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "menuview"
    });
    $.__views.top.add($.__views.menuview);
    $.__views.menuviewheader = Ti.UI.createView({
        id: "menuviewheader"
    });
    $.__views.menuview.add($.__views.menuviewheader);
    $.__views.menutitle = Ti.UI.createLabel({
        text: "menu",
        id: "menutitle"
    });
    $.__views.menuviewheader.add($.__views.menutitle);
    $.__views.menulistrow = Ti.UI.createTableViewRow({
        id: "menulistrow"
    });
    var __alloyId1 = [];
    __alloyId1.push($.__views.menulistrow);
    $.__views.profile = Ti.UI.createButton({
        top: "0",
        right: "0",
        backgroundImage: "images/btn_profile.png",
        width: "205dp",
        height: "68.5dp",
        id: "profile"
    });
    $.__views.menulistrow.add($.__views.profile);
    $.__views.menulistrow = Ti.UI.createTableViewRow({
        id: "menulistrow"
    });
    __alloyId1.push($.__views.menulistrow);
    $.__views.photo = Ti.UI.createButton({
        top: "0",
        right: "0",
        backgroundImage: "images/btn_camera.png",
        width: "205dp",
        height: "68.5dp",
        id: "photo"
    });
    $.__views.menulistrow.add($.__views.photo);
    $.__views.menulistrow = Ti.UI.createTableViewRow({
        id: "menulistrow"
    });
    __alloyId1.push($.__views.menulistrow);
    $.__views.setting = Ti.UI.createButton({
        top: "0",
        right: "0",
        backgroundImage: "images/btn_settings.png",
        width: "205dp",
        height: "68.5dp",
        id: "setting"
    });
    $.__views.menulistrow.add($.__views.setting);
    $.__views.menulist = Ti.UI.createTableView({
        backgroundColor: "black",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        data: __alloyId1,
        id: "menulist"
    });
    $.__views.menuview.add($.__views.menulist);
    $.__views.mainview = Ti.UI.createView({
        backgroundColor: "white",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "mainview"
    });
    $.__views.top.add($.__views.mainview);
    $.__views.header = Ti.UI.createView({
        top: "0",
        left: "0",
        right: "0",
        bottom: "1",
        height: "63dp",
        width: Ti.UI.FILL,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#B4B4B4",
        id: "header"
    });
    $.__views.mainview.add($.__views.header);
    $.__views.search = Ti.UI.createButton({
        top: "5",
        left: "5",
        backgroundImage: "images/btn_search.png",
        width: "58dp",
        height: "58dp",
        visible: true,
        id: "search"
    });
    $.__views.header.add($.__views.search);
    $.__views.logo = Ti.UI.createImageView({
        top: "15",
        image: "images/logo.png",
        height: "29dp",
        visible: true,
        id: "logo"
    });
    $.__views.header.add($.__views.logo);
    $.__views.menu = Ti.UI.createButton({
        top: "5",
        right: "5",
        backgroundImage: "images/btn_menu.png",
        width: "58dp",
        height: "58dp",
        visible: true,
        id: "menu"
    });
    $.__views.header.add($.__views.menu);
    $.__views.nav = Ti.UI.createView({
        top: "63dp",
        left: "0",
        visible: true,
        id: "nav"
    });
    $.__views.mainview.add($.__views.nav);
    $.__views.buy = Ti.UI.createButton({
        top: "0",
        left: "0",
        backgroundImage: "images/btn_buy_off.png",
        width: "80dp",
        height: "68dp",
        id: "buy"
    });
    $.__views.nav.add($.__views.buy);
    $.__views.code = Ti.UI.createButton({
        top: "0",
        left: "80dp",
        backgroundImage: "images/btn_code_off.png",
        width: "80dp",
        height: "68dp",
        id: "code"
    });
    $.__views.nav.add($.__views.code);
    $.__views.news = Ti.UI.createButton({
        top: "0",
        left: "160dp",
        backgroundImage: "images/btn_news_off.png",
        width: "80dp",
        height: "68dp",
        id: "news"
    });
    $.__views.nav.add($.__views.news);
    $.__views.bookmark = Ti.UI.createButton({
        top: "0",
        left: "240dp",
        backgroundImage: "images/btn_bookmark_off.png",
        width: "80dp",
        height: "68dp",
        id: "bookmark"
    });
    $.__views.nav.add($.__views.bookmark);
    $.__views.contents = Ti.UI.createScrollView({
        backgroundColor: "#424242",
        borderWidth: 1,
        top: "126dp",
        left: "0",
        width: Ti.UI.FILL,
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: false,
        visible: true,
        id: "contents"
    });
    $.__views.mainview.add($.__views.contents);
    $.__views.test = Ti.UI.createImageView({
        image: "images/lineup_before.jpg",
        id: "test"
    });
    $.__views.contents.add($.__views.test);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var menuOpen = false;
    $.menu.addEventListener("click", function() {
        if (menuOpen) {
            moveTo = "0";
            menuOpen = false;
        } else {
            moveTo = "205dp";
            menuOpen = true;
        }
        $.mainview.width = Titanium.Platform.displayCaps.platformWidth;
        $.mainview.animate({
            right: moveTo,
            curve: Titanium.UI.ANIMATION_CURVE_EASE_OUT,
            duration: 400
        });
    });
    $.photo.addEventListener("click", function() {
        var index = Alloy.createController("index").getView();
        index.open({
            transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;