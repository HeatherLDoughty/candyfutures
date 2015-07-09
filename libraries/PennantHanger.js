;(function ($, window, document, undefined) {

    var pluginname = "PennantHanger";

    var defaults = {
        additionalBackgroundStyleClass: "",
        backgroundColor: "#FFFFFF"
    };

    function PennantHanger(pennantBox, colorHelper, count, options){
       $.extend(this, defaults, options);
       this._defaults = defaults;
       this.options = options;
       this.colorHelper = colorHelper;
       this.pennantBox = pennantBox;
       this.count = count || 1;
       this.HangFlags(); 
    }


    PennantHanger.prototype.HangFlags = function(){
        for (var i = 1; i <= this.count; i++)
        {this.addRope();}
    };

    PennantHanger.prototype.addRope = function() {
        var rope, color, flagtop;
        rope = $('<div>', { "class": "rope narrowstripes angled ropeBase" });
        $('<div>', { "class": "ropeAbove ropeBase " + this.additionalBackgroundStyleClass }).css("background-color", this.backgroundColor).appendTo(rope);
        this.addFlagToRope(rope, true);
        this.addFlagToRope(rope, false);
        rope.appendTo(this.pennantBox);
    };

     PennantHanger.prototype.addFlagToRope = function(rope, isLeft) {
        var color, flagtop, tilt;
        var tiltBaseText = "TiltFlag";
        if (isLeft){tilt = "left" + tiltBaseText} else {tilt = "right" + tiltBaseText}
        color = this.colorHelper.randomColor();
        flagtop = $('<div>', { "class": "flagDeco flagBase"})
        $('<div>', { "class": "flagShadow flagBase " + tilt }).appendTo(rope).append($('<div>', { "class": "flag flagBase" }).css("border-top-color", color)).append(flagtop);
        this.changeFlagtopColor(color, flagtop);
    };

   PennantHanger.prototype.changeFlagtopColor =  function(color, flagtop) {
        var rnd = Math.floor((Math.random() * 10) + 1);
        var shadechange = 25;
        var saturchange = 10;
        if (rnd % 2 === 0) { color = this.colorHelper.darker(color, shadechange); } else { color = this.colorHelper.lighter(color, shadechange); }
        rnd = Math.floor((Math.random()));
        if (rnd % 2 === 0) { color = this.colorHelper.desaturate(color, saturchange); }
        flagtop.css("border-top-color", color);
    };


    $.fn[pluginname] = function(colorHelper, numPennants, options){
	return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginname)) {
                $.data(this, 'plugin_' + pluginname,
                new PennantHanger(this, colorHelper, numPennants, options));
              }
        });
    }


})(jQuery, window, document);
