var myTL = new TimelineMax({repeat: -1, repeatDelay: 1});
myTL.from('#fork-logo-left-arrow', 3, {ease: Quad.easeOut, fontSize: 130, rotation: 120})
    .from('#fork-logo-right-arrow', 3, {ease: Quad.easeOut, fontSize: 135, rotation: -170}, "-=3")
    .to('#fork-logo', 3, {ease: Quad.easeOut, opacity: 1}, "-=3");
