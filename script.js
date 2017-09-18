Vue.component('topbar', {
    template: '<div class="topbar"><div><a class="title" href="index.html">{{appname}}</a></div><div class="user-cntl"><img class="dp" :src=dpsrc><p class="normal">{{username}}</p><img class="more" src="assets/more.svg"/></div></div>',
    data: function () {
        return {
            username: 'Elon Musk',
            appname: 'Meditrack',
            dpsrc: 'assets/elon-musk.jpg'
        };
    }
})

var en0 = new Vue({
    el: "#root"
})
