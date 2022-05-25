import {
  DashboardOutlined,
  AppstoreOutlined,
  FolderOutlined,
  ExperimentOutlined,
  FileMarkdownOutlined,
  SettingOutlined
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
    case 'markdown': {
      return h(FileMarkdownOutlined)
    }
    case 'icon-setting': {
      return h(SettingOutlined)
    }
    default: {
      return ''
    }
  }
}
