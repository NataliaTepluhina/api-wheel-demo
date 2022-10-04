<template>
  <div>
    <button @click="fetchData">Click me</button>
    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
import { useFetch } from '../composables/useFetch'
import axios from 'axios'
export default {
  name: 'App',
  setup() {
    const { loading, fetchData } = useFetch(() =>
      axios
        .get(`https://api.thecatapi.com/v1/images/search`)
        .then(response => response.data[0].url)
    )

    return { loading, fetchData }
  }
}
</script>

<style scoped>
div {
  padding-top: 20px;
}
</style>
