<template>
  <div>
    <input type="text" />
    <button>Search</button>
  </div>
</template>

<script>
// import axios from './middlware'
export default {
  name: 'App',
  setup() {}
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
