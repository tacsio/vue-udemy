<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored
      Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtomMode">Add Resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue'

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide', title: 'Official Guide', description: 'The Oficial VueJS Documentation', link: 'https://vuejs.org'
        },
        {
          id: 'google', title: 'Google', description: 'Lern to google...', link: 'https://www.google.com'
        }
      ]
    };
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    }
  },

  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResButtomMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },

    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link: url
      };

      this.storedResources.push(newResource);
      this.setSelectedTab('stored-resources');
    },

    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id == resId);
      this.storedResources.splice(resIndex, 1);
    }
  }
}
</script>