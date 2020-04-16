var tl = new TimelineMax({
    repeat: -1
});

tl.to('#wheelNotchOne', 6, {
        transformOrigin: "center center",
        rotation: 360,
        ease: Power4.easeInOut
    }, "1.5")
    .to('#wheelNotchTwo', 6, {
        transformOrigin: "center center",
        rotation: 360,
        ease: Power4.easeInOut
    }, "1.5")
    .from('#package', .5, {
        y: -80,
        ease: Power1.easeIn
    }, "1.5")
    .from('#acqCb', .1, { opacity: 0 }, "2.5")
    .from('#procesCb', .1, { opacity: 0 }, "5.8")
    .to('#package', 5, {
        x: 550,
        ease: Power1.easeInOut
    }, "2.5")
    .to('#meterNeedle', 4, {
        transformOrigin: 'bottom center',
        rotation: 50,
        repeat: -1,
        yoyo: true,
        ease: Elastic.easeOut
    }, "1.5")
    .to('#meterNeedle2', 4, {
        transformOrigin: 'bottom center',
        rotation: -30,
        repeat: -1,
        yoyo: true,
        ease: Bounce.easeIn
    }, "1.5")
    .to('#scrnCursor', 1, {
        opacity: 0,
        repeat: -1
    }, "0")
    .to('#m2a', .6, { fill: "#e58383", repeat: -1 }, "6")
    .to('#m1c', .6, { fill: "#e58383", repeat: -1 }, "6.25")
    .to('#alarmFlash', 2, {
        opacity: 0,
        scale: 8,
        transformOrigin: '50% 50%',
        repeat: -1,
        delay: 3,
        ease: Expo.easeIn
    }, "1.5")
    .from('#lefty', 1, {
        rotation: 35,
        transformOrigin: 'right top'
    }, "1.7")
    .from('#righty', 1, {
        rotation: -35,
        transformOrigin: 'left top'
    }, "1.7")
    .to('#package', 3, {
        x: 700
    }, "7.5")
    .from('#flapR, #flapL', .1, {
        opacity: 0
    }, "7.5")
    .to('#wheelNotchOne, #wheelNotchTwo', 3, { rotation: 520 }, "7.5")
    .to('#confused', 1, {
        transformOrigin: 'bottom center',
        x: 5,
        y: -80,
        ease: Power3.easeOut
    }, "10.5")
    .to('#confused', .5, { scale: 2 }, "11.")
    .from('#fourOhFour', .1, { opacity: 0 }, "7");