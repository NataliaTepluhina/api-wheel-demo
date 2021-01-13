import { ref } from 'vue'

export default function useApi() {
  const query = ref('')
  const result = ref(null)
  const loading = ref(false)
  const error = ref(false)
}
