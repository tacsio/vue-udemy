const app = Vue.createApp({
  data() {
    return {
      calculated: 0
    }
  },
  methods: {
    add(value) {
      this.calculated += value
    }
  },
  computed: {
    result() {
      console.log(this.calculated)
      if (this.calculated < 37) {
        return "Not there yet"
      } else if (this.calculated > 37) {
        return "Too much!"
      } else {
        return "Yay 37"
      }
    }
  },
  watch: {
    result() {
      setTimeout(() => {
        this.calculated = 0;
        console.log("Reset calculated");
      }, 5000);
    }
  }
});


app.mount('#assignment');