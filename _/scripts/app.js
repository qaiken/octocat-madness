var $ = require('jQuery');

var ScrollApp = (function() {

  function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
  }

  function randomNumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  function octoScrollEnd() {
    return $html.height() - $win.height() - ($html.height() / numJumpers);
  }

  function initOcto() {

    [$outline,$leftEye,$rightEye,$nose,$mouth].forEach(pathPrepare);
    
    var tween = new TimelineMax()
      .add(TweenMax.to("path", 0.1, {strokeOpacity: 1, ease:Linear.easeNone}))
      .add(TweenMax.to($outline, 1, {strokeDashoffset: 0, ease:Linear.easeNone}),0)
      .add(TweenMax.to($leftEye, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}),0.5)
      .add(TweenMax.to($rightEye, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}),0.5)
      .add(TweenMax.to($nose, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}),0.5)
      .add(TweenMax.to($mouth, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}),0.5)
      .add(TweenMax.to("path", 1, {fillOpacity: 1, ease:Linear.easeNone}), 0.5);

    var octoCat = new ScrollMagic.Scene({triggerElement: "body", triggerHook: "onLeave",duration: octoScrollEnd(), tweenChanges: true})
      .setTween(tween)
      // .addIndicators()
      .addTo(controller);

    $win.on('resize',function() {
      octoCat.duration(octoScrollEnd);
    });
  }

  function init() {
    initOcto();
  }

  var timingFunctions = ['ease','ease-in','ease-out','ease-in-out','linear'];
  var $outline = $("path#outline");
  var $leftEye = $("path#left-eye");
  var $rightEye = $("path#right-eye");
  var $nose = $("path#nose");
  var $mouth = $("path#mouth");
  var $html = $("html");
  var $win = $(window);
  var $body = $('body');
  var controller = new ScrollMagic.Controller();
  var numJumpers = 40;

  return {
    init: init
  };

}());

ScrollApp.init();