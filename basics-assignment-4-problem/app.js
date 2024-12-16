const app = Vue.createApp({
  data() {
    return {
      selectedClass: "",
      visible: true,
      color: ''
    };
  },
  methods: {
    toogleVisible() {
      this.visible = !this.visible;
    },
  },
  computed: {
    paragraphClass() {
      const apply = ["user1", "user2"].includes(this.selectedClass);
      return { [this.selectedClass]: apply };
    },

    paragraphVisibleClass() {
      return {
        visible: this.visible,
        hidden: !this.visible,
      };
    },
  },
});

app.mount("#assignment");
