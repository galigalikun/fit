var compFlag = false;
var fit = "";

$.submit.addEventListener("click", function(e) {
    if(compFlag) {
        var top = Alloy.createController('top').getView();
        top.open({
            transition : Titanium.UI.iPhone.AnimationStyle.CURL_DOWN
        });
    } else if(fit.length == 0) {
        var dialog = Ti.UI.createAlertDialog({
            title: '身長を入力してください',
            cancel: 1,
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['OK', 'cancel']
        });
        dialog.addEventListener('click', function(e){
            Ti.API.info('e.text: ' + e.text);
            if (e.index == 0) {
                fit = e.text;
                if(fit.length > 0) {
                    chestAnimation();
                }
            }
        });
        dialog.show();
    }
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

var baseImage = Titanium.UI.createImageView({
    image: 'images/mask_green.png',
    width: Ti.UI.FILL,
    height: Ti.UI.FILL,
});

var cropView = Titanium.UI.createView({
    width: Ti.UI.FILL,
    height: Ti.UI.FILL,
});

cropView.add(baseImage);

var croppedImage = cropView.toImage();

var imageView = Titanium.UI.createImageView({
    image: croppedImage,
    width: Ti.UI.FILL,
    height: Ti.UI.FILL,
    visible: false,
    top: 0,
    left: 0,
});

var allowT = Titanium.UI.createImageView({
    image: 'images/arrow_r_t.png',
    top: 0,
    left: 0,
    width: 28,
    height: 19,
});

var allowB = Titanium.UI.createImageView({
    image: 'images/arrow_r_b.png',
    left: 0,
    bottom: 0,
    width: 28,
    height: 19,
});

var allowL = Titanium.UI.createImageView({
    image: 'images/arrow_g_l.png',
    visible: false,
    left: 0,
    width: 19,
    height: 28,
});

var allowR = Titanium.UI.createImageView({
    image: 'images/arrow_g_r.png',
    visible: false,
    right: 0,
    width: 19,
    height: 28,
});


var img1 = Ti.UI.createImageView({
    image: 'images/chest.png',
    width: 320/2,
    height: 200/2,
    top: 0*200/2,
    right: 0,
    transform: Ti.UI.create2DMatrix().scale(0),
});
var img2 = Ti.UI.createImageView({
    image: 'images/waist.png',
    width: 320/2,
    height: 200/2,
    top: 1*200/2,
    right: 0,
    transform: Ti.UI.create2DMatrix().scale(0),
});
var img3 = Ti.UI.createImageView({
    image: 'images/hip.png',
    width: 320/2,
    height: 200/2,
    top: 2*200/2,
    right: 0,
    transform: Ti.UI.create2DMatrix().scale(0),
});
var img4 = Ti.UI.createImageView({
    image: 'images/arm.png',
    width: 320/2,
    height: 200/2,
    top: 3*200/2,
    right: 0,
    transform: Ti.UI.create2DMatrix().scale(0),
});
var img5 = Ti.UI.createImageView({
    image: 'images/foot.png',
    width: 320/2,
    height: 340/2,
    top: 4*200/2,
    right: 0,
    transform: Ti.UI.create2DMatrix().scale(0),
});

$.header.add(imageView);
$.header.add(allowL);
$.header.add(allowR);
$.header.add(img1);
$.header.add(img2);
$.header.add(img3);
$.header.add(img4);
$.header.add(img5);

var chestAnimation = function() {
    imageView.visible = true;
    allowL.visible = true;
    allowR.visible = true;
    cropView.height = 160;
    imageView.height = 160;
    allowL.top = imageView.height - allowL.height/2;
    allowR.top = imageView.height - allowR.height/2;

    var aL = Titanium.UI.createAnimation({
        left: 95,
        duration: 1000,
        curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
        repeat: 0,
    });
    allowL.animate(aL);


    var aR = Titanium.UI.createAnimation({
        right: 90,
        duration: 1000,
        curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
        repeat: 0,
    });
    allowR.animate(aR);

    aL.addEventListener("complete", function() {
        var label1 = Ti.UI.createLabel({
            color: '#fff',
            font: { fontSize: 32 },
            text: 'Complete',
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            bottom: 20,
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE
        });
        imageView.add(label1);

        var a = Titanium.UI.createAnimation({
            transform: Ti.UI.create2DMatrix().scale(1),
            duration: 500,
            curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
            repeat: 0,
        });
        img1.animate(a);
        a.addEventListener("complete", function() {
            imageView.remove(label1);

            allowL.left = 0;
            allowR.right = 0;
            setTimeout(bodyAnimation, 500);
        });


    });
};

var bodyAnimation = function() {
    cropView.height = 250;
    imageView.height = 250;
    allowL.top = imageView.height - allowL.height/2;
    allowR.top = imageView.height - allowR.height/2;

    var aL = Titanium.UI.createAnimation({
        left: 95,
        duration: 1000,
        curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
        repeat: 0,
    });
    var aR = Titanium.UI.createAnimation({
        right: 90,
        duration: 1000,
        curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
        repeat: 0,
    });
    allowL.animate(aL);
    allowR.animate(aR);
    aL.addEventListener("complete", function() {
        var label1 = Ti.UI.createLabel({
            color: '#fff',
            font: { fontSize: 32 },
            text: 'Complete',
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            bottom: 20,
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE

        });
        imageView.add(label1);

        var a = Titanium.UI.createAnimation({
            transform: Ti.UI.create2DMatrix().scale(1),
            duration: 500,
            curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
            repeat: 0,
        });
        img2.animate(a);
        a.addEventListener("complete", function() {
            imageView.remove(label1);

            allowL.left = 0;
            allowR.right = 0;
            setTimeout(hipAnimation, 500);
        });

    });
};

var hipAnimation = function() {
    cropView.height = 350;
    imageView.height = 350;
    allowL.top = imageView.height - allowL.height/2;
    allowR.top = imageView.height - allowR.height/2;
    var aL = Titanium.UI.createAnimation({
        left: 95,
        duration: 1000,
        curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
        repeat: 0,
    });
    var aR = Titanium.UI.createAnimation({
        right: 90,
        duration: 1000,
        curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
        repeat: 0,
    });
    allowL.animate(aL);
    allowR.animate(aR);
    aL.addEventListener("complete", function() {
        var label1 = Ti.UI.createLabel({
            color: '#fff',
            font: { fontSize: 32 },
            text: 'Complete',
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            bottom: 20,
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE

        });
        imageView.add(label1);

        var a = Titanium.UI.createAnimation({
            transform: Ti.UI.create2DMatrix().scale(1),
            duration: 500,
            curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
            repeat: 0,
        });
        img3.animate(a);
        a.addEventListener("complete", function() {
            imageView.remove(label1);

            allowL.left = 0;
            allowR.right = 0;
            setTimeout(nextStage, 500);
        });
    });
};

var nextStage = function() {
    cropView.height = Ti.UI.FILL;
    imageView.height = Ti.UI.FILL;
    $.header.remove(allowL);
    $.header.remove(allowR);
    setTimeout(function() {
        imageView.visible = false;
        setTimeout(function() {
            baseImage.image = "images/mask_red.png";
            var croppedImage = cropView.toImage();
            imageView.image = croppedImage;
            /*
            cropView.height = Ti.UI.FILL;
            imageView.height = Ti.UI.FILL;
            */
            imageView.visible = true;
            $.header.add(allowT);
            $.header.add(allowB);

            armAnimation();
        }, 1000);
    }, 1000);

};

var armAnimation = function() {
    cropView.width = 100;
    imageView.width = 100;
    allowT.left = imageView.width - allowT.width/2;
    allowB.left = imageView.width - allowB.width/2;

    var aT = Titanium.UI.createAnimation({
        top: 160,
        duration: 1000,
        curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
        repeat: 0,
    });
    allowT.animate(aT);
    var aB = Titanium.UI.createAnimation({
        bottom: 240,
        duration: 1000,
        curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
        repeat: 0,
    });
    allowB.animate(aB);
    aT.addEventListener("complete", function() {
        var label1 = Ti.UI.createLabel({
            color: '#fff',
            font: { fontSize: 24 },
            text: 'Complete',
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            left: 0,
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE
        });
        imageView.add(label1);

        var a = Titanium.UI.createAnimation({
            transform: Ti.UI.create2DMatrix().scale(1),
            duration: 500,
            curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
            repeat: 0,
        });
        img4.animate(a);
        a.addEventListener("complete", function() {
            imageView.remove(label1);

            allowT.top = 0;
            allowB.bottom = 0;
            setTimeout(footAnimation, 500);
        });
    });
};

var footAnimation = function() {
    cropView.width = 140;
    imageView.width = 140;
    allowT.left = imageView.width - allowT.width/2;
    allowB.left = imageView.width - allowB.width/2;
    var aT = Titanium.UI.createAnimation({
        top: 300,
        duration: 1000,
        curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
        repeat: 0,
    });
    var aB = Titanium.UI.createAnimation({
        bottom: 50,
        duration: 1000,
        curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
        repeat: 0,
    });
    allowT.animate(aT);
    allowB.animate(aB);
    aT.addEventListener("complete", function() {
        var label1 = Ti.UI.createLabel({
            color: '#fff',
            font: { fontSize: 24 },
            text: 'Complete',
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            left: 0,
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE

        });
        imageView.add(label1);

        var a = Titanium.UI.createAnimation({
            transform: Ti.UI.create2DMatrix().scale(1),
            duration: 500,
            curve: Titanium.UI.ANIMATION_CURVE_LINEAR,
            repeat: 0,
        });
        img5.animate(a);
        a.addEventListener("complete", function() {
            imageView.remove(label1);
            compStage();
        });
    });
};

var compStage = function() {
    cropView.width = Ti.UI.FILL;
    imageView.width = Ti.UI.FILL;
    $.header.remove(allowT);
    $.header.remove(allowB);
    setTimeout(function() {
        imageView.visible = false;
        $.submit.backgroundImage = "images/btn.png";
        compFlag = true;
    }, 1000);
};


