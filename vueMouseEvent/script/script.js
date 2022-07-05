const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "Bruh",
      author: "Other Bruh",
      age: 25,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      // this.title = 'Changed Title'
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
      console.log(this.showBooks);
    },
    eventHandle() {
      console.log("event");
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
  },
});

app.mount("#app");
