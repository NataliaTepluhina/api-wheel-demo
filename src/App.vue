<template>
  <div>
    <input type="text" v-model="query" />
    <button @click="callAPI">Search</button>
    <span v-if="loading">Loading...</span>
  </div>
</template>

<script>
import axios from './middlware'
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const query = ref('')
    const result = ref(null)
    const loading = ref(false)
    const error = ref(null)

    async function callAPI() {
      loading.value = true
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${query.value}`
      )
      loading.value = false
      console.log(response)
    }

    return { query, result, loading, error, callAPI }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
