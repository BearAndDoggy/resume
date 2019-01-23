! function () {
    function animate(time) {
        requestAnimationFrame(animate)
        TWEEN.update(time);
    }

    requestAnimationFrame(animate)
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
}.call()