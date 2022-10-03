<template>
  <div>
    <h3 class="error" v-if="error">
      Oops, something went wrong! Please try one more time
    </h3>
    <form @submit.prevent>
      <input v-model="searchTerm" type="text" />
      <button type="submit">Search</button>
    </form>
    <p v-if="loading">Loading...</p>
    <div v-if="result">
      <img :src="result" alt="A random image" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const loading = ref(false)
    const error = ref(false)
    const result = ref('')
    const searchTerm = ref('')

    return { loading, error, result, searchTerm }
  }
}
</script>

<style>
body {
  font-family: 'Dank Mono', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 22px;
}

input {
  margin-right: 20px;
  font-family: inherit;
  font-size: inherit;
}

button {
  font-family: inherit;
  font-size: inherit;
  background-color: rgb(154, 238, 234);
}

button:hover {
  background-color: rgb(99, 241, 234);
}

.error {
  color: red;
}

img {
  margin-top: 20px;
  max-width: 400px;
}
</style>
