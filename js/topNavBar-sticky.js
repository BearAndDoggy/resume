!function() {
    var view = document.querySelector('.topNavBar')
    var controller = {
        view: null,
        init: function(view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function() {
            document.addEventListener('scroll', () => {
                if (scrollY > 0) {
                    this.active()
                } else {
                    this.deleteActive()
                }
            })
        },
        active: function() {
            this.view.classList.add('navBackground')
        } ,
        deleteActive: function() {
            this.view.classList.remove('navBackground')
        } 
    }

    controller.init(view)
}.call()