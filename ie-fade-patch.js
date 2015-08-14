/**
 * Created by AJA on 29.08.2014.
 * 
 * !!This file was put here so we can grab it using bower!!
 */
(function($) {
    /*jshint expr:true */

    var m = /(MSIE) ([\w.]+)/.exec( navigator.userAgent );
    var patch = m && m[1] && m[2] < 9;

    if (patch) {
        $.fn.fadeIn = function(speed, callback) {
            return this.animate({opacity: 'show'}, speed, function() {
                this.style.removeAttribute('filter');
                callback && callback();
            });
        };

        $.fn.fadeOut = function(speed, callback) {
            return this.animate({opacity: 'hide'}, speed, function() {
                this.style.removeAttribute('filter');
                callback && callback();
            });
        };

        $.fn.fadeTo = function(speed,to,callback) {
            return this.animate({opacity: to}, speed, function() {
                to == 1 && this.style.removeAttribute('filter');
                callback && callback();
            });
        };
    }
})(jQuery);

/*
(function($) {
    $.fn.getCursorPosition = function() {
        var input = this.get(0);
        if (!input) return; // No (input) element found
        if ('selectionStart' in input) {
            // Standard-compliant browsers
            return input.selectionStart;
        } else if (document.selection) {
            // IE
            input.focus();
            var sel = document.selection.createRange();
            var selLen = document.selection.createRange().text.length;
            sel.moveStart('character', -input.value.length);
            return sel.text.length - selLen;
        }
    }
})(jQuery);
*/
