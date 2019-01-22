!function() {
    var navSliderA = document.querySelectorAll('#navMenu > ul > li')
    for (let index = 0; index < navSliderA.length; index++) {
        const x = navSliderA[index]

        x.addEventListener('mouseenter', function (event) {
            var target = event.currentTarget
            target.classList.add('active1')
        })

        x.addEventListener('mouseleave', function (event) {
            var target = event.currentTarget
            target.classList.remove('active1')
        })
    }
}.call()