var $ = require('jQuery');

function pathPrepare ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

function getHtmlHeight() {
  return $html.height();
}

var $outline = $("path#outline");
var $leftEye = $("path#left-eye");
var $rightEye = $("path#right-eye");
var $nose = $("path#nose");
var $mouth = $("path#mouth");
var $html = $("html");

// prepare SVG
[$outline,$leftEye,$rightEye,$nose,$mouth].forEach(pathPrepare);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
  .add(TweenMax.to($outline, 1, {strokeDashoffset: 0, ease:Linear.easeNone}),0)
  .add(TweenMax.to($outline, 1, {fillOpacity: 1, ease:Linear.easeNone}), 0)
  .add(TweenMax.to($leftEye, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}),0.5)
  .add(TweenMax.to($rightEye, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}),0.5)
  .add(TweenMax.to($nose, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}),0.5)
  .add(TweenMax.to($mouth, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}),0.5)
  .add(TweenMax.to("path", 1, {fillOpacity: 1, ease:Linear.easeNone}), 0.5);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "body", triggerHook: "onLeave",duration: getHtmlHeight, tweenChanges: true})
  .setTween(tween)
  .addIndicators()
  .addTo(controller);

$(window).on('resize',function() {
  scene.duration(getHtmlHeight);
});