;(function($, window, document, undefined){
 //options... not block each other... offset?
 var pluginName = "GumballMachine"
 var that;

  var defaults = {
       areaHeight: 600,
       bubbleMargin: 15  
 }
 
 GumballMachine.prototype.numBubbles = function(){ //supply count -OR- TotalHeight in Options
    return this.count || Math.ceil((this.areaHeight / (this.bubbleHeight + this.bubbleMargin)) * 10 / 10);
 }
 
 function GumballMachine(sphereBox, colorHelper, options){ 
    that = this;
	$.extend(this, defaults, options);
	this._defaults = defaults;
	this.sphereBox = sphereBox;
	this.colorHelper = colorHelper;
	this.bubbleHeight = 130	 
	var num = this.numBubbles();
	for (var i = 0; i<num; i++){
		this.addSphere();
	}
  }

 GumballMachine.prototype.pop = function(){
   var bubble = $(this);
   bubble.hide("scale", {}, 40);
   bubble.show("scale", {}, 0);
   bubble.hide("explode", { pieces: 250 }, 1500, function(){that.addSphere();});
  };
  
  GumballMachine.prototype.addSphere = function(){
	var ele,ele2;
     ele= $("<div>", {"class": "sphere lighting"}).css("background-color",  this.colorHelper.randomColor()).height(this.bubbleHeight).width(this.bubbleHeight).css("margin-bottom", this.bubbleMargin);
	 ele.click(this.pop);
	 ele2= $("<div>", {id: "highlightPosition", "class": "highlight"}).appendTo(ele);
	 $("<div>", {id: "highlightPosition2", "class": "highlight2"}).appendTo(ele2);
	 $("<div>", {id: "highlightPosition3", "class": "highlight3"}).appendTo(ele2);
	 ele.appendTo($(this.sphereBox))
  };
  
 $.fn[pluginName] = function (colorHelper, options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new GumballMachine(this, colorHelper, options));
              }
        });
    }


})(jQuery, window, document);