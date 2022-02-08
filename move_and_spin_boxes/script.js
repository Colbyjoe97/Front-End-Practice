var animation = anime({
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
    },
    autoplay: false
})

document.querySelector('#boxes .pause').onclick = animation.pause;
document.querySelector('#boxes .play').onclick = animation.play;



function test(num) {
    anime({
        targets: document.querySelector('.round-log'),
        innerHTML: [0,num],
        easing: 'linear',
        round: 10,
    })
}
