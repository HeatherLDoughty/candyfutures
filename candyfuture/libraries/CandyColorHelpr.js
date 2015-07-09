var CandyColorHelpr = (function (window, document, undefined) {
    var objName = "CandyColorHelpr";
    var colors = ["orange", "pink", "blue", "green"];


    var publicButtonColor = function () {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    function RGB2Color(r, g, b) {
        return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
    }

    function RGBArray2RGB(rgba) { //accepts alpha
        var a = "";
        if (rgba.length === 4) { a = "a" }
        return 'rgb' + a + '(' + rgba.join(",") + ')';
    }

    function PublicRGBA2RGB(rgba) {
        var rgb = getRGBArray(rgba);
        rgb.length = 3;
        return RGBArray2RGB(rgb);
    }

    function byte2Hex(n) {
        n = makeValidRange(n);
        var nybHexString = "0123456789ABCDEF";
        return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
    }

    function makeValidRange(colorValue) { //integer between 0 and 255
        colorValue = Math.ceil(colorValue / 10 * 10)
        if (colorValue > 255) { return 255; } else if (colorValue < 0) { return 0; } else { return colorValue }
    }
    //http://www.javascripter.net/faq/hextorgb.htm  
    function hexToR(h) { return makeValidRange(parseInt((cutHex(h)).substring(0, 2), 16), 10) }
    function hexToG(h) { return makeValidRange(parseInt((cutHex(h)).substring(2, 4), 16), 10) }
    function hexToB(h) { return makeValidRange(parseInt((cutHex(h)).substring(4, 6), 16), 10) }
    function cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1, 7) : h }

    function rgbToHsl(r, g, b) { //hsl cannot accept alpha
        //http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [h, s, l];
    }

    function hslToRgb(h, s, l) {
        //http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
        var r, g, b;

        if (s == 0) {
            r = g = b = l; // achromatic
        } else {
            function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return [makeValidRange(r * 255), makeValidRange(g * 255), makeValidRange(b * 255)];
    }


    function nextShade(color, amount) { //Lightness
        //http://www.compuquilt.com/rgb.htm
        var rgb = getRGBArray(color);
        amount = parseInt(amount);
        return RGB2Color(makeValidRange(rgb[0] + amount), makeValidRange(rgb[1] + amount), makeValidRange(rgb[2] + amount));
    }

    function getStepAsPercent(steps) {
        if (Math.abs(steps) >= 10) { steps = steps * .01; } //for tolerance
        if (Math.abs(steps) >= 1) { steps = steps * .1; }
        return steps;
    }


    function changeSaturation(color, amount) {
        amount = getStepAsPercent(amount);
        var rgb = getRGBArray(color);
        var hsl = rgbToHsl.apply(this, rgb);
        hsl[1] = hsl[1] + amount;
        rgb = hslToRgb.apply(this, hsl);
        return RGB2Color.apply(this, rgb);
    }


    function changeColor(color, steps) { //Hue
        steps = getStepAsPercent(steps);
        var rgb = getRGBArray(color);
        var a;
        if (rgb.length === 4) { a = rgb[3]; }
        var hsl = rgbToHsl.apply(this, rgb);
        hsl[0] = hsl[0] + steps;
        if (hsl[0] > 1) {
            hsl[0] -= 1;
        }
        rgb = hslToRgb.apply(this, hsl);
        if (a) { rgb[3] = a; }
        return RGBArray2RGB(rgb);
    }

    var publicDifferentColor = function (color, steps) {
        return changeColor(color, steps);

    };

    var publicComplimentaryColor = function (color) {
        return changeColor(color, .5);

    };

    var publicSaturate = function (color, amount) {
        return changeSaturation(color, amount);

    };

    var publicDesaturate = function (color, amount) {
        return changeSaturation(color, amount * -1);
    };

    var publicHexToRGB = function (colorHex, alpha) {
        alpha = getStepAsPercent(alpha);
        var rgb = getRGBArray(colorHex);
        if (alpha) { rgb[3] = alpha };
        return RGBArray2RGB(rgb);
    };

    function getRGBArray(color) {
        var rgb = [];
        var len;
        if (color.indexOf('#') === 0) {
            rgb[0] = hexToR(color);
            rgb[1] = hexToG(color);
            rgb[2] = hexToB(color);
        } else {
            rgb = color.match(/\d+/g); //g = global finds all matches
        }
        makeNumericRGBA(rgb);
        rgb.splice(4);
        return rgb;
    }

    function makeNumericRGBA(rgb) {
        len = rgb.length;
        var value;
        for (var i = 0; i < len; i++) {
            value = rgb[i];
            if (i < 3) { rgb[i] = +value; }
            else if (i === 4) { rgb[i - 1] = +value * .1; }
        }
    }


    var publicDarker = function (color, steps) {
        return nextShade(color, steps * -1);
    }

    var publicLighter = function (color, steps) {
        return nextShade(color, steps);
    }

    var pastelLevelArray = [[128, 127], [140, 115],
    [140, 103],
    [152, 103], [164, 91], [176, 79],
    [188, 67], [200, 55], [212, 43],
    [224, 31], [230, 25], [236, 19]
    ];

    function getPastelLevel(isDeviation) {
        var level = exposed.pastelLevel;
        if (!level) { return undefined; }
        var index = isDeviation ? 1 : 0;
        return pastelLevelArray[level][index];
    }

    var publicResetDefaults = function () {
        exposed.pastelLevel = 2;
    }

    var publicRandomColor = function (sinWaveC, maxD, phaseR, phaseG, phaseB) { //http://krazydad.com/tutorials/makecolors.php
        var channelValue = Math.floor((Math.random() * 50));
        var sinWaveCenter = sinWaveC || getPastelLevel(false); //these 2 control the saturation of the colors vibrant to pastel. 128/127 most vibrant 236/19 very pastel
        var maxDeviation = maxD || getPastelLevel(true);

        phaseRed = phaseR || 0; //phase controls variation between colors. DIFFERENCE between the  0,0,0 will desaturate to greys.  0,0,2 will produce grey, yellow and blue colors etc.
        phaseGrn = phaseG || 2 * Math.PI / 3; //0,2,4 works well because it causes each wave to be 1/3 cycle or 120 degrees out of phase with each other (2*Math.PI is sine wave range)
        phaseBlu = phaseB || 4 * Math.PI / 3;

        var red = Math.sin(channelValue + phaseRed) * maxDeviation + sinWaveCenter;
        var grn = Math.sin(channelValue + phaseGrn) * maxDeviation + sinWaveCenter;
        var blu = Math.sin(channelValue + phaseBlu) * maxDeviation + sinWaveCenter;
        return RGB2Color(red, grn, blu);
    }

    var exposed = { randomColor: publicRandomColor, buttonColor: publicButtonColor, darker: publicDarker, lighter: publicLighter, hexToRGB: publicHexToRGB, saturate: publicSaturate, desaturate: publicDesaturate,
        complimentaryColor: publicComplimentaryColor, differentColor: publicDifferentColor, pastelLevel: 2, resetDefaults: publicResetDefaults, RGBA2RGB: PublicRGBA2RGB
    };

    return exposed;

})(window, document);