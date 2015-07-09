;(function ($, window, document, undefined) {

var pluginName = "CandyStickNavigation";

var defaults = {
    swirlHeight: 60,
    swirlPadding:30,
    linkStartOffsetPixels: 0,
    linkStartOffsetSwirls: 0
};

function CandyStickNavigation(containerDiv, colorHelper, modernizr, links, options){
    this.containerDiv = $(containerDiv);
    this.colorHelper = colorHelper;
    this.links = links || [];
    this.modernizr = modernizr;
    $.extend(this, defaults, options);
    this.setLinkSwirlOffset();
    this.setComputedValues();
    this.setColors();
    this.containerDiv.addClass("stickBase");
    this.CreateCandyNavigation();
}

CandyStickNavigation.prototype.setLinkSwirlOffset = function(){
    if (this.linkStartOffsetSwirls !== 0) {return;}
     this.linkStartOffsetSwirls = Math.ceil((
         (this.linkStartOffsetPixels - this.containerDiv.offset().top - parseInt(this.containerDiv.css("margin-top"))) 
             / (this.swirlHeight + this.swirlPadding)
                ) * 10 / 10);
};

CandyStickNavigation.prototype.setComputedValues = function(){
   this.areaHeight =  this.containerDiv.height();
   this.numSwirls = Math.ceil((this.areaHeight / (this.swirlHeight + this.swirlPadding)) * 10 / 10);
};

CandyStickNavigation.prototype.setColors = function(){
    if (this.modernizr && this.modernizr.rgba){
        this.color = this.colorHelper.hexToRGB(this.colorHelper.randomColor(), .2);
        this.color2 =  this.colorHelper.complimentaryColor(this.color);
        this.colordark = this.colorHelper.desaturate(this.colorHelper.darker(this.color, 15), .6);
        this.color2dark = this.colorHelper.desaturate(this.colorHelper.darker(this.color2, 15), .6);
    }else{
        this.color = this.colorHelper.hexToRGB(this.colorHelper.randomColor());
        this.color2 =  this.colorHelper.complimentaryColor(this.color);
        this.colordark = "rgb(64,64,64)"; 
        this.color2dark = "rgb(64,64,64)"; 
    }


}


CandyStickNavigation.prototype.CreateCandyNavigation = function(){
     var contain = $("<div>", { "class": "stickShading" });     
    var swirl, link, linkIndex;

    for (var i = 0; i < this.numSwirls; i++) {
        swirl = $('<a>', { "class": "swirl navLink righttilt " }).appendTo(contain);
        if (i % 2 === 0) {  swirl.attr('style', "color: "+ this.colordark +" !important");  swirl.css("background", this.color); } else {  swirl.attr('style', "color: "+ this.color2dark +" !important"); swirl.css("background", this.color2); }
        swirl.height(this.swirlHeight).css("padding-top", this.swirlPadding) //this has to be after because attr tag set clears other styles
        if (i >=  this.linkStartOffsetSwirls) {
            link = this.links[i - this.linkStartOffsetSwirls];
            if (link) { swirl.attr("href", link.href); swirl.text(link.text); }
        } else {
            swirl.attr("href", "#"); swirl.text(" ");
        }
    }

    contain.appendTo(this.containerDiv);
};

CandyStickNavigation.prototype.SetSwirlColors = function(swirl){


}


$.fn[pluginName] = function(colorHelper, modernizr, options){
    return this.each(function(){
    if (!$.data(this, "plugin_" + pluginName)){
         $.data(this, "plugin_"+ pluginName, 
             new CandyStickNavigation(this, colorHelper, modernizr, options));
        }
    });
};

})(jQuery, window, document);





