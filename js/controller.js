function Controller(option) {
    var init = option.init
    var obj = {
        view: null,
        model: null,
        init: function(view, model) {
            this.view = view
            this.model = model
            this.model.init()
            init.call(obj)
            this.bindEvents()
        }
    }

    for (const key in option) {
        if (option.hasOwnProperty(key)) {
            if (key != 'init') {
                const element = option[key]
                obj[key] = element
            }

        }
    }
    return obj
}