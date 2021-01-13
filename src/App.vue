<template>
  <div>
    <h3 class="error" v-if="error">
      Oops, something went wrong! Please try one more time
    </h3>
    <input type="text" v-model="query" />
    <button @click="callAPI">Search</button>
    <p v-if="loading">Loading...</p>
    <div v-if="result">
      <img :src="result" alt="A random image" />
    </div>
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
    const error = ref(false)

    async function callAPI() {
      loading.value = true
      error.value = false
      try {
        const response = await axios.get(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${query.value}`
        )
        result.value = response.data[0].url
      } catch {
        error.value = true
      } finally {
        loading.value = false
      }
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

.error {
  color: red;
}

img {
  margin-top: 20px;
  max-width: 400px;
}
</style>
