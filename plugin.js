/**
 * new plugin template
 * 
 * to call it $('#myElement').pluginTitle();
 */
(function( $ ){

    $.fn.pluginTitle = function(options) {
        // get the called element
        var $container = $(this);

        // default options
        var DEFAULTS = {};

        // extend user options with the default options
        var options = $.extend(DEFAULTS, options);

        // execute the plugin for each called element
        return this.each(function(){
        });
    }
})( jQuery );


/**
 * new static plugin template
 * 
 * to call it $.pluginTitle();
 */
(function( $ ){

    $.pluginTitle = function(options) {
        // get the called element
        var $container = $(this);

        // default options
        var DEFAULTS = {};

        // extend user options with the default options
        var options = $.extend(DEFAULTS, options);

        // execute the plugin for each called element
        return this.each(function(){
        });
    }
})( jQuery );