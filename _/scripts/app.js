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

  function generateTriggers() {
    var $frag = $(document.createDocumentFragment());
    $jumpers.each(function(i,el) {

      var $jumper = $(el);
      var triggerNum = 'trigger-'+i;
      var $triggerElement = $('<div class="'+ triggerNum +'"/>');
      var getTriggerPosition = function() {
        return (($html.height() / numJumpers) * i) + 'px';
      };
      $triggerElement.css({
        'top': getTriggerPosition()
      });
      $frag.append($triggerElement); 

      $(window).on('resize',function() {
        $triggerElement.css({
          'top': getTriggerPosition()
        });
      });
    });
    $body.append($frag);
  }

  function generateJumpers(num,dir) {
    var $frag = $(document.createDocumentFragment());
    var directions = ['left','right'];
    var colors = ['orange','black'];
    var iconNames = ['git','git-squared','github','github-squared','github-circled-2'];

    for(var i=0; i < num; ++i) {
      var $jumper = $('<i class="icon-' + iconNames[randomNumber(0, 4)] + ' jumper jumper-' + directions[randomNumber(0, 1)] + '" />');
      $jumper.css({
        'top': randomNumber(0, 100) + '%',
        'color': colors[randomNumber(0, 1)],
        'transition-duration': randomNumber(2, 10) + 's',
        'transition-timing-function': timingFunctions[randomNumber(0, 4)]
      });
      $frag.append($jumper);
    }
    $body.append($frag);

    return $('.jumper');
  }

  function initJumpers() {
    $jumpers.each(function(i,el) {

      var $jumper = $(el);
      var triggerClass = '.trigger-'+i;

      var jumper = new ScrollMagic.Scene({triggerElement: triggerClass})
        .on("enter", function () {
          var translateX = $html.width() + 72;
          var translateY = -randomNumber(0,$html.width()+72);
          translateX = $jumper.hasClass('jumper-left') ? translateX : -translateX;
          translateY = $jumper.hasClass('jumper-left') ? translateY : -translateY;
          $jumper.css({
            transform: "translate3d(" + translateX + "px" + ", " + translateY + "px" + ", 0) rotate3d(0, 0, 1, " + randomNumber(0, 720) +"deg)"
          });
        })
        .on("leave", function () {
          $jumper.css({
            transform: ""
          });
        })
        // .addIndicators()
        .addTo(controller);
    });
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

    var octoCat = new ScrollMagic.Scene({triggerElement: ".trigger-1", triggerHook: "onLeave",duration: octoScrollEnd(), tweenChanges: true})
      .setTween(tween)
      // .addIndicators()
      .addTo(controller);

    $win.on('resize',function() {
      octoCat.duration(octoScrollEnd);
    });
  }

  function init(num) {
    $jumpers = generateJumpers(num);
    numJumpers = num;

    generateTriggers();

    initOcto();

    initJumpers();
  }

  var $jumpers, numJumpers;

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

  return {
    init: init
  };

}());

ScrollApp.init(50);