(function () {
  'use strict';
  var birthDate = new Date('1997-11-21');
  var now = new Date();
  var weeksInYear = 52;
  var week = 1000 * 60 * 60 * 24 * 7;
  var passedWeeks = (now - birthDate) / week;

  function renderWeek(number) {
    var node = document.createElement('div');

    node.classList.add('timeline__week');

    if (number <= passedWeeks) {
      node.classList.add('timeline__week_passed');
    }

    return node;
  }

  function renderTimeline(targetNode) {
    for (var week = 1; week <= weeksInYear * 80; week++) {
      targetNode.appendChild(renderWeek(week));
    }
  }

  window.addEventListener('load', function () {
    renderTimeline(document.querySelector('[data-timeline-target]'));
  });
})();
