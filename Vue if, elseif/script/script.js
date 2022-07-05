const display = Vue.createApp({
    template:   `
    <div v-if='isVisible' id='box1'></div>
    <div v-else-if='isVisible1' id='box2'></div>
    <div v-else='isVisible2' id='box3'></div>
    `,
    data() {
        return {
            isVisible: false,
            isVisible1: false,
            isVisible2: true,
        }
    }
})

display.mount('#display')