<template>
  <li>
    <h2>{{ name }} {{ friendFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">{{ detailsVisible ? "Hide" : "Show" }} Details</button>
    |
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  data() {
    return {
      detailsVisible: false,
      friendFavorite: this.isFavorite === "1",
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      this.friendFavorite = !this.friendFavorite;
    },
  },
};
</script>
