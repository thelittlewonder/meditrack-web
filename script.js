Vue.component('topbar', {
    template: '<div class="topbar"><div><a class="title" href="index.html">{{appname}}</a></div><div class="user-cntl"><div class="dpwrapper"><img class="dp" :src=dpsrc></div><p class="normal">{{username}}</p><img class="more" src="assets/more.svg"/></div></div>',
    data: function () {
        return {
            username: 'Elon Musk',
            appname: 'Meditrack',
            dpsrc: 'assets/elon-musk.jpg'
        };
    }
})

Vue.component('nav-option', {
    template: '<div><slot></slot></div>'
})

Vue.component('nav-list', {
    template: '<div class="sidebar"><nav-option v-for="item in items" :class="{activeoption : item.active}"><a :href=item.link class="sideoption"><img v-if="item.active" :src=item.alticon ><img v-else :src=item.icon ><span class="nav">{{item.name}}</span></a></nav-option></div>',
    data: function () {
        return {
            items: [
                {
                    name: 'Dashboard',
                    icon: 'assets/dashboard.svg',
                    alticon: 'assets/dashboard-colored.svg',
                    link: '#',
                    active: true
                },
                {
                    name: 'Notifications',
                    icon: 'assets/notifications.svg',
                    alticon: 'assets/notifications-colored.svg',
                    link: '#',
                    active: false
                },
                {
                    name: 'Past Orders',
                    icon: 'assets/order.svg',
                    alticon: 'assets/order-colored.svg',
                    link: '#',
                    active: false
                },
                {
                    name: 'Settings',
                    icon: 'assets/settings.svg',
                    alticon: 'assets/settings-colored.svg',
                    link: '#',
                    active: false
                },
                {
                    name: 'Support',
                    icon: 'assets/support.svg',
                    alticon: 'assets/support-colored.svg',
                    link: '#',
                    active: false
                },
            ]
        }
    }
})


var en0 = new Vue({
    el: "#root",
    data: {
        options: [],
        homeActive: false,
        listEmpty: false,
        namevalue: "",
        quantityvalue: "",
        frequencyvalue: "",
        orders: []
    },
    methods: {
        addMedicine: function (e) {
            e.preventDefault();
            let temp = {
                name: this.namevalue,
                qty: this.quantityvalue,
                f: this.frequencyvalue
            };
            if (temp.name !== "" && temp.qty !== "" && temp.f !== "") {
                this.orders.push(temp);
            }
            this.namevalue = "";
            this.quantityvalue = "";
            this.frequencyvalue = "";
        }
    }
})
