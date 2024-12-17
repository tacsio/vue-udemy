const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      task: '',
      showTasks: true,
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
      this.task = '';
    },
    toggleTaskList() {
      this.showTasks = !this.showTasks;
    }
  },
  computed: {
    buttonCaption() {
      return this.showTasks ? 'Hide' : 'Show List'
    }
  }
});

app.mount('#assignment')