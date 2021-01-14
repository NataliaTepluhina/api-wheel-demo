import axios from 'axios'

const instance = axios.create()

// Cat API
axios.defaults.headers.common['x-api-key'] =
  '98a67728-d9c1-4e60-b350-0068f53810ea'

export default instance
