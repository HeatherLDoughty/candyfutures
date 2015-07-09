; (function ($, window, document, undefined) {
    //use <div id="#myArticleContainer"></div>
    //$('div#myArticleContainer').Publishr({...well formed object literal (json); image, title, article, category})
    var pluginName = "Publishr";

   function Publishr(articleBoxContainer, articlesJSON, callBack, colorHelper) {
        this.articleBoxContainer =  $(articleBoxContainer);
        this.articles = articlesJSON;
        this.callBack = callBack;
        this.colorHelper = colorHelper;
        this.htmlArticles = [];
        this.createArticles();
        this.updateDom();
    }

    Publishr.prototype.updateDom = function(){
      this.articleBoxContainer.append(this.htmlArticles);
      this.afterUpdateDom();
    }

    Publishr.prototype.afterUpdateDom = function(){
     this.heightOfArticles = this.articleBoxContainer.height() + $(this.articleBoxContainer).position().top;
     if (this.callBack){this.callBack(this.heightOfArticles);}
    };

    
   Publishr.prototype.createArticles = function() {
        var len = this.articles.length;
        var articleDiv;
        for (var i = 0; i < len; i++) {
            articleDiv = new this.Article(this.articles[i], this.colorHelper, i);
           if (articleDiv) {this.htmlArticles.push(articleDiv);}
        }
    };
    
     
    $.fn[pluginName] = function (articlesJSON, callBack, colorHelper) { //extends jquery
        return this.each(function () {
            $.data(this, 'plugin_' + pluginName,
                new Publishr(this, articlesJSON, callBack, colorHelper));
        });
    }



Publishr.prototype.Article = function(contents, colorHelper){

   var classname = "Article";


    var defaults = {
        title: "",
        article: "",
        category: "candy",
        buttonClass: "button drop xs ",
        buttonColor: "",
        expandText: "read...",
        collapseText: "...hide",
        Alt: "",
        idx: 0

    };

    
     function Article(contents, colorHelper, idx) {
        $.extend(this, defaults, contents);
        this.idx = idx;
        this._defaults = defaults;
        this.colorHelper = colorHelper;
        if (this.canPublish()) {this.articleDiv = this.articleDiv();}
        return this.articleDiv;
    }


    Article.prototype.canPublish = function () {
        return (Boolean(this.title && this.article));
    }

    Article.prototype.onExpandArticle = function(contentDiv, button) {
        button.text(this.collapseText);
        button.insertAfter(contentDiv);
        contentDiv.slideToggle("slow");
        $('html,body').animate({ scrollTop: contentDiv.offset().top -15}, 2000);
    }

    Article.prototype.onCollapseArticle = function(contentDiv, button) {
        button.text(this.expandText);
        button.insertBefore(contentDiv);
        contentDiv.slideToggle("slow");
    }

    Article.prototype.articleButtonClick = function(contentDiv, e, button) {
        e.preventDefault();
        button = $(button);

        if (button.text() === this.expandText) {
            this.onExpandArticle(contentDiv, button);
        } else {
            this.onCollapseArticle(contentDiv, button);
        }


    }

    Article.prototype.articleDiv = function () {
        this.Alt = this.Alt || this.category;
        var articleBox = $('<div>', { id: this.category + "Box" + this.idx, "class": "clearfix article" + this.category });
        var contentDiv;
        var a;
        $('<h1>', {id: this.category + "Title" + this.idx, text: this.title, "class": "articleTitle" }).appendTo(articleBox);
        //$('<img>', {id: this.category + "Img" + this.idx, src: this.image, alt: this.Alt, "class": "articlePic" }).appendTo(articleBox);
        contentDiv = $('<div>').html(this.article)
        var that = this;
        a =  $('<a>', { id: this.category + "Link" + this.idx, text: "read...", href: "#", "class": "articleExpand " + this.buttonClass + " " + this.buttonColor}).appendTo(articleBox).click(function(event) {that.articleButtonClick(contentDiv, event, this); });
        if (this.colorHelper) {this.setButtonColor(a);}
        contentDiv.appendTo(articleBox).hide();
        return articleBox[0];
    }

   Article.prototype.setButtonColor =function(a){
    var baseColor = this.colorHelper.desaturate(this.colorHelper.randomColor(), 40);
    var hoverColor = this.colorHelper.lighter(baseColor, 25);
    var desatColor = this.colorHelper.desaturate(baseColor, 20);
    a.attr('style', "color: "+ this.colorHelper.darker(desatColor, 50) +" !important"); //this has to be first because attr tag set clears other styles
    var shadowCss = "inset rgba(255,254,255,0.4) 0 0 .3em, inset rgba(0,0,0,0.1) 0 -0.1em .4em, " +  this.colorHelper.darker(desatColor, 35) + " 0 .1em 3px, " +  this.colorHelper.darker(baseColor, 35) + " 0 .3em 1px, rgba(0,0,0,0.2) 0 .5em 5px";
     a.css('background-color', baseColor);
     a.css("-webkit-box-shadow", shadowCss)
     a.css("box-shadow", shadowCss)
     a.css("-moz-box-shadow", shadowCss)
     $(a).hover(function(){$(this).css('background-color', hoverColor);}, $(this).css('background-color', baseColor))
    };

   return new Article(contents, colorHelper);
};

})(jQuery, window, document);


