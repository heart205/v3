<script lang="ts">
import { useSubItem } from './hooks/useSubItem'
import type { ItemConfig } from '../../types/sideBar'
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'
// 动态生成边框
export default defineComponent({
  name: 'MenuItemDeep',
  props: {
    type: {
      type: String,
      default: 'menuItem',
      validator: (value: string) => ['subMenu', 'menuItem'].includes(value)
    },
    list: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const router = useRouter()
    return () => useSubItem(props.list as ItemConfig, 1, router)
  }
})
</script>
