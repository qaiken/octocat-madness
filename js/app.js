!function e(a,r,t){function n(s,i){if(!r[s]){if(!a[s]){var f="function"==typeof require&&require;if(!i&&f)return f(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var d=r[s]={exports:{}};a[s][0].call(d.exports,function(e){var r=a[s][1][e];return n(r?r:e)},d,d.exports,e,a,r,t)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<t.length;s++)n(t[s]);return n}({1:[function(e,a,r){function t(e){var a=e[0].getTotalLength();e.css("stroke-dasharray",a),e.css("stroke-dashoffset",a)}var n=window.jQuery,o=n("path#outline"),s=n("path#left-eye"),i=n("path#right-eye"),f=n("path#nose"),d=n("path#mouth");[o,s,i,f,d].forEach(t);var u=new ScrollMagic.Controller,h=(new TimelineMax).add(TweenMax.to(o,1,{strokeDashoffset:0,ease:Linear.easeNone}),0).add(TweenMax.to(o,1,{fill:"#33629c",ease:Linear.easeNone}),0).add(TweenMax.to(s,.5,{strokeDashoffset:0,ease:Linear.easeNone}),.5).add(TweenMax.to(i,.5,{strokeDashoffset:0,ease:Linear.easeNone}),.5).add(TweenMax.to(f,.5,{strokeDashoffset:0,ease:Linear.easeNone}),.5).add(TweenMax.to(d,.5,{strokeDashoffset:0,ease:Linear.easeNone}),.5).add(TweenMax.to("path",1,{fill:"#33629c",ease:Linear.easeNone}),.5);new ScrollMagic.Scene({triggerElement:"#trigger1",duration:512,tweenChanges:!0}).setTween(h).addIndicators().addTo(u)},{}]},{},[1]);