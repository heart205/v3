import { useRoute } from 'vue-router'

export function useParamsSearch() {
  const route = useRoute()
  return route.params
}
