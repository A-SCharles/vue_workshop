const app = Vue.createApp({
data() {
    return {
        title: 'Bruh',
        author: 'Other Bruh',
        age: 25,
    }
},
methods: {
    changeTitle(title) {
        // this.title = 'Changed Title'
        this.title = title
    }
},
})

app.mount('#app')