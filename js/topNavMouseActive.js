!function() {
    var view = document.querySelector('#navMenu')
    var controller = {
        view: null,
        liTags: null,
        init: function(view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function() {
            this.liTags = this.view.querySelectorAll('ul > li')
            for (let index = 0; index < this.liTags.length; index++) {
                const x = this.liTags[index]
                x.addEventListener('mouseenter', function(event) {
                    var target = event.currentTarget
                    this.active(target)
                    
                }.bind(controller))    
                x.addEventListener('mouseleave', (event) => {
                    var target = event.currentTarget
                    this.deleteActive(target)
                })
            }
        },
        active: function(target) {
            target.classList.add('active1')
        },

        deleteActive: function(target) {
            target.classList.remove('active1')
        }
    }

    controller.init(view)

}.call()