

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(['jquery'], function ($) {
			return factory($);
		});
	} else if (typeof module === "object" && typeof module.exports === "object") {
		exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
})(function($){

// Preserve the original jQuery "swing" easing as "jswing"
if (typeof $.easing !== 'undefined') {
	$.easing['jswing'] = $.easing['swing'];
}

var pow = Math.pow,
	sqrt = Math.sqrt,
	sin = Math.sin,
	cos = Math.cos,
	PI = Math.PI,
	c1 = 1.70158,
	c2 = c1 * 1.525,
	c3 = c1 + 1,
	c4 = ( 2 * PI ) / 3,
	c5 = ( 2 * PI ) / 4.5;

// x is the fraction of animation progress, in the range 0..1
function bounceOut(x) {
	var n1 = 7.5625,
		d1 = 2.75;
	if ( x < 1/d1 ) {
		return n1*x*x;
	} else if ( x < 2/d1 ) {
		return n1*(x-=(1.5/d1))*x + .75;
	} else if ( x < 2.5/d1 ) {
		return n1*(x-=(2.25/d1))*x + .9375;
	} else {
		return n1*(x-=(2.625/d1))*x + .984375;
	}
}

$.extend( $.easing,
{
	def: 'easeOutQuad',
	swing: function (x) {
		return $.easing[$.easing.def](x);
	},
	easeInQuad: function (x) {
		return x * x;
	},
	easeOutQuad: function (x) {
		return 1 - ( 1 - x ) * ( 1 - x );
	},
	easeInOutQuad: function (x) {
		return x < 0.5 ?
			2 * x * x :
			1 - pow( -2 * x + 2, 2 ) / 2;
	},
	easeInCubic: function (x) {
		return x * x * x;
	},
	easeOutCubic: function (x) {
		return 1 - pow( 1 - x, 3 );
	},
	easeInOutCubic: function (x) {
		return x < 0.5 ?
			4 * x * x * x :
			1 - pow( -2 * x + 2, 3 ) / 2;
	},
	easeInQuart: function (x) {
		return x * x * x * x;
	},
	easeOutQuart: function (x) {
		return 1 - pow( 1 - x, 4 );
	},
	easeInOutQuart: function (x) {
		return x < 0.5 ?
			8 * x * x * x * x :
			1 - pow( -2 * x + 2, 4 ) / 2;
	},
	easeInQuint: function (x) {
		return x * x * x * x * x;
	},
	easeOutQuint: function (x) {
		return 1 - pow( 1 - x, 5 );
	},
	easeInOutQuint: function (x) {
		return x < 0.5 ?
			16 * x * x * x * x * x :
			1 - pow( -2 * x + 2, 5 ) / 2;
	},
	easeInSine: function (x) {
		return 1 - cos( x * PI/2 );
	},
	easeOutSine: function (x) {
		return sin( x * PI/2 );
	},
	easeInOutSine: function (x) {
		return -( cos( PI * x ) - 1 ) / 2;
	},
	easeInExpo: function (x) {
		return x === 0 ? 0 : pow( 2, 10 * x - 10 );
	},
	easeOutExpo: function (x) {
		return x === 1 ? 1 : 1 - pow( 2, -10 * x );
	},
	easeInOutExpo: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
			pow( 2, 20 * x - 10 ) / 2 :
			( 2 - pow( 2, -20 * x + 10 ) ) / 2;
	},
	easeInCirc: function (x) {
		return 1 - sqrt( 1 - pow( x, 2 ) );
	},
	easeOutCirc: function (x) {
		return sqrt( 1 - pow( x - 1, 2 ) );
	},
	easeInOutCirc: function (x) {
		return x < 0.5 ?
			( 1 - sqrt( 1 - pow( 2 * x, 2 ) ) ) / 2 :
			( sqrt( 1 - pow( -2 * x + 2, 2 ) ) + 1 ) / 2;
	},
	easeInElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 :
			-pow( 2, 10 * x - 10 ) * sin( ( x * 10 - 10.75 ) * c4 );
	},
	easeOutElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 :
			pow( 2, -10 * x ) * sin( ( x * 10 - 0.75 ) * c4 ) + 1;
	},
	easeInOutElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
			-( pow( 2, 20 * x - 10 ) * sin( ( 20 * x - 11.125 ) * c5 )) / 2 :
			pow( 2, -20 * x + 10 ) * sin( ( 20 * x - 11.125 ) * c5 ) / 2 + 1;
	},
	easeInBack: function (x) {
		return c3 * x * x * x - c1 * x * x;
	},
	easeOutBack: function (x) {
		return 1 + c3 * pow( x - 1, 3 ) + c1 * pow( x - 1, 2 );
	},
	easeInOutBack: function (x) {
		return x < 0.5 ?
			( pow( 2 * x, 2 ) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
			( pow( 2 * x - 2, 2 ) *( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
	},
	easeInBounce: function (x) {
		return 1 - bounceOut( 1 - x );
	},
	easeOutBounce: bounceOut,
	easeInOutBounce: function (x) {
		return x < 0.5 ?
			( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
			( 1 + bounceOut( 2 * x - 1 ) ) / 2;
	}
});

});

// easing.min.js

!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,c=1.70158,o=1.525*c,s=2*a/3,f=2*a/4.5;n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-(t(2,20*n-10)*r((20*n-11.125)*f))/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return(c+1)*n*n*n-c*n*n},easeOutBack:function(n){return 1+(c+1)*t(n-1,3)+c*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-o)/2:(t(2*n-2,2)*((o+1)*(2*n-2)+o)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}})});

// isotope.pkgd.js


( function( window, factory ) {
    // universal module definition
    /*jshint strict: false */ /* globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
        return factory( window, jQuery );
      });
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        window,
        require('jquery')
      );
    } else {
      // browser global
      window.jQueryBridget = factory(
        window,
        window.jQuery
      );
    }
  
  }( window, function factory( window, jQuery ) {
  'use strict';
  
  // ----- utils ----- //
  
  var arraySlice = Array.prototype.slice;
  
  // helper function for logging errors
  // $.error breaks jQuery chaining
  var console = window.console;
  var logError = typeof console == 'undefined' ? function() {} :
    function( message ) {
      console.error( message );
    };
  
  // ----- jQueryBridget ----- //
  
  function jQueryBridget( namespace, PluginClass, $ ) {
    $ = $ || jQuery || window.jQuery;
    if ( !$ ) {
      return;
    }
  
    // add option method -> $().plugin('option', {...})
    if ( !PluginClass.prototype.option ) {
      // option setter
      PluginClass.prototype.option = function( opts ) {
        // bail out if not an object
        if ( !$.isPlainObject( opts ) ){
          return;
        }
        this.options = $.extend( true, this.options, opts );
      };
    }
  
    // make jQuery plugin
    $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
      if ( typeof arg0 == 'string' ) {
        // method call $().plugin( 'methodName', { options } )
        // shift arguments by 1
        var args = arraySlice.call( arguments, 1 );
        return methodCall( this, arg0, args );
      }
      // just $().plugin({ options })
      plainCall( this, arg0 );
      return this;
    };
  
    // $().plugin('methodName')
    function methodCall( $elems, methodName, args ) {
      var returnValue;
      var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';
  
      $elems.each( function( i, elem ) {
        // get instance
        var instance = $.data( elem, namespace );
        if ( !instance ) {
          logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
            pluginMethodStr );
          return;
        }
  
        var method = instance[ methodName ];
        if ( !method || methodName.charAt(0) == '_' ) {
          logError( pluginMethodStr + ' is not a valid method' );
          return;
        }
  
        // apply method, get return value
        var value = method.apply( instance, args );
        // set return value if value is returned, use only first value
        returnValue = returnValue === undefined ? value : returnValue;
      });
  
      return returnValue !== undefined ? returnValue : $elems;
    }
  
    function plainCall( $elems, options ) {
      $elems.each( function( i, elem ) {
        var instance = $.data( elem, namespace );
        if ( instance ) {
          // set options & init
          instance.option( options );
          instance._init();
        } else {
          // initialize new instance
          instance = new PluginClass( elem, options );
          $.data( elem, namespace, instance );
        }
      });
    }
  
    updateJQuery( $ );
  
  }
  
  // ----- updateJQuery ----- //
  
  // set $.bridget for v1 backwards compatibility
  function updateJQuery( $ ) {
    if ( !$ || ( $ && $.bridget ) ) {
      return;
    }
    $.bridget = jQueryBridget;
  }
  
  updateJQuery( jQuery || window.jQuery );
  
  // -----  ----- //
  
  return jQueryBridget;
  
  }));
  
  /**
   * EvEmitter v1.1.0
   * Lil' event emitter
   * MIT License
   */
  
  /* jshint unused: true, undef: true, strict: true */
  
  ( function( global, factory ) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */
    if ( typeof define == 'function' && define.amd ) {
      // AMD - RequireJS
      define( 'ev-emitter/ev-emitter',factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS - Browserify, Webpack
      module.exports = factory();
    } else {
      // Browser globals
      global.EvEmitter = factory();
    }
  
  }( typeof window != 'undefined' ? window : this, function() {
  
  
  
  function EvEmitter() {}
  
  var proto = EvEmitter.prototype;
  
  proto.on = function( eventName, listener ) {
    if ( !eventName || !listener ) {
      return;
    }
    // set events hash
    var events = this._events = this._events || {};
    // set listeners array
    var listeners = events[ eventName ] = events[ eventName ] || [];
    // only add once
    if ( listeners.indexOf( listener ) == -1 ) {
      listeners.push( listener );
    }
  
    return this;
  };
  
  proto.once = function( eventName, listener ) {
    if ( !eventName || !listener ) {
      return;
    }
    // add event
    this.on( eventName, listener );
    // set once flag
    // set onceEvents hash
    var onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
    // set flag
    onceListeners[ listener ] = true;
  
    return this;
  };
  
  proto.off = function( eventName, listener ) {
    var listeners = this._events && this._events[ eventName ];
    if ( !listeners || !listeners.length ) {
      return;
    }
    var index = listeners.indexOf( listener );
    if ( index != -1 ) {
      listeners.splice( index, 1 );
    }
  
    return this;
  };
  
  proto.emitEvent = function( eventName, args ) {
    var listeners = this._events && this._events[ eventName ];
    if ( !listeners || !listeners.length ) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
  
    for ( var i=0; i < listeners.length; i++ ) {
      var listener = listeners[i]
      var isOnce = onceListeners && onceListeners[ listener ];
      if ( isOnce ) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off( eventName, listener );
        // unset once flag
        delete onceListeners[ listener ];
      }
      // trigger listener
      listener.apply( this, args );
    }
  
    return this;
  };
  
  proto.allOff = function() {
    delete this._events;
    delete this._onceEvents;
  };
  
  return EvEmitter;
  
  }));
  
  /*!
   * getSize v2.0.2
   * measure size of elements
   * MIT license
   */
  
  /*jshint browser: true, strict: true, undef: true, unused: true */
  /*global define: false, module: false, console: false */
  
  ( function( window, factory ) {
    'use strict';
  
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( 'get-size/get-size',[],function() {
        return factory();
      });
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory();
    } else {
      // browser global
      window.getSize = factory();
    }
  
  })( window, function factory() {
  'use strict';
  
  // -------------------------- helpers -------------------------- //
  
  // get a number from a string, not a percentage
  function getStyleSize( value ) {
    var num = parseFloat( value );
    // not a percent like '100%', and a number
    var isValid = value.indexOf('%') == -1 && !isNaN( num );
    return isValid && num;
  }
  
  function noop() {}
  
  var logError = typeof console == 'undefined' ? noop :
    function( message ) {
      console.error( message );
    };
  
  // -------------------------- measurements -------------------------- //
  
  var measurements = [
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'borderBottomWidth'
  ];
  
  var measurementsLength = measurements.length;
  
  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    };
    for ( var i=0; i < measurementsLength; i++ ) {
      var measurement = measurements[i];
      size[ measurement ] = 0;
    }
    return size;
  }
  
  // -------------------------- getStyle -------------------------- //
  
  /**
   * getStyle, get style of element, check for Firefox bug
   * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   */
  function getStyle( elem ) {
    var style = getComputedStyle( elem );
    if ( !style ) {
      logError( 'Style returned ' + style +
        '. Are you running this code in a hidden iframe on Firefox? ' +
        'See http://bit.ly/getsizebug1' );
    }
    return style;
  }
  
  // -------------------------- setup -------------------------- //
  
  var isSetup = false;
  
  var isBoxSizeOuter;
  
  /**
   * setup
   * check isBoxSizerOuter
   * do on first getSize() rather than on page load for Firefox bug
   */
  function setup() {
    // setup once
    if ( isSetup ) {
      return;
    }
    isSetup = true;
  
    // -------------------------- box sizing -------------------------- //
  
    /**
     * WebKit measures the outer-width on style.width on border-box elems
     * IE & Firefox<29 measures the inner-width
     */
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style.boxSizing = 'border-box';
  
    var body = document.body || document.documentElement;
    body.appendChild( div );
    var style = getStyle( div );
  
    getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
    body.removeChild( div );
  
  }
  
  // -------------------------- getSize -------------------------- //
  
  function getSize( elem ) {
    setup();
  
    // use querySeletor if elem is string
    if ( typeof elem == 'string' ) {
      elem = document.querySelector( elem );
    }
  
    // do not proceed on non-objects
    if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
      return;
    }
  
    var style = getStyle( elem );
  
    // if hidden, everything is 0
    if ( style.display == 'none' ) {
      return getZeroSize();
    }
  
    var size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;
  
    var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
  
    // get all measurements
    for ( var i=0; i < measurementsLength; i++ ) {
      var measurement = measurements[i];
      var value = style[ measurement ];
      var num = parseFloat( value );
      // any 'auto', 'medium' value will be 0
      size[ measurement ] = !isNaN( num ) ? num : 0;
    }
  
    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;
  
    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
  
    // overwrite width and height if we can get it from style
    var styleWidth = getStyleSize( style.width );
    if ( styleWidth !== false ) {
      size.width = styleWidth +
        // add padding and border unless it's already including it
        ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
    }
  
    var styleHeight = getStyleSize( style.height );
    if ( styleHeight !== false ) {
      size.height = styleHeight +
        // add padding and border unless it's already including it
        ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
    }
  
    size.innerWidth = size.width - ( paddingWidth + borderWidth );
    size.innerHeight = size.height - ( paddingHeight + borderHeight );
  
    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;
  
    return size;
  }
  
  return getSize;
  
  });
  
  /**
   * matchesSelector v2.0.2
   * matchesSelector( element, '.selector' )
   * MIT license
   */
  
  /*jshint browser: true, strict: true, undef: true, unused: true */
  
  ( function( window, factory ) {
    /*global define: false, module: false */
    'use strict';
    // universal module definition
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( 'desandro-matches-selector/matches-selector',factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory();
    } else {
      // browser global
      window.matchesSelector = factory();
    }
  
  }( window, function factory() {
    'use strict';
  
    var matchesMethod = ( function() {
      var ElemProto = window.Element.prototype;
      // check for the standard method name first
      if ( ElemProto.matches ) {
        return 'matches';
      }
      // check un-prefixed
      if ( ElemProto.matchesSelector ) {
        return 'matchesSelector';
      }
      // check vendor prefixes
      var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];
  
      for ( var i=0; i < prefixes.length; i++ ) {
        var prefix = prefixes[i];
        var method = prefix + 'MatchesSelector';
        if ( ElemProto[ method ] ) {
          return method;
        }
      }
    })();
  
    return function matchesSelector( elem, selector ) {
      return elem[ matchesMethod ]( selector );
    };
  
  }));
  
  /**
   * Fizzy UI utils v2.0.5
   * MIT license
   */
  
  /*jshint browser: true, undef: true, unused: true, strict: true */
  
  ( function( window, factory ) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */
  
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( 'fizzy-ui-utils/utils',[
        'desandro-matches-selector/matches-selector'
      ], function( matchesSelector ) {
        return factory( window, matchesSelector );
      });
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        window,
        require('desandro-matches-selector')
      );
    } else {
      // browser global
      window.fizzyUIUtils = factory(
        window,
        window.matchesSelector
      );
    }
  
  }( window, function factory( window, matchesSelector ) {
  
  
  
  var utils = {};
  
  // ----- extend ----- //
  
  // extends objects
  utils.extend = function( a, b ) {
    for ( var prop in b ) {
      a[ prop ] = b[ prop ];
    }
    return a;
  };
  
  // ----- modulo ----- //
  
  utils.modulo = function( num, div ) {
    return ( ( num % div ) + div ) % div;
  };
  
  // ----- makeArray ----- //
  
  // turn element or nodeList into an array
  utils.makeArray = function( obj ) {
    var ary = [];
    if ( Array.isArray( obj ) ) {
      // use object if already an array
      ary = obj;
    } else if ( obj && typeof obj == 'object' &&
      typeof obj.length == 'number' ) {
      // convert nodeList to array
      for ( var i=0; i < obj.length; i++ ) {
        ary.push( obj[i] );
      }
    } else {
      // array of single index
      ary.push( obj );
    }
    return ary;
  };
  
  // ----- removeFrom ----- //
  
  utils.removeFrom = function( ary, obj ) {
    var index = ary.indexOf( obj );
    if ( index != -1 ) {
      ary.splice( index, 1 );
    }
  };
  
  // ----- getParent ----- //
  
  utils.getParent = function( elem, selector ) {
    while ( elem.parentNode && elem != document.body ) {
      elem = elem.parentNode;
      if ( matchesSelector( elem, selector ) ) {
        return elem;
      }
    }
  };
  
  // ----- getQueryElement ----- //
  
  // use element as selector string
  utils.getQueryElement = function( elem ) {
    if ( typeof elem == 'string' ) {
      return document.querySelector( elem );
    }
    return elem;
  };
  
  // ----- handleEvent ----- //
  
  // enable .ontype to trigger from .addEventListener( elem, 'type' )
  utils.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };
  
  // ----- filterFindElements ----- //
  
  utils.filterFindElements = function( elems, selector ) {
    // make array of elems
    elems = utils.makeArray( elems );
    var ffElems = [];
  
    elems.forEach( function( elem ) {
      // check that elem is an actual element
      if ( !( elem instanceof HTMLElement ) ) {
        return;
      }
      // add elem if no selector
      if ( !selector ) {
        ffElems.push( elem );
        return;
      }
      // filter & find items if we have a selector
      // filter
      if ( matchesSelector( elem, selector ) ) {
        ffElems.push( elem );
      }
      // find children
      var childElems = elem.querySelectorAll( selector );
      // concat childElems to filterFound array
      for ( var i=0; i < childElems.length; i++ ) {
        ffElems.push( childElems[i] );
      }
    });
  
    return ffElems;
  };
  
  // ----- debounceMethod ----- //
  
  utils.debounceMethod = function( _class, methodName, threshold ) {
    // original method
    var method = _class.prototype[ methodName ];
    var timeoutName = methodName + 'Timeout';
  
    _class.prototype[ methodName ] = function() {
      var timeout = this[ timeoutName ];
      if ( timeout ) {
        clearTimeout( timeout );
      }
      var args = arguments;
  
      var _this = this;
      this[ timeoutName ] = setTimeout( function() {
        method.apply( _this, args );
        delete _this[ timeoutName ];
      }, threshold || 100 );
    };
  };
  
  // ----- docReady ----- //
  
  utils.docReady = function( callback ) {
    var readyState = document.readyState;
    if ( readyState == 'complete' || readyState == 'interactive' ) {
      // do async to allow for other scripts to run. metafizzy/flickity#441
      setTimeout( callback );
    } else {
      document.addEventListener( 'DOMContentLoaded', callback );
    }
  };
  
  // ----- htmlInit ----- //
  
  // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
  utils.toDashed = function( str ) {
    return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
      return $1 + '-' + $2;
    }).toLowerCase();
  };
  
  var console = window.console;
  /**
   * allow user to initialize classes via [data-namespace] or .js-namespace class
   * htmlInit( Widget, 'widgetName' )
   * options are parsed from data-namespace-options
   */
  utils.htmlInit = function( WidgetClass, namespace ) {
    utils.docReady( function() {
      var dashedNamespace = utils.toDashed( namespace );
      var dataAttr = 'data-' + dashedNamespace;
      var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
      var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
      var elems = utils.makeArray( dataAttrElems )
        .concat( utils.makeArray( jsDashElems ) );
      var dataOptionsAttr = dataAttr + '-options';
      var jQuery = window.jQuery;
  
      elems.forEach( function( elem ) {
        var attr = elem.getAttribute( dataAttr ) ||
          elem.getAttribute( dataOptionsAttr );
        var options;
        try {
          options = attr && JSON.parse( attr );
        } catch ( error ) {
          // log error, do not initialize
          if ( console ) {
            console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
            ': ' + error );
          }
          return;
        }
        // initialize
        var instance = new WidgetClass( elem, options );
        // make available via $().data('namespace')
        if ( jQuery ) {
          jQuery.data( elem, namespace, instance );
        }
      });
  
    });
  };
  
  // -----  ----- //
  
  return utils;
  
  }));
  
  /**
   * Outlayer Item
   */
  
  ( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD - RequireJS
      define( 'outlayer/item',[
          'ev-emitter/ev-emitter',
          'get-size/get-size'
        ],
        factory
      );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS - Browserify, Webpack
      module.exports = factory(
        require('ev-emitter'),
        require('get-size')
      );
    } else {
      // browser global
      window.Outlayer = {};
      window.Outlayer.Item = factory(
        window.EvEmitter,
        window.getSize
      );
    }
  
  }( window, function factory( EvEmitter, getSize ) {
  'use strict';
  
  // ----- helpers ----- //
  
  function isEmptyObj( obj ) {
    for ( var prop in obj ) {
      return false;
    }
    prop = null;
    return true;
  }
  
  // -------------------------- CSS3 support -------------------------- //
  
  
  var docElemStyle = document.documentElement.style;
  
  var transitionProperty = typeof docElemStyle.transition == 'string' ?
    'transition' : 'WebkitTransition';
  var transformProperty = typeof docElemStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  
  var transitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    transition: 'transitionend'
  }[ transitionProperty ];
  
  // cache all vendor properties that could have vendor prefix
  var vendorProperties = {
    transform: transformProperty,
    transition: transitionProperty,
    transitionDuration: transitionProperty + 'Duration',
    transitionProperty: transitionProperty + 'Property',
    transitionDelay: transitionProperty + 'Delay'
  };
  
  // -------------------------- Item -------------------------- //
  
  function Item( element, layout ) {
    if ( !element ) {
      return;
    }
  
    this.element = element;
    // parent layout class, i.e. Masonry, Isotope, or Packery
    this.layout = layout;
    this.position = {
      x: 0,
      y: 0
    };
  
    this._create();
  }
  
  // inherit EvEmitter
  var proto = Item.prototype = Object.create( EvEmitter.prototype );
  proto.constructor = Item;
  
  proto._create = function() {
    // transition objects
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    };
  
    this.css({
      position: 'absolute'
    });
  };
  
  // trigger specified handler for event type
  proto.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };
  
  proto.getSize = function() {
    this.size = getSize( this.element );
  };
  
  /**
   * apply CSS styles to element
   * @param {Object} style
   */
  proto.css = function( style ) {
    var elemStyle = this.element.style;
  
    for ( var prop in style ) {
      // use vendor property if available
      var supportedProp = vendorProperties[ prop ] || prop;
      elemStyle[ supportedProp ] = style[ prop ];
    }
  };
  
   // measure position, and sets it
  proto.getPosition = function() {
    var style = getComputedStyle( this.element );
    var isOriginLeft = this.layout._getOption('originLeft');
    var isOriginTop = this.layout._getOption('originTop');
    var xValue = style[ isOriginLeft ? 'left' : 'right' ];
    var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
    // convert percent to pixels
    var layoutSize = this.layout.size;
    var x = xValue.indexOf('%') != -1 ?
      ( parseFloat( xValue ) / 100 ) * layoutSize.width : parseInt( xValue, 10 );
    var y = yValue.indexOf('%') != -1 ?
      ( parseFloat( yValue ) / 100 ) * layoutSize.height : parseInt( yValue, 10 );
  
    // clean up 'auto' or other non-integer values
    x = isNaN( x ) ? 0 : x;
    y = isNaN( y ) ? 0 : y;
    // remove padding from measurement
    x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
    y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
  
    this.position.x = x;
    this.position.y = y;
  };
  
  // set settled position, apply padding
  proto.layoutPosition = function() {
    var layoutSize = this.layout.size;
    var style = {};
    var isOriginLeft = this.layout._getOption('originLeft');
    var isOriginTop = this.layout._getOption('originTop');
  
    // x
    var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
    var xProperty = isOriginLeft ? 'left' : 'right';
    var xResetProperty = isOriginLeft ? 'right' : 'left';
  
    var x = this.position.x + layoutSize[ xPadding ];
    // set in percentage or pixels
    style[ xProperty ] = this.getXValue( x );
    // reset other property
    style[ xResetProperty ] = '';
  
    // y
    var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
    var yProperty = isOriginTop ? 'top' : 'bottom';
    var yResetProperty = isOriginTop ? 'bottom' : 'top';
  
    var y = this.position.y + layoutSize[ yPadding ];
    // set in percentage or pixels
    style[ yProperty ] = this.getYValue( y );
    // reset other property
    style[ yResetProperty ] = '';
  
    this.css( style );
    this.emitEvent( 'layout', [ this ] );
  };
  
  proto.getXValue = function( x ) {
    var isHorizontal = this.layout._getOption('horizontal');
    return this.layout.options.percentPosition && !isHorizontal ?
      ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
  };
  
  proto.getYValue = function( y ) {
    var isHorizontal = this.layout._getOption('horizontal');
    return this.layout.options.percentPosition && isHorizontal ?
      ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
  };
  
  proto._transitionTo = function( x, y ) {
    this.getPosition();
    // get current x & y from top/left
    var curX = this.position.x;
    var curY = this.position.y;
  
    var compareX = parseInt( x, 10 );
    var compareY = parseInt( y, 10 );
    var didNotMove = compareX === this.position.x && compareY === this.position.y;
  
    // save end position
    this.setPosition( x, y );
  
    // if did not move and not transitioning, just go to layout
    if ( didNotMove && !this.isTransitioning ) {
      this.layoutPosition();
      return;
    }
  
    var transX = x - curX;
    var transY = y - curY;
    var transitionStyle = {};
    transitionStyle.transform = this.getTranslate( transX, transY );
  
    this.transition({
      to: transitionStyle,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: true
    });
  };
  
  proto.getTranslate = function( x, y ) {
    // flip cooridinates if origin on right or bottom
    var isOriginLeft = this.layout._getOption('originLeft');
    var isOriginTop = this.layout._getOption('originTop');
    x = isOriginLeft ? x : -x;
    y = isOriginTop ? y : -y;
    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  };
  
  // non transition + transform support
  proto.goTo = function( x, y ) {
    this.setPosition( x, y );
    this.layoutPosition();
  };
  
  proto.moveTo = proto._transitionTo;
  
  proto.setPosition = function( x, y ) {
    this.position.x = parseInt( x, 10 );
    this.position.y = parseInt( y, 10 );
  };
  
  // ----- transition ----- //
  
  /**
   * @param {Object} style - CSS
   * @param {Function} onTransitionEnd
   */
  
  // non transition, just trigger callback
  proto._nonTransition = function( args ) {
    this.css( args.to );
    if ( args.isCleaning ) {
      this._removeStyles( args.to );
    }
    for ( var prop in args.onTransitionEnd ) {
      args.onTransitionEnd[ prop ].call( this );
    }
  };
  
  /**
   * proper transition
   * @param {Object} args - arguments
   *   @param {Object} to - style to transition to
   *   @param {Object} from - style to start transition from
   *   @param {Boolean} isCleaning - removes transition styles after transition
   *   @param {Function} onTransitionEnd - callback
   */
  proto.transition = function( args ) {
    // redirect to nonTransition if no transition duration
    if ( !parseFloat( this.layout.options.transitionDuration ) ) {
      this._nonTransition( args );
      return;
    }
  
    var _transition = this._transn;
    // keep track of onTransitionEnd callback by css property
    for ( var prop in args.onTransitionEnd ) {
      _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
    }
    // keep track of properties that are transitioning
    for ( prop in args.to ) {
      _transition.ingProperties[ prop ] = true;
      // keep track of properties to clean up when transition is done
      if ( args.isCleaning ) {
        _transition.clean[ prop ] = true;
      }
    }
  
    // set from styles
    if ( args.from ) {
      this.css( args.from );
      // force redraw. http://blog.alexmaccaw.com/css-transitions
      var h = this.element.offsetHeight;
      // hack for JSHint to hush about unused var
      h = null;
    }
    // enable transition
    this.enableTransition( args.to );
    // set styles that are transitioning
    this.css( args.to );
  
    this.isTransitioning = true;
  
  };
  
  // dash before all cap letters, including first for
  // WebkitTransform => -webkit-transform
  function toDashedAll( str ) {
    return str.replace( /([A-Z])/g, function( $1 ) {
      return '-' + $1.toLowerCase();
    });
  }
  
  var transitionProps = 'opacity,' + toDashedAll( transformProperty );
  
  proto.enableTransition = function(/* style */) {
    // HACK changing transitionProperty during a transition
    // will cause transition to jump
    if ( this.isTransitioning ) {
      return;
    }
  
    // make `transition: foo, bar, baz` from style object
    // HACK un-comment this when enableTransition can work
    // while a transition is happening
    // var transitionValues = [];
    // for ( var prop in style ) {
    //   // dash-ify camelCased properties like WebkitTransition
    //   prop = vendorProperties[ prop ] || prop;
    //   transitionValues.push( toDashedAll( prop ) );
    // }
    // munge number to millisecond, to match stagger
    var duration = this.layout.options.transitionDuration;
    duration = typeof duration == 'number' ? duration + 'ms' : duration;
    // enable transition styles
    this.css({
      transitionProperty: transitionProps,
      transitionDuration: duration,
      transitionDelay: this.staggerDelay || 0
    });
    // listen for transition end event
    this.element.addEventListener( transitionEndEvent, this, false );
  };
  
  // ----- events ----- //
  
  proto.onwebkitTransitionEnd = function( event ) {
    this.ontransitionend( event );
  };
  
  proto.onotransitionend = function( event ) {
    this.ontransitionend( event );
  };
  
  // properties that I munge to make my life easier
  var dashedVendorProperties = {
    '-webkit-transform': 'transform'
  };
  
  proto.ontransitionend = function( event ) {
    // disregard bubbled events from children
    if ( event.target !== this.element ) {
      return;
    }
    var _transition = this._transn;
    // get property name of transitioned property, convert to prefix-free
    var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;
  
    // remove property that has completed transitioning
    delete _transition.ingProperties[ propertyName ];
    // check if any properties are still transitioning
    if ( isEmptyObj( _transition.ingProperties ) ) {
      // all properties have completed transitioning
      this.disableTransition();
    }
    // clean style
    if ( propertyName in _transition.clean ) {
      // clean up style
      this.element.style[ event.propertyName ] = '';
      delete _transition.clean[ propertyName ];
    }
    // trigger onTransitionEnd callback
    if ( propertyName in _transition.onEnd ) {
      var onTransitionEnd = _transition.onEnd[ propertyName ];
      onTransitionEnd.call( this );
      delete _transition.onEnd[ propertyName ];
    }
  
    this.emitEvent( 'transitionEnd', [ this ] );
  };
  
  proto.disableTransition = function() {
    this.removeTransitionStyles();
    this.element.removeEventListener( transitionEndEvent, this, false );
    this.isTransitioning = false;
  };
  
  /**
   * removes style property from element
   * @param {Object} style
  **/
  proto._removeStyles = function( style ) {
    // clean up transition styles
    var cleanStyle = {};
    for ( var prop in style ) {
      cleanStyle[ prop ] = '';
    }
    this.css( cleanStyle );
  };
  
  var cleanTransitionStyle = {
    transitionProperty: '',
    transitionDuration: '',
    transitionDelay: ''
  };
  
  proto.removeTransitionStyles = function() {
    // remove transition
    this.css( cleanTransitionStyle );
  };
  
  // ----- stagger ----- //
  
  proto.stagger = function( delay ) {
    delay = isNaN( delay ) ? 0 : delay;
    this.staggerDelay = delay + 'ms';
  };
  
  // ----- show/hide/remove ----- //
  
  // remove element from DOM
  proto.removeElem = function() {
    this.element.parentNode.removeChild( this.element );
    // remove display: none
    this.css({ display: '' });
    this.emitEvent( 'remove', [ this ] );
  };
  
  proto.remove = function() {
    // just remove element if no transition support or no transition
    if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
      this.removeElem();
      return;
    }
  
    // start transition
    this.once( 'transitionEnd', function() {
      this.removeElem();
    });
    this.hide();
  };
  
  proto.reveal = function() {
    delete this.isHidden;
    // remove display: none
    this.css({ display: '' });
  
    var options = this.layout.options;
  
    var onTransitionEnd = {};
    var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
    onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;
  
    this.transition({
      from: options.hiddenStyle,
      to: options.visibleStyle,
      isCleaning: true,
      onTransitionEnd: onTransitionEnd
    });
  };
  
  proto.onRevealTransitionEnd = function() {
    // check if still visible
    // during transition, item may have been hidden
    if ( !this.isHidden ) {
      this.emitEvent('reveal');
    }
  };
  
  /**
   * get style property use for hide/reveal transition end
   * @param {String} styleProperty - hiddenStyle/visibleStyle
   * @returns {String}
   */
  proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
    var optionStyle = this.layout.options[ styleProperty ];
    // use opacity
    if ( optionStyle.opacity ) {
      return 'opacity';
    }
    // get first property
    for ( var prop in optionStyle ) {
      return prop;
    }
  };
  
  proto.hide = function() {
    // set flag
    this.isHidden = true;
    // remove display: none
    this.css({ display: '' });
  
    var options = this.layout.options;
  
    var onTransitionEnd = {};
    var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
    onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;
  
    this.transition({
      from: options.visibleStyle,
      to: options.hiddenStyle,
      // keep hidden stuff hidden
      isCleaning: true,
      onTransitionEnd: onTransitionEnd
    });
  };
  
  proto.onHideTransitionEnd = function() {
    // check if still hidden
    // during transition, item may have been un-hidden
    if ( this.isHidden ) {
      this.css({ display: 'none' });
      this.emitEvent('hide');
    }
  };
  
  proto.destroy = function() {
    this.css({
      position: '',
      left: '',
      right: '',
      top: '',
      bottom: '',
      transition: '',
      transform: ''
    });
  };
  
  return Item;
  
  }));
  
  /*!
   * Outlayer v2.1.0
   * the brains and guts of a layout library
   * MIT license
   */
  
  ( function( window, factory ) {
    'use strict';
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD - RequireJS
      define( 'outlayer/outlayer',[
          'ev-emitter/ev-emitter',
          'get-size/get-size',
          'fizzy-ui-utils/utils',
          './item'
        ],
        function( EvEmitter, getSize, utils, Item ) {
          return factory( window, EvEmitter, getSize, utils, Item);
        }
      );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS - Browserify, Webpack
      module.exports = factory(
        window,
        require('ev-emitter'),
        require('get-size'),
        require('fizzy-ui-utils'),
        require('./item')
      );
    } else {
      // browser global
      window.Outlayer = factory(
        window,
        window.EvEmitter,
        window.getSize,
        window.fizzyUIUtils,
        window.Outlayer.Item
      );
    }
  
  }( window, function factory( window, EvEmitter, getSize, utils, Item ) {
  'use strict';
  
  // ----- vars ----- //
  
  var console = window.console;
  var jQuery = window.jQuery;
  var noop = function() {};
  
  // -------------------------- Outlayer -------------------------- //
  
  // globally unique identifiers
  var GUID = 0;
  // internal store of all Outlayer intances
  var instances = {};
  
  
  /**
   * @param {Element, String} element
   * @param {Object} options
   * @constructor
   */
  function Outlayer( element, options ) {
    var queryElement = utils.getQueryElement( element );
    if ( !queryElement ) {
      if ( console ) {
        console.error( 'Bad element for ' + this.constructor.namespace +
          ': ' + ( queryElement || element ) );
      }
      return;
    }
    this.element = queryElement;
    // add jQuery
    if ( jQuery ) {
      this.$element = jQuery( this.element );
    }
  
    // options
    this.options = utils.extend( {}, this.constructor.defaults );
    this.option( options );
  
    // add id for Outlayer.getFromElement
    var id = ++GUID;
    this.element.outlayerGUID = id; // expando
    instances[ id ] = this; // associate via id
  
    // kick it off
    this._create();
  
    var isInitLayout = this._getOption('initLayout');
    if ( isInitLayout ) {
      this.layout();
    }
  }
  
  // settings are for internal use only
  Outlayer.namespace = 'outlayer';
  Outlayer.Item = Item;
  
  // default options
  Outlayer.defaults = {
    containerStyle: {
      position: 'relative'
    },
    initLayout: true,
    originLeft: true,
    originTop: true,
    resize: true,
    resizeContainer: true,
    // item options
    transitionDuration: '0.4s',
    hiddenStyle: {
      opacity: 0,
      transform: 'scale(0.001)'
    },
    visibleStyle: {
      opacity: 1,
      transform: 'scale(1)'
    }
  };
  
  var proto = Outlayer.prototype;
  // inherit EvEmitter
  utils.extend( proto, EvEmitter.prototype );
  
  /**
   * set options
   * @param {Object} opts
   */
  proto.option = function( opts ) {
    utils.extend( this.options, opts );
  };
  
  /**
   * get backwards compatible option value, check old name
   */
  proto._getOption = function( option ) {
    var oldOption = this.constructor.compatOptions[ option ];
    return oldOption && this.options[ oldOption ] !== undefined ?
      this.options[ oldOption ] : this.options[ option ];
  };
  
  Outlayer.compatOptions = {
    // currentName: oldName
    initLayout: 'isInitLayout',
    horizontal: 'isHorizontal',
    layoutInstant: 'isLayoutInstant',
    originLeft: 'isOriginLeft',
    originTop: 'isOriginTop',
    resize: 'isResizeBound',
    resizeContainer: 'isResizingContainer'
  };
  
  proto._create = function() {
    // get items from children
    this.reloadItems();
    // elements that affect layout, but are not laid out
    this.stamps = [];
    this.stamp( this.options.stamp );
    // set container style
    utils.extend( this.element.style, this.options.containerStyle );
  
    // bind resize method
    var canBindResize = this._getOption('resize');
    if ( canBindResize ) {
      this.bindResize();
    }
  };
  
  // goes through all children again and gets bricks in proper order
  proto.reloadItems = function() {
    // collection of item elements
    this.items = this._itemize( this.element.children );
  };
  
  
  /**
   * turn elements into Outlayer.Items to be used in layout
   * @param {Array or NodeList or HTMLElement} elems
   * @returns {Array} items - collection of new Outlayer Items
   */
  proto._itemize = function( elems ) {
  
    var itemElems = this._filterFindItemElements( elems );
    var Item = this.constructor.Item;
  
    // create new Outlayer Items for collection
    var items = [];
    for ( var i=0; i < itemElems.length; i++ ) {
      var elem = itemElems[i];
      var item = new Item( elem, this );
      items.push( item );
    }
  
    return items;
  };
  
  /**
   * get item elements to be used in layout
   * @param {Array or NodeList or HTMLElement} elems
   * @returns {Array} items - item elements
   */
  proto._filterFindItemElements = function( elems ) {
    return utils.filterFindElements( elems, this.options.itemSelector );
  };
  
  /**
   * getter method for getting item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getItemElements = function() {
    return this.items.map( function( item ) {
      return item.element;
    });
  };
  
  // ----- init & layout ----- //
  
  /**
   * lays out all items
   */
  proto.layout = function() {
    this._resetLayout();
    this._manageStamps();
  
    // don't animate first layout
    var layoutInstant = this._getOption('layoutInstant');
    var isInstant = layoutInstant !== undefined ?
      layoutInstant : !this._isLayoutInited;
    this.layoutItems( this.items, isInstant );
  
    // flag for initalized
    this._isLayoutInited = true;
  };
  
  // _init is alias for layout
  proto._init = proto.layout;
  
  /**
   * logic before any new layout
   */
  proto._resetLayout = function() {
    this.getSize();
  };
  
  
  proto.getSize = function() {
    this.size = getSize( this.element );
  };
  
  /**
   * get measurement from option, for columnWidth, rowHeight, gutter
   * if option is String -> get element from selector string, & get size of element
   * if option is Element -> get size of element
   * else use option as a number
   *
   * @param {String} measurement
   * @param {String} size - width or height
   * @private
   */
  proto._getMeasurement = function( measurement, size ) {
    var option = this.options[ measurement ];
    var elem;
    if ( !option ) {
      // default to 0
      this[ measurement ] = 0;
    } else {
      // use option as an element
      if ( typeof option == 'string' ) {
        elem = this.element.querySelector( option );
      } else if ( option instanceof HTMLElement ) {
        elem = option;
      }
      // use size of element, if element
      this[ measurement ] = elem ? getSize( elem )[ size ] : option;
    }
  };
  
  /**
   * layout a collection of item elements
   * @api public
   */
  proto.layoutItems = function( items, isInstant ) {
    items = this._getItemsForLayout( items );
  
    this._layoutItems( items, isInstant );
  
    this._postLayout();
  };
  
  /**
   * get the items to be laid out
   * you may want to skip over some items
   * @param {Array} items
   * @returns {Array} items
   */
  proto._getItemsForLayout = function( items ) {
    return items.filter( function( item ) {
      return !item.isIgnored;
    });
  };
  
  /**
   * layout items
   * @param {Array} items
   * @param {Boolean} isInstant
   */
  proto._layoutItems = function( items, isInstant ) {
    this._emitCompleteOnItems( 'layout', items );
  
    if ( !items || !items.length ) {
      // no items, emit event with empty array
      return;
    }
  
    var queue = [];
  
    items.forEach( function( item ) {
      // get x/y object from method
      var position = this._getItemLayoutPosition( item );
      // enqueue
      position.item = item;
      position.isInstant = isInstant || item.isLayoutInstant;
      queue.push( position );
    }, this );
  
    this._processLayoutQueue( queue );
  };
  
  /**
   * get item layout position
   * @param {Outlayer.Item} item
   * @returns {Object} x and y position
   */
  proto._getItemLayoutPosition = function( /* item */ ) {
    return {
      x: 0,
      y: 0
    };
  };
  
  /**
   * iterate over array and position each item
   * Reason being - separating this logic prevents 'layout invalidation'
   * thx @paul_irish
   * @param {Array} queue
   */
  proto._processLayoutQueue = function( queue ) {
    this.updateStagger();
    queue.forEach( function( obj, i ) {
      this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
    }, this );
  };
  
  // set stagger from option in milliseconds number
  proto.updateStagger = function() {
    var stagger = this.options.stagger;
    if ( stagger === null || stagger === undefined ) {
      this.stagger = 0;
      return;
    }
    this.stagger = getMilliseconds( stagger );
    return this.stagger;
  };
  
  /**
   * Sets position of item in DOM
   * @param {Outlayer.Item} item
   * @param {Number} x - horizontal position
   * @param {Number} y - vertical position
   * @param {Boolean} isInstant - disables transitions
   */
  proto._positionItem = function( item, x, y, isInstant, i ) {
    if ( isInstant ) {
      // if not transition, just set CSS
      item.goTo( x, y );
    } else {
      item.stagger( i * this.stagger );
      item.moveTo( x, y );
    }
  };
  
  /**
   * Any logic you want to do after each layout,
   * i.e. size the container
   */
  proto._postLayout = function() {
    this.resizeContainer();
  };
  
  proto.resizeContainer = function() {
    var isResizingContainer = this._getOption('resizeContainer');
    if ( !isResizingContainer ) {
      return;
    }
    var size = this._getContainerSize();
    if ( size ) {
      this._setContainerMeasure( size.width, true );
      this._setContainerMeasure( size.height, false );
    }
  };
  
  /**
   * Sets width or height of container if returned
   * @returns {Object} size
   *   @param {Number} width
   *   @param {Number} height
   */
  proto._getContainerSize = noop;
  
  /**
   * @param {Number} measure - size of width or height
   * @param {Boolean} isWidth
   */
  proto._setContainerMeasure = function( measure, isWidth ) {
    if ( measure === undefined ) {
      return;
    }
  
    var elemSize = this.size;
    // add padding and border width if border box
    if ( elemSize.isBorderBox ) {
      measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
        elemSize.borderLeftWidth + elemSize.borderRightWidth :
        elemSize.paddingBottom + elemSize.paddingTop +
        elemSize.borderTopWidth + elemSize.borderBottomWidth;
    }
  
    measure = Math.max( measure, 0 );
    this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
  };
  
  /**
   * emit eventComplete on a collection of items events
   * @param {String} eventName
   * @param {Array} items - Outlayer.Items
   */
  proto._emitCompleteOnItems = function( eventName, items ) {
    var _this = this;
    function onComplete() {
      _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
    }
  
    var count = items.length;
    if ( !items || !count ) {
      onComplete();
      return;
    }
  
    var doneCount = 0;
    function tick() {
      doneCount++;
      if ( doneCount == count ) {
        onComplete();
      }
    }
  
    // bind callback
    items.forEach( function( item ) {
      item.once( eventName, tick );
    });
  };
  
  /**
   * emits events via EvEmitter and jQuery events
   * @param {String} type - name of event
   * @param {Event} event - original event
   * @param {Array} args - extra arguments
   */
  proto.dispatchEvent = function( type, event, args ) {
    // add original event to arguments
    var emitArgs = event ? [ event ].concat( args ) : args;
    this.emitEvent( type, emitArgs );
  
    if ( jQuery ) {
      // set this.$element
      this.$element = this.$element || jQuery( this.element );
      if ( event ) {
        // create jQuery event
        var $event = jQuery.Event( event );
        $event.type = type;
        this.$element.trigger( $event, args );
      } else {
        // just trigger with type if no event available
        this.$element.trigger( type, args );
      }
    }
  };
  
  // -------------------------- ignore & stamps -------------------------- //
  
  
  /**
   * keep item in collection, but do not lay it out
   * ignored items do not get skipped in layout
   * @param {Element} elem
   */
  proto.ignore = function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      item.isIgnored = true;
    }
  };
  
  /**
   * return item to layout collection
   * @param {Element} elem
   */
  proto.unignore = function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      delete item.isIgnored;
    }
  };
  
  /**
   * adds elements to stamps
   * @param {NodeList, Array, Element, or String} elems
   */
  proto.stamp = function( elems ) {
    elems = this._find( elems );
    if ( !elems ) {
      return;
    }
  
    this.stamps = this.stamps.concat( elems );
    // ignore
    elems.forEach( this.ignore, this );
  };
  
  /**
   * removes elements to stamps
   * @param {NodeList, Array, or Element} elems
   */
  proto.unstamp = function( elems ) {
    elems = this._find( elems );
    if ( !elems ){
      return;
    }
  
    elems.forEach( function( elem ) {
      // filter out removed stamp elements
      utils.removeFrom( this.stamps, elem );
      this.unignore( elem );
    }, this );
  };
  
  /**
   * finds child elements
   * @param {NodeList, Array, Element, or String} elems
   * @returns {Array} elems
   */
  proto._find = function( elems ) {
    if ( !elems ) {
      return;
    }
    // if string, use argument as selector string
    if ( typeof elems == 'string' ) {
      elems = this.element.querySelectorAll( elems );
    }
    elems = utils.makeArray( elems );
    return elems;
  };
  
  proto._manageStamps = function() {
    if ( !this.stamps || !this.stamps.length ) {
      return;
    }
  
    this._getBoundingRect();
  
    this.stamps.forEach( this._manageStamp, this );
  };
  
  // update boundingLeft / Top
  proto._getBoundingRect = function() {
    // get bounding rect for container element
    var boundingRect = this.element.getBoundingClientRect();
    var size = this.size;
    this._boundingRect = {
      left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
      top: boundingRect.top + size.paddingTop + size.borderTopWidth,
      right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
      bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
    };
  };
  
  /**
   * @param {Element} stamp
  **/
  proto._manageStamp = noop;
  
  /**
   * get x/y position of element relative to container element
   * @param {Element} elem
   * @returns {Object} offset - has left, top, right, bottom
   */
  proto._getElementOffset = function( elem ) {
    var boundingRect = elem.getBoundingClientRect();
    var thisRect = this._boundingRect;
    var size = getSize( elem );
    var offset = {
      left: boundingRect.left - thisRect.left - size.marginLeft,
      top: boundingRect.top - thisRect.top - size.marginTop,
      right: thisRect.right - boundingRect.right - size.marginRight,
      bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
    };
    return offset;
  };
  
  // -------------------------- resize -------------------------- //
  
  // enable event handlers for listeners
  // i.e. resize -> onresize
  proto.handleEvent = utils.handleEvent;
  
  /**
   * Bind layout to window resizing
   */
  proto.bindResize = function() {
    window.addEventListener( 'resize', this );
    this.isResizeBound = true;
  };
  
  /**
   * Unbind layout to window resizing
   */
  proto.unbindResize = function() {
    window.removeEventListener( 'resize', this );
    this.isResizeBound = false;
  };
  
  proto.onresize = function() {
    this.resize();
  };
  
  utils.debounceMethod( Outlayer, 'onresize', 100 );
  
  proto.resize = function() {
    // don't trigger if size did not change
    // or if resize was unbound. See #9
    if ( !this.isResizeBound || !this.needsResizeLayout() ) {
      return;
    }
  
    this.layout();
  };
  
  /**
   * check if layout is needed post layout
   * @returns Boolean
   */
  proto.needsResizeLayout = function() {
    var size = getSize( this.element );
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var hasSizes = this.size && size;
    return hasSizes && size.innerWidth !== this.size.innerWidth;
  };
  
  // -------------------------- methods -------------------------- //
  
  /**
   * add items to Outlayer instance
   * @param {Array or NodeList or Element} elems
   * @returns {Array} items - Outlayer.Items
  **/
  proto.addItems = function( elems ) {
    var items = this._itemize( elems );
    // add items to collection
    if ( items.length ) {
      this.items = this.items.concat( items );
    }
    return items;
  };
  
  /**
   * Layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.appended = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // layout and reveal just the new items
    this.layoutItems( items, true );
    this.reveal( items );
  };
  
  /**
   * Layout prepended elements
   * @param {Array or NodeList or Element} elems
   */
  proto.prepended = function( elems ) {
    var items = this._itemize( elems );
    if ( !items.length ) {
      return;
    }
    // add items to beginning of collection
    var previousItems = this.items.slice(0);
    this.items = items.concat( previousItems );
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // layout new stuff without transition
    this.layoutItems( items, true );
    this.reveal( items );
    // layout previous items
    this.layoutItems( previousItems );
  };
  
  /**
   * reveal a collection of items
   * @param {Array of Outlayer.Items} items
   */
  proto.reveal = function( items ) {
    this._emitCompleteOnItems( 'reveal', items );
    if ( !items || !items.length ) {
      return;
    }
    var stagger = this.updateStagger();
    items.forEach( function( item, i ) {
      item.stagger( i * stagger );
      item.reveal();
    });
  };
  
  /**
   * hide a collection of items
   * @param {Array of Outlayer.Items} items
   */
  proto.hide = function( items ) {
    this._emitCompleteOnItems( 'hide', items );
    if ( !items || !items.length ) {
      return;
    }
    var stagger = this.updateStagger();
    items.forEach( function( item, i ) {
      item.stagger( i * stagger );
      item.hide();
    });
  };
  
  /**
   * reveal item elements
   * @param {Array}, {Element}, {NodeList} items
   */
  proto.revealItemElements = function( elems ) {
    var items = this.getItems( elems );
    this.reveal( items );
  };
  
  /**
   * hide item elements
   * @param {Array}, {Element}, {NodeList} items
   */
  proto.hideItemElements = function( elems ) {
    var items = this.getItems( elems );
    this.hide( items );
  };
  
  /**
   * get Outlayer.Item, given an Element
   * @param {Element} elem
   * @param {Function} callback
   * @returns {Outlayer.Item} item
   */
  proto.getItem = function( elem ) {
    // loop through items to get the one that matches
    for ( var i=0; i < this.items.length; i++ ) {
      var item = this.items[i];
      if ( item.element == elem ) {
        // return item
        return item;
      }
    }
  };
  
  /**
   * get collection of Outlayer.Items, given Elements
   * @param {Array} elems
   * @returns {Array} items - Outlayer.Items
   */
  proto.getItems = function( elems ) {
    elems = utils.makeArray( elems );
    var items = [];
    elems.forEach( function( elem ) {
      var item = this.getItem( elem );
      if ( item ) {
        items.push( item );
      }
    }, this );
  
    return items;
  };
  
  /**
   * remove element(s) from instance and DOM
   * @param {Array or NodeList or Element} elems
   */
  proto.remove = function( elems ) {
    var removeItems = this.getItems( elems );
  
    this._emitCompleteOnItems( 'remove', removeItems );
  
    // bail if no items to remove
    if ( !removeItems || !removeItems.length ) {
      return;
    }
  
    removeItems.forEach( function( item ) {
      item.remove();
      // remove item from collection
      utils.removeFrom( this.items, item );
    }, this );
  };
  
  // ----- destroy ----- //
  
  // remove and disable Outlayer instance
  proto.destroy = function() {
    // clean up dynamic styles
    var style = this.element.style;
    style.height = '';
    style.position = '';
    style.width = '';
    // destroy items
    this.items.forEach( function( item ) {
      item.destroy();
    });
  
    this.unbindResize();
  
    var id = this.element.outlayerGUID;
    delete instances[ id ]; // remove reference to instance by id
    delete this.element.outlayerGUID;
    // remove data for jQuery
    if ( jQuery ) {
      jQuery.removeData( this.element, this.constructor.namespace );
    }
  
  };
  
  // -------------------------- data -------------------------- //
  
  /**
   * get Outlayer instance from element
   * @param {Element} elem
   * @returns {Outlayer}
   */
  Outlayer.data = function( elem ) {
    elem = utils.getQueryElement( elem );
    var id = elem && elem.outlayerGUID;
    return id && instances[ id ];
  };
  
  
  // -------------------------- create Outlayer class -------------------------- //
  
  /**
   * create a layout class
   * @param {String} namespace
   */
  Outlayer.create = function( namespace, options ) {
    // sub-class Outlayer
    var Layout = subclass( Outlayer );
    // apply new options and compatOptions
    Layout.defaults = utils.extend( {}, Outlayer.defaults );
    utils.extend( Layout.defaults, options );
    Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );
  
    Layout.namespace = namespace;
  
    Layout.data = Outlayer.data;
  
    // sub-class Item
    Layout.Item = subclass( Item );
  
    // -------------------------- declarative -------------------------- //
  
    utils.htmlInit( Layout, namespace );
  
    // -------------------------- jQuery bridge -------------------------- //
  
    // make into jQuery plugin
    if ( jQuery && jQuery.bridget ) {
      jQuery.bridget( namespace, Layout );
    }
  
    return Layout;
  };
  
  function subclass( Parent ) {
    function SubClass() {
      Parent.apply( this, arguments );
    }
  
    SubClass.prototype = Object.create( Parent.prototype );
    SubClass.prototype.constructor = SubClass;
  
    return SubClass;
  }
  
  // ----- helpers ----- //
  
  // how many milliseconds are in each unit
  var msUnits = {
    ms: 1,
    s: 1000
  };
  
  // munge time-like parameter into millisecond number
  // '0.4s' -> 40
  function getMilliseconds( time ) {
    if ( typeof time == 'number' ) {
      return time;
    }
    var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
    var num = matches && matches[1];
    var unit = matches && matches[2];
    if ( !num.length ) {
      return 0;
    }
    num = parseFloat( num );
    var mult = msUnits[ unit ] || 1;
    return num * mult;
  }
  
  // ----- fin ----- //
  
  // back in global
  Outlayer.Item = Item;
  
  return Outlayer;
  
  }));
  
  /**
   * Isotope Item
  **/
  
  ( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( 'isotope-layout/js/item',[
          'outlayer/outlayer'
        ],
        factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        require('outlayer')
      );
    } else {
      // browser global
      window.Isotope = window.Isotope || {};
      window.Isotope.Item = factory(
        window.Outlayer
      );
    }
  
  }( window, function factory( Outlayer ) {
  'use strict';
  
  // -------------------------- Item -------------------------- //
  
  // sub-class Outlayer Item
  function Item() {
    Outlayer.Item.apply( this, arguments );
  }
  
  var proto = Item.prototype = Object.create( Outlayer.Item.prototype );
  
  var _create = proto._create;
  proto._create = function() {
    // assign id, used for original-order sorting
    this.id = this.layout.itemGUID++;
    _create.call( this );
    this.sortData = {};
  };
  
  proto.updateSortData = function() {
    if ( this.isIgnored ) {
      return;
    }
    // default sorters
    this.sortData.id = this.id;
    // for backward compatibility
    this.sortData['original-order'] = this.id;
    this.sortData.random = Math.random();
    // go thru getSortData obj and apply the sorters
    var getSortData = this.layout.options.getSortData;
    var sorters = this.layout._sorters;
    for ( var key in getSortData ) {
      var sorter = sorters[ key ];
      this.sortData[ key ] = sorter( this.element, this );
    }
  };
  
  var _destroy = proto.destroy;
  proto.destroy = function() {
    // call super
    _destroy.apply( this, arguments );
    // reset display, #741
    this.css({
      display: ''
    });
  };
  
  return Item;
  
  }));
  
  /**
   * Isotope LayoutMode
   */
  
  ( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( 'isotope-layout/js/layout-mode',[
          'get-size/get-size',
          'outlayer/outlayer'
        ],
        factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        require('get-size'),
        require('outlayer')
      );
    } else {
      // browser global
      window.Isotope = window.Isotope || {};
      window.Isotope.LayoutMode = factory(
        window.getSize,
        window.Outlayer
      );
    }
  
  }( window, function factory( getSize, Outlayer ) {
    'use strict';
  
    // layout mode class
    function LayoutMode( isotope ) {
      this.isotope = isotope;
      // link properties
      if ( isotope ) {
        this.options = isotope.options[ this.namespace ];
        this.element = isotope.element;
        this.items = isotope.filteredItems;
        this.size = isotope.size;
      }
    }
  
    var proto = LayoutMode.prototype;
  
    /**
     * some methods should just defer to default Outlayer method
     * and reference the Isotope instance as `this`
    **/
    var facadeMethods = [
      '_resetLayout',
      '_getItemLayoutPosition',
      '_manageStamp',
      '_getContainerSize',
      '_getElementOffset',
      'needsResizeLayout',
      '_getOption'
    ];
  
    facadeMethods.forEach( function( methodName ) {
      proto[ methodName ] = function() {
        return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
      };
    });
  
    // -----  ----- //
  
    // for horizontal layout modes, check vertical size
    proto.needsVerticalResizeLayout = function() {
      // don't trigger if size did not change
      var size = getSize( this.isotope.element );
      // check that this.size and size are there
      // IE8 triggers resize on body size change, so they might not be
      var hasSizes = this.isotope.size && size;
      return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    };
  
    // ----- measurements ----- //
  
    proto._getMeasurement = function() {
      this.isotope._getMeasurement.apply( this, arguments );
    };
  
    proto.getColumnWidth = function() {
      this.getSegmentSize( 'column', 'Width' );
    };
  
    proto.getRowHeight = function() {
      this.getSegmentSize( 'row', 'Height' );
    };
  
    /**
     * get columnWidth or rowHeight
     * segment: 'column' or 'row'
     * size 'Width' or 'Height'
    **/
    proto.getSegmentSize = function( segment, size ) {
      var segmentName = segment + size;
      var outerSize = 'outer' + size;
      // columnWidth / outerWidth // rowHeight / outerHeight
      this._getMeasurement( segmentName, outerSize );
      // got rowHeight or columnWidth, we can chill
      if ( this[ segmentName ] ) {
        return;
      }
      // fall back to item of first element
      var firstItemSize = this.getFirstItemSize();
      this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
        // or size of container
        this.isotope.size[ 'inner' + size ];
    };
  
    proto.getFirstItemSize = function() {
      var firstItem = this.isotope.filteredItems[0];
      return firstItem && firstItem.element && getSize( firstItem.element );
    };
  
    // ----- methods that should reference isotope ----- //
  
    proto.layout = function() {
      this.isotope.layout.apply( this.isotope, arguments );
    };
  
    proto.getSize = function() {
      this.isotope.getSize();
      this.size = this.isotope.size;
    };
  
    // -------------------------- create -------------------------- //
  
    LayoutMode.modes = {};
  
    LayoutMode.create = function( namespace, options ) {
  
      function Mode() {
        LayoutMode.apply( this, arguments );
      }
  
      Mode.prototype = Object.create( proto );
      Mode.prototype.constructor = Mode;
  
      // default options
      if ( options ) {
        Mode.options = options;
      }
  
      Mode.prototype.namespace = namespace;
      // register in Isotope
      LayoutMode.modes[ namespace ] = Mode;
  
      return Mode;
    };
  
    return LayoutMode;
  
  }));
  
  /*!
   * Masonry v4.2.1
   * Cascading grid layout library
   * https://masonry.desandro.com
   * MIT License
   * by David DeSandro
   */
  
  ( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( 'masonry-layout/masonry',[
          'outlayer/outlayer',
          'get-size/get-size'
        ],
        factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        require('outlayer'),
        require('get-size')
      );
    } else {
      // browser global
      window.Masonry = factory(
        window.Outlayer,
        window.getSize
      );
    }
  
  }( window, function factory( Outlayer, getSize ) {
  
  
  
  // -------------------------- masonryDefinition -------------------------- //
  
    // create an Outlayer layout class
    var Masonry = Outlayer.create('masonry');
    // isFitWidth -> fitWidth
    Masonry.compatOptions.fitWidth = 'isFitWidth';
  
    var proto = Masonry.prototype;
  
    proto._resetLayout = function() {
      this.getSize();
      this._getMeasurement( 'columnWidth', 'outerWidth' );
      this._getMeasurement( 'gutter', 'outerWidth' );
      this.measureColumns();
  
      // reset column Y
      this.colYs = [];
      for ( var i=0; i < this.cols; i++ ) {
        this.colYs.push( 0 );
      }
  
      this.maxY = 0;
      this.horizontalColIndex = 0;
    };
  
    proto.measureColumns = function() {
      this.getContainerWidth();
      // if columnWidth is 0, default to outerWidth of first item
      if ( !this.columnWidth ) {
        var firstItem = this.items[0];
        var firstItemElem = firstItem && firstItem.element;
        // columnWidth fall back to item of first element
        this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
          // if first elem has no width, default to size of container
          this.containerWidth;
      }
  
      var columnWidth = this.columnWidth += this.gutter;
  
      // calculate columns
      var containerWidth = this.containerWidth + this.gutter;
      var cols = containerWidth / columnWidth;
      // fix rounding errors, typically with gutters
      var excess = columnWidth - containerWidth % columnWidth;
      // if overshoot is less than a pixel, round up, otherwise floor it
      var mathMethod = excess && excess < 1 ? 'round' : 'floor';
      cols = Math[ mathMethod ]( cols );
      this.cols = Math.max( cols, 1 );
    };
  
    proto.getContainerWidth = function() {
      // container is parent if fit width
      var isFitWidth = this._getOption('fitWidth');
      var container = isFitWidth ? this.element.parentNode : this.element;
      // check that this.size and size are there
      // IE8 triggers resize on body size change, so they might not be
      var size = getSize( container );
      this.containerWidth = size && size.innerWidth;
    };
  
    proto._getItemLayoutPosition = function( item ) {
      item.getSize();
      // how many columns does this brick span
      var remainder = item.size.outerWidth % this.columnWidth;
      var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
      // round if off by 1 pixel, otherwise use ceil
      var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
      colSpan = Math.min( colSpan, this.cols );
      // use horizontal or top column position
      var colPosMethod = this.options.horizontalOrder ?
        '_getHorizontalColPosition' : '_getTopColPosition';
      var colPosition = this[ colPosMethod ]( colSpan, item );
      // position the brick
      var position = {
        x: this.columnWidth * colPosition.col,
        y: colPosition.y
      };
      // apply setHeight to necessary columns
      var setHeight = colPosition.y + item.size.outerHeight;
      var setMax = colSpan + colPosition.col;
      for ( var i = colPosition.col; i < setMax; i++ ) {
        this.colYs[i] = setHeight;
      }
  
      return position;
    };
  
    proto._getTopColPosition = function( colSpan ) {
      var colGroup = this._getTopColGroup( colSpan );
      // get the minimum Y value from the columns
      var minimumY = Math.min.apply( Math, colGroup );
  
      return {
        col: colGroup.indexOf( minimumY ),
        y: minimumY,
      };
    };
  
    /**
     * @param {Number} colSpan - number of columns the element spans
     * @returns {Array} colGroup
     */
    proto._getTopColGroup = function( colSpan ) {
      if ( colSpan < 2 ) {
        // if brick spans only one column, use all the column Ys
        return this.colYs;
      }
  
      var colGroup = [];
      // how many different places could this brick fit horizontally
      var groupCount = this.cols + 1 - colSpan;
      // for each group potential horizontal position
      for ( var i = 0; i < groupCount; i++ ) {
        colGroup[i] = this._getColGroupY( i, colSpan );
      }
      return colGroup;
    };
  
    proto._getColGroupY = function( col, colSpan ) {
      if ( colSpan < 2 ) {
        return this.colYs[ col ];
      }
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice( col, col + colSpan );
      // and get the max value of the array
      return Math.max.apply( Math, groupColYs );
    };
  
    // get column position based on horizontal index. #873
    proto._getHorizontalColPosition = function( colSpan, item ) {
      var col = this.horizontalColIndex % this.cols;
      var isOver = colSpan > 1 && col + colSpan > this.cols;
      // shift to next row if item can't fit on current row
      col = isOver ? 0 : col;
      // don't let zero-size items take up space
      var hasSize = item.size.outerWidth && item.size.outerHeight;
      this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
  
      return {
        col: col,
        y: this._getColGroupY( col, colSpan ),
      };
    };
  
    proto._manageStamp = function( stamp ) {
      var stampSize = getSize( stamp );
      var offset = this._getElementOffset( stamp );
      // get the columns that this stamp affects
      var isOriginLeft = this._getOption('originLeft');
      var firstX = isOriginLeft ? offset.left : offset.right;
      var lastX = firstX + stampSize.outerWidth;
      var firstCol = Math.floor( firstX / this.columnWidth );
      firstCol = Math.max( 0, firstCol );
      var lastCol = Math.floor( lastX / this.columnWidth );
      // lastCol should not go over if multiple of columnWidth #425
      lastCol -= lastX % this.columnWidth ? 0 : 1;
      lastCol = Math.min( this.cols - 1, lastCol );
      // set colYs to bottom of the stamp
  
      var isOriginTop = this._getOption('originTop');
      var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
        stampSize.outerHeight;
      for ( var i = firstCol; i <= lastCol; i++ ) {
        this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
      }
    };
  
    proto._getContainerSize = function() {
      this.maxY = Math.max.apply( Math, this.colYs );
      var size = {
        height: this.maxY
      };
  
      if ( this._getOption('fitWidth') ) {
        size.width = this._getContainerFitWidth();
      }
  
      return size;
    };
  
    proto._getContainerFitWidth = function() {
      var unusedCols = 0;
      // count unused columns
      var i = this.cols;
      while ( --i ) {
        if ( this.colYs[i] !== 0 ) {
          break;
        }
        unusedCols++;
      }
      // fit container to columns that have been used
      return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
    };
  
    proto.needsResizeLayout = function() {
      var previousWidth = this.containerWidth;
      this.getContainerWidth();
      return previousWidth != this.containerWidth;
    };
  
    return Masonry;
  
  }));
  
  /*!
   * Masonry layout mode
   * sub-classes Masonry
   * https://masonry.desandro.com
   */
  
  ( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( 'isotope-layout/js/layout-modes/masonry',[
          '../layout-mode',
          'masonry-layout/masonry'
        ],
        factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        require('../layout-mode'),
        require('masonry-layout')
      );
    } else {
      // browser global
      factory(
        window.Isotope.LayoutMode,
        window.Masonry
      );
    }
  
  }( window, function factory( LayoutMode, Masonry ) {
  'use strict';
  
  // -------------------------- masonryDefinition -------------------------- //
  
    // create an Outlayer layout class
    var MasonryMode = LayoutMode.create('masonry');
  
    var proto = MasonryMode.prototype;
  
    var keepModeMethods = {
      _getElementOffset: true,
      layout: true,
      _getMeasurement: true
    };
  
    // inherit Masonry prototype
    for ( var method in Masonry.prototype ) {
      // do not inherit mode methods
      if ( !keepModeMethods[ method ] ) {
        proto[ method ] = Masonry.prototype[ method ];
      }
    }
  
    var measureColumns = proto.measureColumns;
    proto.measureColumns = function() {
      // set items, used if measuring first item
      this.items = this.isotope.filteredItems;
      measureColumns.call( this );
    };
  
    // point to mode options for fitWidth
    var _getOption = proto._getOption;
    proto._getOption = function( option ) {
      if ( option == 'fitWidth' ) {
        return this.options.isFitWidth !== undefined ?
          this.options.isFitWidth : this.options.fitWidth;
      }
      return _getOption.apply( this.isotope, arguments );
    };
  
    return MasonryMode;
  
  }));
  
  /**
   * fitRows layout mode
   */
  
  ( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( 'isotope-layout/js/layout-modes/fit-rows',[
          '../layout-mode'
        ],
        factory );
    } else if ( typeof exports == 'object' ) {
      // CommonJS
      module.exports = factory(
        require('../layout-mode')
      );
    } else {
      // browser global
      factory(
        window.Isotope.LayoutMode
      );
    }
  
  }( window, function factory( LayoutMode ) {
  'use strict';
  
  var FitRows = LayoutMode.create('fitRows');
  
  var proto = FitRows.prototype;
  
  proto._resetLayout = function() {
    this.x = 0;
    this.y = 0;
    this.maxY = 0;
    this._getMeasurement( 'gutter', 'outerWidth' );
  };
  
  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
  
    var itemWidth = item.size.outerWidth + this.gutter;
    // if this element cannot fit in the current row
    var containerWidth = this.isotope.size.innerWidth + this.gutter;
    if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
      this.x = 0;
      this.y = this.maxY;
    }
  
    var position = {
      x: this.x,
      y: this.y
    };
  
    this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
    this.x += itemWidth;
  
    return position;
  };
  
  proto._getContainerSize = function() {
    return { height: this.maxY };
  };
  
  return FitRows;
  
  }));
  
  /**
   * vertical layout mode
   */
  
  ( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( 'isotope-layout/js/layout-modes/vertical',[
          '../layout-mode'
        ],
        factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        require('../layout-mode')
      );
    } else {
      // browser global
      factory(
        window.Isotope.LayoutMode
      );
    }
  
  }( window, function factory( LayoutMode ) {
  'use strict';
  
  var Vertical = LayoutMode.create( 'vertical', {
    horizontalAlignment: 0
  });
  
  var proto = Vertical.prototype;
  
  proto._resetLayout = function() {
    this.y = 0;
  };
  
  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
      this.options.horizontalAlignment;
    var y = this.y;
    this.y += item.size.outerHeight;
    return { x: x, y: y };
  };
  
  proto._getContainerSize = function() {
    return { height: this.y };
  };
  
  return Vertical;
  
  }));
  
  /*!
   * Isotope v3.0.5
   *
   * Licensed GPLv3 for open source use
   * or Isotope Commercial License for commercial use
   *
   * https://isotope.metafizzy.co
   * Copyright 2017 Metafizzy
   */
  
  ( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( [
          'outlayer/outlayer',
          'get-size/get-size',
          'desandro-matches-selector/matches-selector',
          'fizzy-ui-utils/utils',
          'isotope-layout/js/item',
          'isotope-layout/js/layout-mode',
          // include default layout modes
          'isotope-layout/js/layout-modes/masonry',
          'isotope-layout/js/layout-modes/fit-rows',
          'isotope-layout/js/layout-modes/vertical'
        ],
        function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
          return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
        });
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        window,
        require('outlayer'),
        require('get-size'),
        require('desandro-matches-selector'),
        require('fizzy-ui-utils'),
        require('isotope-layout/js/item'),
        require('isotope-layout/js/layout-mode'),
        // include default layout modes
        require('isotope-layout/js/layout-modes/masonry'),
        require('isotope-layout/js/layout-modes/fit-rows'),
        require('isotope-layout/js/layout-modes/vertical')
      );
    } else {
      // browser global
      window.Isotope = factory(
        window,
        window.Outlayer,
        window.getSize,
        window.matchesSelector,
        window.fizzyUIUtils,
        window.Isotope.Item,
        window.Isotope.LayoutMode
      );
    }
  
  }( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
    Item, LayoutMode ) {
  
  
  
  // -------------------------- vars -------------------------- //
  
  var jQuery = window.jQuery;
  
  // -------------------------- helpers -------------------------- //
  
  var trim = String.prototype.trim ?
    function( str ) {
      return str.trim();
    } :
    function( str ) {
      return str.replace( /^\s+|\s+$/g, '' );
    };
  
  // -------------------------- isotopeDefinition -------------------------- //
  
    // create an Outlayer layout class
    var Isotope = Outlayer.create( 'isotope', {
      layoutMode: 'masonry',
      isJQueryFiltering: true,
      sortAscending: true
    });
  
    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;
  
    var proto = Isotope.prototype;
  
    proto._create = function() {
      this.itemGUID = 0;
      // functions that sort items
      this._sorters = {};
      this._getSorters();
      // call super
      Outlayer.prototype._create.call( this );
  
      // create layout modes
      this.modes = {};
      // start filteredItems with all items
      this.filteredItems = this.items;
      // keep of track of sortBys
      this.sortHistory = [ 'original-order' ];
      // create from registered layout modes
      for ( var name in LayoutMode.modes ) {
        this._initLayoutMode( name );
      }
    };
  
    proto.reloadItems = function() {
      // reset item ID counter
      this.itemGUID = 0;
      // call super
      Outlayer.prototype.reloadItems.call( this );
    };
  
    proto._itemize = function() {
      var items = Outlayer.prototype._itemize.apply( this, arguments );
      // assign ID for original-order
      for ( var i=0; i < items.length; i++ ) {
        var item = items[i];
        item.id = this.itemGUID++;
      }
      this._updateItemsSortData( items );
      return items;
    };
  
  
    // -------------------------- layout -------------------------- //
  
    proto._initLayoutMode = function( name ) {
      var Mode = LayoutMode.modes[ name ];
      // set mode options
      // HACK extend initial options, back-fill in default options
      var initialOpts = this.options[ name ] || {};
      this.options[ name ] = Mode.options ?
        utils.extend( Mode.options, initialOpts ) : initialOpts;
      // init layout mode instance
      this.modes[ name ] = new Mode( this );
    };
  
  
    proto.layout = function() {
      // if first time doing layout, do all magic
      if ( !this._isLayoutInited && this._getOption('initLayout') ) {
        this.arrange();
        return;
      }
      this._layout();
    };
  
    // private method to be used in layout() & magic()
    proto._layout = function() {
      // don't animate first layout
      var isInstant = this._getIsInstant();
      // layout flow
      this._resetLayout();
      this._manageStamps();
      this.layoutItems( this.filteredItems, isInstant );
  
      // flag for initalized
      this._isLayoutInited = true;
    };
  
    // filter + sort + layout
    proto.arrange = function( opts ) {
      // set any options pass
      this.option( opts );
      this._getIsInstant();
      // filter, sort, and layout
  
      // filter
      var filtered = this._filter( this.items );
      this.filteredItems = filtered.matches;
  
      this._bindArrangeComplete();
  
      if ( this._isInstant ) {
        this._noTransition( this._hideReveal, [ filtered ] );
      } else {
        this._hideReveal( filtered );
      }
  
      this._sort();
      this._layout();
    };
    // alias to _init for main plugin method
    proto._init = proto.arrange;
  
    proto._hideReveal = function( filtered ) {
      this.reveal( filtered.needReveal );
      this.hide( filtered.needHide );
    };
  
    // HACK
    // Don't animate/transition first layout
    // Or don't animate/transition other layouts
    proto._getIsInstant = function() {
      var isLayoutInstant = this._getOption('layoutInstant');
      var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
        !this._isLayoutInited;
      this._isInstant = isInstant;
      return isInstant;
    };
  
    // listen for layoutComplete, hideComplete and revealComplete
    // to trigger arrangeComplete
    proto._bindArrangeComplete = function() {
      // listen for 3 events to trigger arrangeComplete
      var isLayoutComplete, isHideComplete, isRevealComplete;
      var _this = this;
      function arrangeParallelCallback() {
        if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
          _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
        }
      }
      this.once( 'layoutComplete', function() {
        isLayoutComplete = true;
        arrangeParallelCallback();
      });
      this.once( 'hideComplete', function() {
        isHideComplete = true;
        arrangeParallelCallback();
      });
      this.once( 'revealComplete', function() {
        isRevealComplete = true;
        arrangeParallelCallback();
      });
    };
  
    // -------------------------- filter -------------------------- //
  
    proto._filter = function( items ) {
      var filter = this.options.filter;
      filter = filter || '*';
      var matches = [];
      var hiddenMatched = [];
      var visibleUnmatched = [];
  
      var test = this._getFilterTest( filter );
  
      // test each item
      for ( var i=0; i < items.length; i++ ) {
        var item = items[i];
        if ( item.isIgnored ) {
          continue;
        }
        // add item to either matched or unmatched group
        var isMatched = test( item );
        // item.isFilterMatched = isMatched;
        // add to matches if its a match
        if ( isMatched ) {
          matches.push( item );
        }
        // add to additional group if item needs to be hidden or revealed
        if ( isMatched && item.isHidden ) {
          hiddenMatched.push( item );
        } else if ( !isMatched && !item.isHidden ) {
          visibleUnmatched.push( item );
        }
      }
  
      // return collections of items to be manipulated
      return {
        matches: matches,
        needReveal: hiddenMatched,
        needHide: visibleUnmatched
      };
    };
  
    // get a jQuery, function, or a matchesSelector test given the filter
    proto._getFilterTest = function( filter ) {
      if ( jQuery && this.options.isJQueryFiltering ) {
        // use jQuery
        return function( item ) {
          return jQuery( item.element ).is( filter );
        };
      }
      if ( typeof filter == 'function' ) {
        // use filter as function
        return function( item ) {
          return filter( item.element );
        };
      }
      // default, use filter as selector string
      return function( item ) {
        return matchesSelector( item.element, filter );
      };
    };
  
    // -------------------------- sorting -------------------------- //
  
    /**
     * @params {Array} elems
     * @public
     */
    proto.updateSortData = function( elems ) {
      // get items
      var items;
      if ( elems ) {
        elems = utils.makeArray( elems );
        items = this.getItems( elems );
      } else {
        // update all items if no elems provided
        items = this.items;
      }
  
      this._getSorters();
      this._updateItemsSortData( items );
    };
  
    proto._getSorters = function() {
      var getSortData = this.options.getSortData;
      for ( var key in getSortData ) {
        var sorter = getSortData[ key ];
        this._sorters[ key ] = mungeSorter( sorter );
      }
    };
  
    /**
     * @params {Array} items - of Isotope.Items
     * @private
     */
    proto._updateItemsSortData = function( items ) {
      // do not update if no items
      var len = items && items.length;
  
      for ( var i=0; len && i < len; i++ ) {
        var item = items[i];
        item.updateSortData();
      }
    };
  
    // ----- munge sorter ----- //
  
    // encapsulate this, as we just need mungeSorter
    // other functions in here are just for munging
    var mungeSorter = ( function() {
      // add a magic layer to sorters for convienent shorthands
      // `.foo-bar` will use the text of .foo-bar querySelector
      // `[foo-bar]` will use attribute
      // you can also add parser
      // `.foo-bar parseInt` will parse that as a number
      function mungeSorter( sorter ) {
        // if not a string, return function or whatever it is
        if ( typeof sorter != 'string' ) {
          return sorter;
        }
        // parse the sorter string
        var args = trim( sorter ).split(' ');
        var query = args[0];
        // check if query looks like [an-attribute]
        var attrMatch = query.match( /^\[(.+)\]$/ );
        var attr = attrMatch && attrMatch[1];
        var getValue = getValueGetter( attr, query );
        // use second argument as a parser
        var parser = Isotope.sortDataParsers[ args[1] ];
        // parse the value, if there was a parser
        sorter = parser ? function( elem ) {
          return elem && parser( getValue( elem ) );
        } :
        // otherwise just return value
        function( elem ) {
          return elem && getValue( elem );
        };
  
        return sorter;
      }
  
      // get an attribute getter, or get text of the querySelector
      function getValueGetter( attr, query ) {
        // if query looks like [foo-bar], get attribute
        if ( attr ) {
          return function getAttribute( elem ) {
            return elem.getAttribute( attr );
          };
        }
  
        // otherwise, assume its a querySelector, and get its text
        return function getChildText( elem ) {
          var child = elem.querySelector( query );
          return child && child.textContent;
        };
      }
  
      return mungeSorter;
    })();
  
    // parsers used in getSortData shortcut strings
    
    Isotope.sortDataParsers = {
      'parseInt': function( val ) {
        return parseInt( val, 10 );
      },
      'parseFloat': function( val ) {
        return parseFloat( val );
      }
    };
  
    // ----- sort method ----- //
  
    // sort filteredItem order

    proto._sort = function() {
      if ( !this.options.sortBy ) {
        return;
      }
      // keep track of sortBy History
      var sortBys = utils.makeArray( this.options.sortBy );
      if ( !this._getIsSameSortBy( sortBys ) ) {
        // concat all sortBy and sortHistory, add to front, oldest goes in last
        this.sortHistory = sortBys.concat( this.sortHistory );
      }
      // sort magic
      var itemSorter = getItemSorter( this.sortHistory, this.options.sortAscending );
      this.filteredItems.sort( itemSorter );
    };
  
    // check if sortBys is same as start of sortHistory
    proto._getIsSameSortBy = function( sortBys ) {
      for ( var i=0; i < sortBys.length; i++ ) {
        if ( sortBys[i] != this.sortHistory[i] ) {
          return false;
        }
      }
      return true;
    };
  
    // returns a function used for sorting
    function getItemSorter( sortBys, sortAsc ) {
      return function sorter( itemA, itemB ) {
        // cycle through all sortKeys
        for ( var i = 0; i < sortBys.length; i++ ) {
          var sortBy = sortBys[i];
          var a = itemA.sortData[ sortBy ];
          var b = itemB.sortData[ sortBy ];
          if ( a > b || a < b ) {
            // if sortAsc is an object, use the value given the sortBy key
            var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
            var direction = isAscending ? 1 : -1;
            return ( a > b ? 1 : -1 ) * direction;
          }
        }
        return 0;
      };
    }
  
    // -------------------------- methods -------------------------- //
  
    // get layout mode
    proto._mode = function() {
      var layoutMode = this.options.layoutMode;
      var mode = this.modes[ layoutMode ];
      if ( !mode ) {
        // TODO console.error
        throw new Error( 'No layout mode: ' + layoutMode );
      }
      // HACK sync mode's options
      // any options set after init for layout mode need to be synced
      mode.options = this.options[ layoutMode ];
      return mode;
    };
  
    proto._resetLayout = function() {
      // trigger original reset layout
      Outlayer.prototype._resetLayout.call( this );
      this._mode()._resetLayout();
    };
  
    proto._getItemLayoutPosition = function( item  ) {
      return this._mode()._getItemLayoutPosition( item );
    };
  
    proto._manageStamp = function( stamp ) {
      this._mode()._manageStamp( stamp );
    };
  
    proto._getContainerSize = function() {
      return this._mode()._getContainerSize();
    };
  
    proto.needsResizeLayout = function() {
      return this._mode().needsResizeLayout();
    };
  
    // -------------------------- adding & removing -------------------------- //
  
    // HEADS UP overwrites default Outlayer appended
    proto.appended = function( elems ) {
      var items = this.addItems( elems );
      if ( !items.length ) {
        return;
      }
      // filter, layout, reveal new items
      var filteredItems = this._filterRevealAdded( items );
      // add to filteredItems
      this.filteredItems = this.filteredItems.concat( filteredItems );
    };
  
    // HEADS UP overwrites default Outlayer prepended
    proto.prepended = function( elems ) {
      var items = this._itemize( elems );
      if ( !items.length ) {
        return;
      }
      // start new layout
      this._resetLayout();
      this._manageStamps();
      // filter, layout, reveal new items
      var filteredItems = this._filterRevealAdded( items );
      // layout previous items
      this.layoutItems( this.filteredItems );
      // add to items and filteredItems
      this.filteredItems = filteredItems.concat( this.filteredItems );
      this.items = items.concat( this.items );
    };
  
    proto._filterRevealAdded = function( items ) {
      var filtered = this._filter( items );
      this.hide( filtered.needHide );
      // reveal all new items
      this.reveal( filtered.matches );
      // layout new items, no transition
      this.layoutItems( filtered.matches, true );
      return filtered.matches;
    };
  
    /**
     * Filter, sort, and layout newly-appended item elements
     * @param {Array or NodeList or Element} elems
     */
    proto.insert = function( elems ) {
      var items = this.addItems( elems );
      if ( !items.length ) {
        return;
      }
      // append item elements
      var i, item;
      var len = items.length;
      for ( i=0; i < len; i++ ) {
        item = items[i];
        this.element.appendChild( item.element );
      }
      // filter new stuff
      var filteredInsertItems = this._filter( items ).matches;
      // set flag
      for ( i=0; i < len; i++ ) {
        items[i].isLayoutInstant = true;
      }
      this.arrange();
      // reset flag
      for ( i=0; i < len; i++ ) {
        delete items[i].isLayoutInstant;
      }
      this.reveal( filteredInsertItems );
    };
  
    var _remove = proto.remove;
    proto.remove = function( elems ) {
      elems = utils.makeArray( elems );
      var removeItems = this.getItems( elems );
      // do regular thing
      _remove.call( this, elems );
      // bail if no items to remove
      var len = removeItems && removeItems.length;
      // remove elems from filteredItems
      for ( var i=0; len && i < len; i++ ) {
        var item = removeItems[i];
        // remove item from collection
        utils.removeFrom( this.filteredItems, item );
      }
    };
  
    proto.shuffle = function() {
      // update random sortData
      for ( var i=0; i < this.items.length; i++ ) {
        var item = this.items[i];
        item.sortData.random = Math.random();
      }
      this.options.sortBy = 'random';
      this._sort();
      this._layout();
    };
  
    /**
     * trigger fn without transition
     * kind of hacky to have this in the first place
     * @param {Function} fn
     * @param {Array} args
     * @returns ret
     * @private
     */
    proto._noTransition = function( fn, args ) {
      // save transitionDuration before disabling
      var transitionDuration = this.options.transitionDuration;
      // disable transition
      this.options.transitionDuration = 0;
      // do it
      var returnValue = fn.apply( this, args );
      // re-enable transition for reveal
      this.options.transitionDuration = transitionDuration;
      return returnValue;
    };
  
    // ----- helper methods ----- //
  
    /**
     * getter method for getting filtered item elements
     * @returns {Array} elems - collection of item elements
     */
    proto.getFilteredItemElements = function() {
      return this.filteredItems.map( function( item ) {
        return item.element;
      });
    };
  
    // -----  ----- //
  
    return Isotope;
  
  }));
  
//   isotope.pkgd.min.js



!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);s.isBoxSizeOuter=r=200==t(n.width),i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];t&&clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var s=i.toDashed(n),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(o&&o.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,n,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=this.layout.size,r=o.indexOf("%")!=-1?parseFloat(o)/100*s.width:parseInt(o,10),a=n.indexOf("%")!=-1?parseFloat(n)/100*s.height:parseInt(n,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),s=parseInt(e,10),r=n===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-o,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){
return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});

// wow.js



(function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define(['module', 'exports'], factory);
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.WOW = mod.exports;
    }
  })(this, function (module, exports) {
    'use strict';
  
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  
    var _class, _temp;
  
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
  
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
  
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
  
    function isIn(needle, haystack) {
      return haystack.indexOf(needle) >= 0;
    }
  
    function extend(custom, defaults) {
      for (var key in defaults) {
        if (custom[key] == null) {
          var value = defaults[key];
          custom[key] = value;
        }
      }
      return custom;
    }
  
    function isMobile(agent) {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)
      );
    }
  
    function createEvent(event) {
      var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
      var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
      var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
  
      var customEvent = void 0;
      if (document.createEvent != null) {
        // W3C DOM
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        // IE DOM < 9
        customEvent = document.createEventObject();
        customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
  
      return customEvent;
    }
  
    function emitEvent(elem, event) {
      if (elem.dispatchEvent != null) {
        // W3C DOM
        elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        elem[event]();
      } else if ('on' + event in (elem != null)) {
        elem['on' + event]();
      }
    }
  
    function addEvent(elem, event, fn) {
      if (elem.addEventListener != null) {
        // W3C DOM
        elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        // IE DOM
        elem.attachEvent('on' + event, fn);
      } else {
        // fallback
        elem[event] = fn;
      }
    }
  
    function removeEvent(elem, event, fn) {
      if (elem.removeEventListener != null) {
        // W3C DOM
        elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        // IE DOM
        elem.detachEvent('on' + event, fn);
      } else {
        // fallback
        delete elem[event];
      }
    }
  
    function getInnerHeight() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      }
  
      return document.documentElement.clientHeight;
    }
  
    // Minimalistic WeakMap shim, just in case.
    var WeakMap = window.WeakMap || window.MozWeakMap || function () {
      function WeakMap() {
        _classCallCheck(this, WeakMap);
  
        this.keys = [];
        this.values = [];
      }
  
      _createClass(WeakMap, [{
        key: 'get',
        value: function get(key) {
          for (var i = 0; i < this.keys.length; i++) {
            var item = this.keys[i];
            if (item === key) {
              return this.values[i];
            }
          }
          return undefined;
        }
      }, {
        key: 'set',
        value: function set(key, value) {
          for (var i = 0; i < this.keys.length; i++) {
            var item = this.keys[i];
            if (item === key) {
              this.values[i] = value;
              return this;
            }
          }
          this.keys.push(key);
          this.values.push(value);
          return this;
        }
      }]);
  
      return WeakMap;
    }();
  
    // Dummy MutationObserver, to avoid raising exceptions.
    var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function () {
      function MutationObserver() {
        _classCallCheck(this, MutationObserver);
  
        if (typeof console !== 'undefined' && console !== null) {
          console.warn('MutationObserver is not supported by your browser.');
          console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
        }
      }
  
      _createClass(MutationObserver, [{
        key: 'observe',
        value: function observe() {}
      }]);
  
      return MutationObserver;
    }(), _class.notSupported = true, _temp);
  
    // getComputedStyle shim, from http://stackoverflow.com/a/21797294
    var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {
      var getComputedStyleRX = /(\-([a-z]){1})/g;
      return {
        getPropertyValue: function getPropertyValue(prop) {
          if (prop === 'float') {
            prop = 'styleFloat';
          }
          if (getComputedStyleRX.test(prop)) {
            prop.replace(getComputedStyleRX, function (_, _char) {
              return _char.toUpperCase();
            });
          }
          var currentStyle = el.currentStyle;
  
          return (currentStyle != null ? currentStyle[prop] : void 0) || null;
        }
      };
    };
  
    var WOW = function () {
      function WOW() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  
        _classCallCheck(this, WOW);
  
        this.defaults = {
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true,
          callback: null,
          scrollContainer: null,
          resetAnimation: true
        };
  
        this.animate = function animateFactory() {
          if ('requestAnimationFrame' in window) {
            return function (callback) {
              return window.requestAnimationFrame(callback);
            };
          }
          return function (callback) {
            return callback();
          };
        }();
  
        this.vendors = ['moz', 'webkit'];
  
        this.start = this.start.bind(this);
        this.resetAnimation = this.resetAnimation.bind(this);
        this.scrollHandler = this.scrollHandler.bind(this);
        this.scrollCallback = this.scrollCallback.bind(this);
        this.scrolled = true;
        this.config = extend(options, this.defaults);
        if (options.scrollContainer != null) {
          this.config.scrollContainer = document.querySelector(options.scrollContainer);
        }
        // Map of elements to animation names:
        this.animationNameCache = new WeakMap();
        this.wowEvent = createEvent(this.config.boxClass);
      }
  
      _createClass(WOW, [{
        key: 'init',
        value: function init() {
          this.element = window.document.documentElement;
          if (isIn(document.readyState, ['interactive', 'complete'])) {
            this.start();
          } else {
            addEvent(document, 'DOMContentLoaded', this.start);
          }
          this.finished = [];
        }
      }, {
        key: 'start',
        value: function start() {
          var _this = this;
  
          this.stopped = false;
          this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));
          this.all = this.boxes.slice(0);
          if (this.boxes.length) {
            if (this.disabled()) {
              this.resetStyle();
            } else {
              for (var i = 0; i < this.boxes.length; i++) {
                var box = this.boxes[i];
                this.applyStyle(box, true);
              }
            }
          }
          if (!this.disabled()) {
            addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
            addEvent(window, 'resize', this.scrollHandler);
            this.interval = setInterval(this.scrollCallback, 50);
          }
          if (this.config.live) {
            var mut = new MutationObserver(function (records) {
              for (var j = 0; j < records.length; j++) {
                var record = records[j];
                for (var k = 0; k < record.addedNodes.length; k++) {
                  var node = record.addedNodes[k];
                  _this.doSync(node);
                }
              }
              return undefined;
            });
            mut.observe(document.body, {
              childList: true,
              subtree: true
            });
          }
        }
      }, {
        key: 'stop',
        value: function stop() {
          this.stopped = true;
          removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
          removeEvent(window, 'resize', this.scrollHandler);
          if (this.interval != null) {
            clearInterval(this.interval);
          }
        }
      }, {
        key: 'sync',
        value: function sync() {
          if (MutationObserver.notSupported) {
            this.doSync(this.element);
          }
        }
      }, {
        key: 'doSync',
        value: function doSync(element) {
          if (typeof element === 'undefined' || element === null) {
            element = this.element;
          }
          if (element.nodeType !== 1) {
            return;
          }
          element = element.parentNode || element;
          var iterable = element.querySelectorAll('.' + this.config.boxClass);
          for (var i = 0; i < iterable.length; i++) {
            var box = iterable[i];
            if (!isIn(box, this.all)) {
              this.boxes.push(box);
              this.all.push(box);
              if (this.stopped || this.disabled()) {
                this.resetStyle();
              } else {
                this.applyStyle(box, true);
              }
              this.scrolled = true;
            }
          }
        }
      }, {
        key: 'show',
        value: function show(box) {
          this.applyStyle(box);
          box.className = box.className + ' ' + this.config.animateClass;
          if (this.config.callback != null) {
            this.config.callback(box);
          }
          emitEvent(box, this.wowEvent);
  
          if (this.config.resetAnimation) {
            addEvent(box, 'animationend', this.resetAnimation);
            addEvent(box, 'oanimationend', this.resetAnimation);
            addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
            addEvent(box, 'MSAnimationEnd', this.resetAnimation);
          }
  
          return box;
        }
      }, {
        key: 'applyStyle',
        value: function applyStyle(box, hidden) {
          var _this2 = this;
  
          var duration = box.getAttribute('data-wow-duration');
          var delay = box.getAttribute('data-wow-delay');
          var iteration = box.getAttribute('data-wow-iteration');
  
          return this.animate(function () {
            return _this2.customStyle(box, hidden, duration, delay, iteration);
          });
        }
      }, {
        key: 'resetStyle',
        value: function resetStyle() {
          for (var i = 0; i < this.boxes.length; i++) {
            var box = this.boxes[i];
            box.style.visibility = 'visible';
          }
          return undefined;
        }
      }, {
        key: 'resetAnimation',
        value: function resetAnimation(event) {
          if (event.type.toLowerCase().indexOf('animationend') >= 0) {
            var target = event.target || event.srcElement;
            target.className = target.className.replace(this.config.animateClass, '').trim();
          }
        }
      }, {
        key: 'customStyle',
        value: function customStyle(box, hidden, duration, delay, iteration) {
          if (hidden) {
            this.cacheAnimationName(box);
          }
          box.style.visibility = hidden ? 'hidden' : 'visible';
  
          if (duration) {
            this.vendorSet(box.style, { animationDuration: duration });
          }
          if (delay) {
            this.vendorSet(box.style, { animationDelay: delay });
          }
          if (iteration) {
            this.vendorSet(box.style, { animationIterationCount: iteration });
          }
          this.vendorSet(box.style, { animationName: hidden ? 'none' : this.cachedAnimationName(box) });
  
          return box;
        }
      }, {
        key: 'vendorSet',
        value: function vendorSet(elem, properties) {
          for (var name in properties) {
            if (properties.hasOwnProperty(name)) {
              var value = properties[name];
              elem['' + name] = value;
              for (var i = 0; i < this.vendors.length; i++) {
                var vendor = this.vendors[i];
                elem['' + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;
              }
            }
          }
        }
      }, {
        key: 'vendorCSS',
        value: function vendorCSS(elem, property) {
          var style = getComputedStyle(elem);
          var result = style.getPropertyCSSValue(property);
          for (var i = 0; i < this.vendors.length; i++) {
            var vendor = this.vendors[i];
            result = result || style.getPropertyCSSValue('-' + vendor + '-' + property);
          }
          return result;
        }
      }, {
        key: 'animationName',
        value: function animationName(box) {
          var aName = void 0;
          try {
            aName = this.vendorCSS(box, 'animation-name').cssText;
          } catch (error) {
            // Opera, fall back to plain property value
            aName = getComputedStyle(box).getPropertyValue('animation-name');
          }
  
          if (aName === 'none') {
            return ''; // SVG/Firefox, unable to get animation name?
          }
  
          return aName;
        }
      }, {
        key: 'cacheAnimationName',
        value: function cacheAnimationName(box) {
          // https://bugzilla.mozilla.org/show_bug.cgi?id=921834
          // box.dataset is not supported for SVG elements in Firefox
          return this.animationNameCache.set(box, this.animationName(box));
        }
      }, {
        key: 'cachedAnimationName',
        value: function cachedAnimationName(box) {
          return this.animationNameCache.get(box);
        }
      }, {
        key: 'scrollHandler',
        value: function scrollHandler() {
          this.scrolled = true;
        }
      }, {
        key: 'scrollCallback',
        value: function scrollCallback() {
          if (this.scrolled) {
            this.scrolled = false;
            var results = [];
            for (var i = 0; i < this.boxes.length; i++) {
              var box = this.boxes[i];
              if (box) {
                if (this.isVisible(box)) {
                  this.show(box);
                  continue;
                }
                results.push(box);
              }
            }
            this.boxes = results;
            if (!this.boxes.length && !this.config.live) {
              this.stop();
            }
          }
        }
      }, {
        key: 'offsetTop',
        value: function offsetTop(element) {
          // SVG elements don't have an offsetTop in Firefox.
          // This will use their nearest parent that has an offsetTop.
          // Also, using ('offsetTop' of element) causes an exception in Firefox.
          while (element.offsetTop === undefined) {
            element = element.parentNode;
          }
          var top = element.offsetTop;
          while (element.offsetParent) {
            element = element.offsetParent;
            top += element.offsetTop;
          }
          return top;
        }
      }, {
        key: 'isVisible',
        value: function isVisible(box) {
          var offset = box.getAttribute('data-wow-offset') || this.config.offset;
          var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
          var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
          var top = this.offsetTop(box);
          var bottom = top + box.clientHeight;
  
          return top <= viewBottom && bottom >= viewTop;
        }
      }, {
        key: 'disabled',
        value: function disabled() {
          return !this.config.mobile && isMobile(navigator.userAgent);
        }
      }]);
  
      return WOW;
    }();
  
    exports.default = WOW;
    module.exports = exports['default'];
  });

//   wowmain.js

/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});
