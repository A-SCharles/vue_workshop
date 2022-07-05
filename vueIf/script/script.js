const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "Bruh",
      author: "Other Bruh",
      age: 25,
    };
  },
  methods: {
    changeTitle(title) {
      // this.title = 'Changed Title'
      this.title = title;
    },
    toggleShowBooks() {
        this.showBooks = !this.showBooks
        console.log(this.showBooks)
    }
  },
});

app.mount("#app");
