!function () {
    var view = $('.message')
    var model = {
        init: function () {
            var APP_ID = '7YnhnyFL6jAnGLlCaxYISasR-gzGzoHsz'
            var APP_KEY = 'JOUIFARIgraw9Lv3S1JhcpLc'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },

        fetch: function () {
            var query = new AV.Query('messagess');
            return query.find()
        },

        save: function (message, name) {
            var Messages = AV.Object.extend('messagess');
            var messages = new Messages();
            return messages.save({
                message: message,
                name: name
            })
        }
    }

    var controller = Controller({
        init: function() {
            this.loadMessage()
        },

        loadMessage: function () {
            this.model.fetch().then(function (message) {
                message.forEach(function (content) {
                    var message = content.attributes.message
                    var name = content.attributes.name
                    var li = $('<li></li>').text(`${name}：${message}`)
                    $('.messageList').append(li)

                })
            })
        },

        bindEvents: function () {
            $('.postMessage').on('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },

        saveMessage: function () {
            var message = $('input[name=text]').val()
            var name = $('input[name=name]').val()
            if (name === '' && message != '') {
                alert('昵称不能为空呦！')
            } else if (name != '' && message === '') {
                alert('留言不能为空呦')
            } else if (name === '' && message === '') {
                alert('昵称与留言不能为空呦')
            } else {
                this.model.save(message, name).then(function () {
                    var li = $('<li></li>').text(`${name}：${message}`)
                    $('.messageList').append(li)
                    $('input[name=text]').val('')
                })
            }

        }
    })

    controller.init(view, model)
}.call()