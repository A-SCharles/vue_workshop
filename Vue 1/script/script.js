// console.log('Hello VUE')

const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am in the template</h2>'
    data: function() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    }
})

app.mount('#app')

