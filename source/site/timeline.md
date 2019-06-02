---
layout: layouts/base
title: Timeline
description: Lifetime visualization. Each cell represents one week. There are 52 weeks in each row, which equals 1 year. Past weeks are automatically painted in red.
---

<div class="content">

## Timeline

Lifetime visualization. Each cell represents one week. There are 52 weeks in each row, which equals 1 year. Past weeks are automatically painted in red.

</div>

<div data-timeline-target class="timeline"></div>
<noscript>Please, enable JavaScript to view the timeline.</noscript>

<style>
.timeline {
  counter-reset: year;
  display: grid;
  grid-template-columns: repeat(52, 1fr);
  grid-gap: 1px;
  max-width: calc(15px * 52);
  padding-right: 2em;

  @media (min-width: 480px) {
    grid-gap: 2px;
  }
}

.timeline__week {
  position: relative;
  display: block;
}

.timeline__week::before {
  content: '';
  display: block;
  width: 100%;
  padding-bottom: 100%;
  background: rgba(0, 0, 0, 0.05);
}

.timeline__week_passed::before {
  background: rgba(255, 0, 0, 1);
}

.timeline__week::after {
  position: absolute;
  left: calc(100% + 4px);
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  line-height: 1;
}

.timeline__week:nth-child(52)::after {
  content: 'Year';
}

.timeline__week:nth-child(52n) {
  counter-increment: year;
}

@media (max-width: 479px) {
  .timeline__week:nth-child(520n)::after {
    content: counter(year);
  }
}

@media (min-width: 480px) and (max-width: 767px) {
  .timeline__week:nth-child(260n)::after {
    content: counter(year);
  }
}

@media (min-width: 768px) {
  .timeline__week:nth-child(208n)::after {
    content: counter(year);
  }
}
</style>

<script>
(function() {
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

  renderTimeline(document.querySelector('[data-timeline-target]'));
})();
</script>
