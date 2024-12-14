const app = Vue.createApp({
    data() {
        return {
            name: 'Tarcisio Coutinho',
            age: 36,
            url: "https://picsum.photos/200/300"
        }
    },
    methods: {
        favoriteNumber() {
            return Math.random().toFixed(2);
        }
    }
});

app.mount("#assignment");