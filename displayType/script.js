const app = Vue.createApp({
  template: `
<label id='output'></label> <br>
<input type='text' v-model="a" @keypress="display"/>
<button @click="display">Test</button>
`,
  data() {
    return {
      a: "",
    };
  },
  methods: {
    display() {
      if (this.a.includes("a")) {
        document.getElementById("output").innerText = "You clicked a";
      } else if (this.a.includes("A")) {
        document.getElementById("output").innerText = "A";
      } else {
        document.getElementById("output").innerText = "";
      }
    }
  },
});

app.mount("#app");
