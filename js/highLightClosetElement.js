!function() {
    function highLightClostElement() {
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
    
    highLightClostElement()

    document.addEventListener('scroll', ()=> {
        highLightClostElement()
    })

}.call()