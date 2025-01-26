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
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: String,
      required: false,
      default: "0",
      validator: function (value) {
        return value === "1" || value === "0";
      },
    },
  },
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
