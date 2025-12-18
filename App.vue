<template>
  <div class="app-parent">
       <AndonSystem></AndonSystem>
  </div>
</template>

<script>
import axios from 'axios'
import { baseURL } from './config/apiEnvironment'
import AndonSystem from '@/components/AndonSystem/AndonSystem.vue';
export default {
  name: 'App',
  components: {

    AndonSystem,
  },
  data() {
    return {
      something: null,
    }
  },
  async mounted() {
    this.something = await this.fetchHello()
  },
  methods: {
    async fetchHello() {
      try {
        const response = await axios.get(`${baseURL}/api/healthcheck`)
        return response.data
      } catch (error) {
        console.error('API Healthcheck failed:', error)
        return null
      }
    },
  },
}
</script>

<style scoped>
.app-parent {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>
