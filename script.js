function play() {
    anime({
        targets: '.box',
        translateY: [
            {value: 200, duration: 600},
            {value: 0, duration: 1000}
        ],
        rotate: {
            value: '1turn',
            easing: 'easeInOutSine'
        },
        delay: function(el, i, l){
            return i * 1000
        }
    });
    // anime({
    //     targets: '.blue',
    //     translateY: [
    //         {value: 200, duration: 600, delay: 1000},
    //         {value: 0, duration: 1000}
    //     ],
    //     rotate: {
    //         value: '1turn',
    //         easing: 'easeInOutSine',
    //         delay: 1000,
    //     }
    //   });
    // anime({
    //     targets: '.green',
    //     translateY: [
    //         {value: 200, duration: 600, delay: 2000},
    //         {value: 0, duration: 1000}
    //     ],
    //     rotate: {
    //         value: '1turn',
    //         easing: 'easeInOutSine',
    //         delay: 2000,
    //     }
    //   });
    // anime({
    //     targets: '.yellow',
    //     translateY: [
    //         {value: 200, duration: 600, delay: 3000},
    //         {value: 0, duration: 1000}
    //     ],
    //     rotate: {
    //         value: '1turn',
    //         easing: 'easeInOutSine',
    //         delay: 3000,
    //     }
    //   });
}