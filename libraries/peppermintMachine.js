;(function($, document, window, undefined){ //requires peppermint.css

var pluginName = "PeppermintMachine";

var defaults = {};

function PeppermintMachine(peppermintBox, colorHelper, options){
$.extend(this, defaults, options);
this._defaults = defaults;
this.colorHelper = colorHelper;
this.peppermintBox = peppermintBox; 
this.createPeppermint();
}

PeppermintMachine.prototype.createPeppermint = function(){
	var	curdiv, prevdiv;
	var color1 = this.colorHelper.randomColor();
    var colorDiff = Math.random(.15, .85);
	var color2 = this.colorHelper.differentColor(color1, colorDiff);
	var spin0 = $('<div>', {"class": "peppermint lighting", id: "spin0"}).css("background-color", color1)
	prevdiv = spin0;
	for (var i = 1; i <=12; i++){
		curdiv = $('<div>', {"class": "peppermint innerPep lighting", id: "spin" + i}).css("background-color",  function(){if (i % 2 === 0){return color1} else{return color2}})
		curdiv.appendTo(prevdiv);
		prevdiv = curdiv;
	}
	shadow = this.getShadow(color1);
	spin0.css("box-shadow", shadow).css("-webkit-box-shadow", shadow);
	spin0.appendTo(this.peppermintBox);
}

PeppermintMachine.prototype.getShadow = function(baseColor){
var color1 = this.colorHelper.desaturate(this.colorHelper.darker(baseColor, 20), 50);
var color2 = this.colorHelper.lighter(color1, 50);
var color3 = this.colorHelper.darker(color2, 30);
var color4 = this.colorHelper.darker(color3, 30);
var color5 = this.colorHelper.darker(color4, 30);

return "0 1px 0 " + color1 + ",0 3px 0 " + color2 + ",0 5px 0 " + color3 + ",0 6px 0 " + color4 + ", 0 8px 0 " + color5 + ", \
0 6px 1px rgba(0,0,0,.1), \
0 0 5px rgba(0,0,0,.1), \
0 1px 3px rgba(0,0,0,.3), \
0 3px 5px rgba(0,0,0,.2), \
0 5px 10px rgba(0,0,0,.25), \
0 10px 10px rgba(0,0,0,.3), \
0 20px 20px rgba(0,0,0,.15)" 
}


$.fn[pluginName] = function(colorHelper, options){
	return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new PeppermintMachine(this, colorHelper, options));
              }
        });
}

})(jQuery, document, window);

