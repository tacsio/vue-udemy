<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manager Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals> -->
    <!-- <manage-goals v-else></manage-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!-- <BadgeList /> -->
    <!-- <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info> -->
    <!-- <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps["anotherProp"] }}</p>
      </template>
    </course-goals> -->
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";
// import BadgeList from "./components/BadgeList.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    "the-header": TheHeader,
    // UserInfo: UserInfo,
    // BadgeList,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  },

  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
