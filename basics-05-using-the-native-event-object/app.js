const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        this.counter = 0;
      }

      if(value < -50) {
        this.counter = 0;
      }
    }

    //name(newValue, oldValue)
    // name(value) {
    //   this.fullName = (value === '')
    //     ? value
    //     : value + " " + this.lastName;
    // },
    // lastName(value) {
    //   this.fullName = (value === '')
    //     ? this.name
    //     : this.name + " " + this.lastName;
    // }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
      this.lastName = ''
    }
  },
  computed: {
    fullName() {
      if (this.name === '') return "";

      return this.name + " " + this.lastName;
    }
  }
});

app.mount('#events');
