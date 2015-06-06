var $ = require('jQuery');

function pathPrepare ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $outline = $("path#outline");
var $leftEye = $("path#left-eye");
var $rightEye = $("path#right-eye");
var $nose = $("path#nose");
var $mouth = $("path#mouth");

// prepare SVG
[$outline,$leftEye,$rightEye,$nose,$mouth].forEach(pathPrepare);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
  .add(TweenMax.to($outline, 1, {strokeDashoffset: 0, ease:Linear.easeNone}),0)
  .add(TweenMax.to($outline, 1, {fill: "#33629c", ease:Linear.easeNone}), 0)
  .add(TweenMax.to($leftEye, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}),0.5)
  .add(TweenMax.to($rightEye, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}),0.5)
  .add(TweenMax.to($nose, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}),0.5)
  .add(TweenMax.to($mouth, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}),0.5)
  .add(TweenMax.to("path", 1, {fill: "#33629c", ease:Linear.easeNone}), 0.5);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 512, tweenChanges: true})
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);