const display = Vue.createApp({
  template:`
  <form>
  <input type='text' placeholder='name' v-model= 'FirstName' required> <br>
  
  <input type='text' placeholder='surname' v-model= 'LastName' required> <br>
  
  <input type='number' placeholder='age' v-model= 'Age' required> <br>

  <button v-on:click.prevent='display'>Click Me</button>
  </form>
  
  <div v-if='isVisible' id='box1'>
  <p>{{FirstName}} {{LastName}} {{Age}}</p>
  </div>
  `,
  data: function() {
     return{
      FirstName:'',
      LastName:'',
      Age:0,
      isVisible:false
     }
  },
  methods:{
     display(){
         if(this.Age > 17) {
             this.isVisible = true;
         }else {
             this.isVisible = false;
         }
     }
  }
})


//everything in here appears in the div with the display id
display.mount("#display");

