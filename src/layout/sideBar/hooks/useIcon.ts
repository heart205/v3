import {
  DashboardOutlined,
  AppstoreOutlined,
  FolderOutlined,
  ExperimentOutlined
} from '@ant-design/icons-vue'
import { h } from 'vue'
export function useIcon(str: string | undefined) {
  switch (str) {
    case 'dashboard': {
      return h(DashboardOutlined)
    }
    case 'folder': {
      return h(FolderOutlined)
    }
    case 'index': {
      return h(AppstoreOutlined)
    }
    case 'test': {
      return h(ExperimentOutlined)
    }
    default: {
      return ''
    }
  }
}
