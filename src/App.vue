<template>
  <div>
    <input type="text" v-model="query" />
  </div>
</template>

<script>
//
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const query = ref('')
    const result = ref(null)
    const loading = ref(false)
    const error = ref(null)

    function callAPI() {}

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
