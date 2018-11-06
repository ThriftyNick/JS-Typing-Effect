/**
* File typed-text.js
* Author: Thriftynick
* Author URI: https://thriftynick.com
* Version: 1.0.0
*
* Typing effect to apply to a DOM element
*/
var TextTyper = (function() {
  var _tgtElem = null;

  /*
  * Call this first to initialize the target element.
  */
  var init = function(e) {
    _tgtElem = e;
  };

  /*
  * After initializing the target element, you can call this with the text you want typed.
  */
  var typeText = function(msg) {
    //base case
    if(msg.length < 1) {
        _blinkCursor();
        return;
    }

    _typeChar(msg.charAt(0));
    msg = msg.slice(1);

    setTimeout(function() {typeText(msg);}, 100);
  };

  var _typeChar = function(ch) {
    _tgtElem.innerHTML = _tgtElem.innerHTML.replace("|", "");
    _tgtElem.innerHTML += ch + "|";
  };

  var _blinkCursor = function() {
    if(_tgtElem.innerHTML.indexOf("|") > 0) {
      _tgtElem.innerHTML = _tgtElem.innerHTML.replace("|", "");
    } else {
      _tgtElem.innerHTML += "|";
    }
    setTimeout(function(){
      _blinkCursor();
    }, 500);
  };

  return {
    typeText: typeText
  };
})();
