<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">{{ detailsVisible ? "Hide" : "Show" }} Details</button>
    |
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
    |
    <button @click="$emit('delete-friend', id)">Delete Friend</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
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
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggle-favorite", "delete-friend"],
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("Id is missing");
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
