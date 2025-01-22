const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      console.log(this.$refs.userText);
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount('#app');


const app2 = Vue.createApp({
  template: `
  <h2>Favorite Meal</h2>
  <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza'
    }
  }
});

app2.mount('#app2');


const data = {
  message: 'Hello'
};

const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);

    if (key === 'message') {
      target.longMessage = value + "world";
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler)

proxy.message = 'Hello!!!!!!!';

console.log(proxy.longMessage);