'use strict';
/* exported triggerEvent */

var triggerEvent = function(element, eventName) {
  var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, true);
    element.dispatchEvent(event);
};
