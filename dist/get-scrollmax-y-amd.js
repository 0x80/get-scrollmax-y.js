/*!
 * get-scrollmax-y.js | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/get-scrollmax-y.js
*/
define(function(require,exports,module){

'use strict';

var getScrollMaxY;

if(typeof window !== 'undefined') {
  if (typeof window.scrollMaxY === 'number') {
    getScrollMaxY = function()  {return window.scrollMaxY};
  } else {
    var body = document.body, html = document.documentElement;

    var getInnerHeight = void 0;

    if (typeof window.innerHeight === 'number') {
      getInnerHeight = function()  {return window.innerHeight};
    } else {
      getInnerHeight = function()  {return html.clientHeight || body.clientHeight};
    }

    var getScrollHeight = function()  {return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight
    )};

    getScrollMaxY = function()  {return getScrollHeight() - getInnerHeight()};
  }
} else {
  getScrollMaxY = function()  {return void 0};
}

return getScrollMaxY;

});
