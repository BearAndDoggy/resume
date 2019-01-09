
var wrapper = document.querySelector('#site-wrapper')
setTimeout(function() {
    wrapper.classList.remove('active')
}, 500)
var navBar = document.querySelector('.topNavBar')

window.onscroll = function() {
    if (scrollY > 0) {
        navBar.classList.add('background')
    } else {
        navBar.classList.remove('background')   
    }
}

var navSliderA = document.querySelectorAll('#navMenu > ul > li')
for (let index = 0; index < navSliderA.length; index++) {
    const x = navSliderA[index]

    x.addEventListener('mouseenter', function(event) {
        var target = event.target
        target.classList.add('active1')
    })

    x.addEventListener('mouseleave', function(event) {
        var target = event.target
        target.classList.remove('active1')
    }) 
}

var navA = document.querySelectorAll('#navMenu > ul > li > a')

for (let index = 0; index < navA.length; index++) {
    const x = navA[index]
    x.onclick = function name(e) {
        e.preventDefault()
        var address = x.getAttribute('href')
        var pageto = document.querySelector(address)
        var y = pageto.offsetTop
        window.scrollTo(0, y - 105)
    }

}