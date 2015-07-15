
$(function () { //same as document.ready
    $("#pep1").PeppermintMachine(CandyColorHelpr, {});
    $("#pep2").PeppermintMachine(CandyColorHelpr, {});
    $(".title").css("z-index", 30)

    var AfterPostArticles = function (heightOfArticles) {
        CandyColorHelpr.resetDefaults();
        $("#spheres").GumballMachine(CandyColorHelpr, { areaHeight: heightOfArticles });
        var sideNav = $("#sidenav");
        sideNav.height(heightOfArticles - parseInt(sideNav.css("margin-top")));
        var links = tempcodeLinks();
        sideNav.CandyStickNavigation(CandyColorHelpr, Modernizr, links, { linkStartOffsetPixels: $('#stuffbox').offset().top });
    };

    CandyColorHelpr.pastelLevel = 6;
    $('#top').PennantHanger(CandyColorHelpr, 3, { backgroundColor: "#FFF989"});


    var articles = tempcodeArticles();
    CandyColorHelpr.pastelLevel = 3;
    $('div.candybox').Publishr(articles, AfterPostArticles, CandyColorHelpr);

    var ieScold = $("p#ieScolding");
    if (ieScold) {ieScold.css("z-index", 9999);}
})


function tempcodeLinks() {
    var links = [];
    links.push({
        text: "*Click Click!*",
        href: "candyFuture.html"
    })

    // links.push({
    //     text: "Colors!",
    //    href: "candyFuture.html"
    //})

    //links.push({
    //    text: "Colors!",
    //    href: "candyFuture.html"
    //})

    //links.push({
    //    text: "Colors!",
    //    href: "candyFuture.html"
    //})


    return links;
}


function tempcodeArticles(){
    var articles = [];

    articles.push({
        title: "You're looking at code",
        article: "<p><br/> This is an imageless website. Everything you see is rendered using HTML5, CSS3, and JQuery + JQueryUI. The colors are generated using a sine function to create random complementary colors. <br/>" +
            "<br/> Click the link on the left to see new colors or click a bubble to pop it!<br/> <br/>" +
            "<br/> <br/> <br/> Buttons by: <a href ='http://simurai.com/archive/buttons/'>simurai</a><br/>" +
            "Sweet look and feel inspired by: <a href='http://www.cupcakeipsum.com/'>Cupcake Ipsum</a> <br/>" +
            "Sine wave color generation methods discovered with tutorial by: <a href ='http://krazydad.com/tutorials/makecolors.php'> Jim Bumgardner</a> </br> </br>" +

            "<a href='https://www.linkedin.com/in/heatherleedoughty'>Visit me on LinkedIn</a></p>"
    })

    articles.push({
    title: "candy #1",
    article: "<p>Cupcake ipsum dolor sit. Amet donut jelly beans oat cake macaroon sesame snaps jelly beans dragée chocolate bar. Cupcake jelly-o candy jujubes danish liquorice powder.</p> <p>Muffin danish jelly-o topping lemon drops applicake cotton candy. Oat cake gingerbread marshmallow. Candy cake jujubes cupcake croissant candy canes. Jelly macaroon candy canes sugar plum marzipan jelly jelly tiramisu biscuit.</p>"
    })

    articles.push({
        title: "candy #2",
    article: "<p>Donut chocolate dragée lemon drops chupa chups. Dragée cheesecake croissant sweet roll macaroon powder chocolate cake muffin. Bonbon pastry lollipop powder bonbon sweet roll jujubes.</p>"
    })

    articles.push({
    title: "candy #3",
    article: "<p>Croissant applicake cookie oat cake biscuit fruitcake tart sesame snaps. Chocolate cake brownie jelly-o lollipop tootsie roll jelly-o biscuit sesame snaps. Tootsie roll wypas wypas cake. Lemon drops biscuit apple pie dragée pudding gummi bears bear claw. Lemon drops chocolate bar pudding. Caramels sugar plum donut bear claw jelly beans.</p>"
    })

    articles.push({
    title: "candy #4",
    article: "<p>Cupcake ipsum dolor sit. Amet I love pudding toffee soufflé gingerbread tootsie roll. I love jujubes applicake gummi bears tootsie roll cupcake.</p><p>Apple pie I love muffin I love dessert carrot cake bear claw tiramisu gummi bears. Icing candy applicake dessert danish gummi bears. Lollipop pie jelly beans icing. Chupa chups jelly-o chupa chups oat cake sesame snaps I love candy topping.</p>"
    })

    articles.push({
        title: "candy #5",
        article: "<p>Cupcake ipsum dolor sit amet cake gingerbread. Tiramisu pie sugar plum powder. Toffee croissant macaroon gummi bears gummies. Sugar plum ice cream sesame snaps dragée sweet roll cupcake cupcake. Cookie ice cream chocolate bar caramels tart bonbon lemon drops biscuit. Macaroon gingerbread soufflé. Cake wafer halvah bear claw chocolate. Bonbon sweet chocolate bar dessert danish oat cake sugar plum marshmallow cheesecake. Macaroon pie dragée macaroon chocolate cake donut jelly-o jelly cookie. Apple pie ice cream lemon drops tart. Marshmallow sweet roll sesame snaps. Liquorice candy canes tiramisu pie bear claw candy canes cotton candy. " +
            "<br/> <br/>Bear claw gummi bears ice cream topping fruitcake candy cake. Pie jujubes soufflé. Gummies pastry cake brownie croissant danish dessert. Icing gummies chocolate danish jujubes. Muffin gummi bears topping dessert ice cream oat cake dragée sweet roll marzipan. Pudding chocolate ice cream cake. Sesame snaps halvah candy canes. Bear claw chocolate cake pie biscuit liquorice powder gummies jelly beans croissant. Gummies icing toffee oat cake sugar plum sweet muffin jelly beans donut. Lemon drops cake soufflé. Apple pie halvah topping croissant marshmallow liquorice. Dessert liquorice halvah chocolate cake powder sugar plum macaroon candy danish.</p>"
    })

    articles.push({
        title: "candy #6",
        article: "Cupcake ipsum dolor sit amet. Powder jujubes chocolate bar. Marshmallow sweet roll cookie. Ice cream sweet cake cheesecake halvah topping sugar plum sweet. Biscuit cake chocolate lollipop chocolate candy canes tiramisu. Biscuit toffee sesame snaps. Pastry gingerbread marzipan halvah. Cotton candy brownie ice cream marshmallow cake fruitcake apple pie. Candy lemon drops wafer. Cotton candy toffee chocolate cake jelly beans oat cake. Bear claw chocolate cake tiramisu bear claw. Cupcake gingerbread chocolate cake tart apple pie caramels chupa chups. Jelly-o jelly cake carrot cake. Muffin tiramisu pie donut pudding topping." +
    "<br/> <br/>Ice cream muffin toffee sesame snaps ice cream pudding apple pie gummi bears lollipop. Powder chocolate bar sesame snaps caramels cheesecake. Lemon drops sweet roll cheesecake icing candy canes soufflé biscuit sweet. Macaroon jujubes brownie. Sugar plum jelly-o chocolate bar gingerbread sesame snaps jelly. Candy cupcake sesame snaps icing. Dragée cake jelly-o. Halvah pastry jelly beans chocolate. Gummi bears sesame snaps wafer chupa chups donut tootsie roll donut. Bonbon tiramisu biscuit fruitcake. Marzipan jelly beans sweet roll caramels dragée jelly-o. Pastry donut fruitcake cookie biscuit donut marzipan gingerbread soufflé. Sugar plum cookie ice cream liquorice jujubes dessert soufflé bonbon. Chupa chups brownie pastry brownie dessert cheesecake marzipan." +
    "<br/> <br/>Fruitcake oat cake lemon drops marzipan sugar plum pudding chocolate bar. Gummies pudding lollipop brownie chocolate bar chupa chups tart halvah. Sugar plum lollipop tootsie roll pastry. Jelly beans toffee tiramisu cupcake gummies liquorice biscuit. Marzipan dragée gummies cookie dessert icing gummi bears cake. Chupa chups liquorice jelly-o candy canes chupa chups marzipan. Gummies chocolate bar candy. Bonbon oat cake tiramisu jelly beans gummies cheesecake brownie. Ice cream bear claw jelly-o candy cookie jujubes. Cotton candy dragée biscuit pie cake apple pie sweet roll cake. Sweet oat cake soufflé tiramisu icing cotton candy jelly biscuit. Sweet roll lollipop marshmallow marzipan jelly biscuit fruitcake." +
    "<br/> <br/>Icing toffee cupcake apple pie topping croissant gingerbread pastry. Cheesecake gummi bears jujubes cake powder gummies jelly beans. Bear claw cotton candy marshmallow jelly-o jelly-o pudding croissant tiramisu. Donut soufflé cheesecake sweet sweet cookie dessert gingerbread. Lollipop tootsie roll macaroon cupcake cheesecake candy canes lemon drops pastry liquorice. Gingerbread gummies lollipop candy canes icing sugar plum. Chocolate candy biscuit marshmallow gingerbread tiramisu jelly beans. Oat cake macaroon tart sugar plum sugar plum ice cream. Chocolate bonbon candy canes dessert gummies dessert liquorice. Chocolate bar gummies toffee apple pie tart. Cake tootsie roll apple pie oat cake pie croissant cotton candy. Apple pie powder pastry. Fruitcake icing chocolate apple pie jelly beans." +
    "<br/> <br/>Chocolate gingerbread jelly powder cotton candy sugar plum. Tootsie roll danish marzipan brownie jelly-o gummies. Wafer pie chocolate. Fruitcake ice cream gummies gummi bears apple pie chupa chups jelly. Marzipan icing fruitcake marshmallow bonbon. Tiramisu sesame snaps chocolate cake sweet danish chocolate cake. Cheesecake bear claw pastry chocolate bar cookie topping. Jelly-o jelly-o carrot cake cupcake. Jelly donut cake brownie topping. Bonbon jelly tiramisu. Icing chocolate bar icing. Croissant pudding toffee dragée. Chocolate liquorice marshmallow pie pastry bear claw biscuit. Bear claw gummi bears pudding topping sweet sweet roll caramels sweet roll gingerbread."
    })
return articles;
}

