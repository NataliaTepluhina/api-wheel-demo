import { ref } from 'vue'

export default function useApi(getResult) {
  const query = ref('')
  const result = ref(null)
  const loading = ref(false)
  const error = ref(false)

  async function callAPI() {
    loading.value = true
    error.value = false
    try {
      result.value = await getResult(query.value)
    } catch {
      error.value = true
    } finally {
      loading.value = false
    }
  }

  return { query, result, loading, error, callAPI }
}
