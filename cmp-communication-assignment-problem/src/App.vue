<template>
  <h1>App</h1>

  <active-user :username="user.name" :age="user.age"></active-user>
  <user-data @set-data="update"></user-data>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Tarcisio",
        age: 36,
      },
    };
  },

  methods: {
    update(userUpdate) {
      this.user.name = userUpdate.name;
      this.user.age = +userUpdate.age; 
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
