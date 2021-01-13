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
import useApi from './composables/useApi'
export default {
  name: 'App',
  setup() {
    const { query, loading, result, error, callAPI } = useApi(async query => {
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${query}`
      )
      return res.data[0].url
    })

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
