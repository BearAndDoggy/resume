function portfolioEvent() {
    portfilall1.onclick = function () {
        portfilBar.className = "barShow-1"
    }

    portfilall2.onclick = function () {
        portfilBar.className = "barShow-2"
    }

    portfilall3.onclick = function () {
        portfilBar.className = "barShow-3"
    }
}


function loadingEvent() {
    var wrapper = document.querySelector('#site-wrapper')
    setTimeout(function () {
        wrapper.classList.remove('active')
    }, 300)

}

function scrollEvent() {
    var navBar = document.querySelector('.topNavBar')
    window.onscroll = function () {
        if (scrollY > 0) {
            navBar.classList.add('navBackground')
        } else {
            navBar.classList.remove('navBackground')
        }

        highLightClosetElement()
    }
}

function navMouseActive() {
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
}


function smoothScroll() {
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }

    requestAnimationFrame(animate);
    var navA = document.querySelectorAll('#navMenu > ul > li > a')

    for (let index = 0; index < navA.length; index++) {
        const x = navA[index]
        x.onclick = function name(e) {
            e.preventDefault()
            var address = x.getAttribute('href')
            var pageto = document.querySelector(address)
            var y = pageto.offsetTop
            var targetTop = y - 105
            var currentTop = window.scrollY
            var s = targetTop - currentTop
            var t = s / 100 * 300
            t = Math.abs(t)
            if (t > 700) {
                t = 700
            }
            var coords = {
                y: currentTop
            };
            var tween = new TWEEN.Tween(coords)
                .to({
                    y: targetTop
                }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
        }
    }
}

function highLightClosetElement() {
    var currentTop = window.scrollY

    var tags = document.querySelectorAll('[data-x=""]')
    var min = Math.abs(tags[0].offsetTop - currentTop)
    var minIndex = 0
    for (let index = 1; index < tags.length; index++) {
        const element = tags[index];
        var offsetTop = element.offsetTop
        var minCompare = Math.abs(offsetTop - currentTop)

        if (minCompare < min) {
            min = minCompare
            minIndex = index
        }
        var tag = tags[minIndex]
    }
    tag.classList.add('offSet')
    var id = tag.id
    var highLightElement = document.querySelector(`[href="#${id}"]`)
    var li = highLightElement.parentNode
    var brotherAndMe = li.parentNode.children
    for (let index = 0; index < brotherAndMe.length; index++) {
        brotherAndMe[index].classList.remove('highLight')
    }

    li.classList.add('highLight')
}
portfolioEvent()
navMouseActive()
smoothScroll()
highLightClosetElement()
scrollEvent()
loadingEvent()