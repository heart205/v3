<script setup lang="ts">
import {
  Form as AForm,
  FormItem,
  Input as AInput,
  Button,
  Table,
  Popconfirm
} from 'ant-design-vue'
import {
  SearchOutlined,
  ReloadOutlined,
  PlusOutlined,
  DownloadOutlined,
  ImportOutlined,
  DeleteOutlined,
  EditOutlined
} from '@ant-design/icons-vue'
import { computed, onMounted, reactive, shallowReactive } from 'vue'
import { columns } from './constant'
import AddDictModal from './addDictionaryModal.vue'
import type {
  dictionary,
  DictionaryInterface,
  dictionaryList
} from '../../../types/dictionary'
import {
  addDictionaryService,
  searchDictionaryList,
  editDictionaryService,
  deleteDictionaryService
} from '../../../services/dictionary'
import { msgError, msgSuccess } from '../../../utils/message'
import { useStoreUser } from '../../../store/hooks/useStoreConfig'
import { usePageSizeChange } from '../../../hooks/usePageSizeChange'
const wrapper = computed(() => {
  return {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }
})

const tableState = shallowReactive<{
  offset: number
  pageSize: number
  total: number
  data: dictionaryList[]
}>({
  offset: 1,
  pageSize: 10,
  total: 0,
  data: []
})

const visibleProps = reactive({
  type: 'add',
  id: ''
})

const state = reactive<{
  addDictionaryVisible: boolean
}>({
  addDictionaryVisible: false
})

const userConfig = useStoreUser()

const [changePageNation, changePageSize] = usePageSizeChange(
  tableState,
  getData
)

const pageNation = computed(() => {
  return {
    current: tableState.offset,
    pageSize: tableState.pageSize,
    total: tableState.total,
    showTotal: (total: number) => `共 ${total} 条`,
    onChange: changePageNation,
    showSizeChange: changePageSize
  }
})

onMounted(() => {
  getData()
})

function handleAddDictations(visible = 'add') {
  visibleProps.type = visible
  state.addDictionaryVisible = true
}

function addDictionaryData(res: Omit<DictionaryInterface, 'userId'>) {
  ;(visibleProps.type === 'edit'
    ? editDictionaryService({
        ...res,
        id: Number(visibleProps.id)
      })
    : addDictionaryService({ ...res, userId: userConfig.userId })
  ).then((res) => {
    try {
      const { data } = res
      if (data.code == 200) {
        msgSuccess(data.message || '操作成功')
        state.addDictionaryVisible = false
        getData()
        handleResetValue()
        return
      }
      throw new Error(data.message || '操作成功')
    } catch (e: any) {
      msgError(e.message)
    }
  })
}

function handleEditDictionary(ev: MouseEvent, record: dictionary) {
  handleAddDictations('edit')
  visibleProps.id = String(record.id)
}

function deleteDictionaryData(data: dictionaryList) {
  const { id } = data
  deleteDictionaryService({ id }).then((res) => {
    try {
      const { data } = res
      if (data.code == 200) {
        msgSuccess(data.message || '操作成功')
        getData()
        return
      }
      throw new Error(data.message || '操作成功')
    } catch (e: any) {
      msgError(e.message)
    }
  })
}

function getData() {
  searchDictionaryList({
    pageSize: tableState.pageSize,
    offset: tableState.offset
  }).then((res) => {
    const { data } = res
    if (data.code === 200 && data.data) {
      tableState.data = data.data.list
      tableState.total = data.data.total
    }
  })
}

function handleResetValue(callback?: (...args: unknown[]) => void) {
  visibleProps.type = ''
  visibleProps.id = ''
  if (typeof callback === 'function') {
    callback()
  }
}
</script>

<template>
  <div class="bg-white p-6">
    <a-form :="wrapper" layout="inline" class="w-full">
      <FormItem label="字典名称">
        <AInput placeholder="请输入字典名称" style="width: 14rem" />
      </FormItem>
      <FormItem label="字典编号">
        <AInput placeholder="请输入字典编号" style="width: 14rem" />
      </FormItem>
      <FormItem>
        <Button type="primary">
          <template #icon><SearchOutlined class="vertical-middle" /></template>
          <span> 搜索 </span>
        </Button>
      </FormItem>
      <FormItem>
        <Button type="primary">
          <template #icon><ReloadOutlined class="vertical-middle" /></template>
          <span> 重置 </span>
        </Button>
      </FormItem>
    </a-form>
    <div class="pt-6 wrapper-operation">
      <Button type="primary" @click="handleAddDictations()">
        <template #icon>
          <PlusOutlined class="vertical-middle" />
        </template>
        添加
      </Button>
      <Button type="primary">
        <template #icon>
          <DownloadOutlined class="vertical-middle" />
        </template>
        导出
      </Button>
      <Button type="primary">
        <template #icon>
          <ImportOutlined class="vertical-middle" />
        </template>
        导入</Button
      >
      <Button type="primary">
        <template #icon>
          <DeleteOutlined class="vertical-middle" />
        </template>
        回收站</Button
      >
    </div>
    <div class="pt-4">
      <Table
        :columns="columns"
        :dataSource="tableState.data"
        :pagination="pageNation"
      >
        <template #bodyCell="{ column, record, index }">
          <template v-if="column.key === 'index'">
            <div>{{ index + 1 }}</div>
          </template>

          <template v-if="column.key === 'action'">
            <div class="wrapper-action">
              <Button
                type="link"
                size="small"
                @click="handleEditDictionary($event, record)"
              >
                <template #icon>
                  <EditOutlined class="vertical-middle" />
                </template>
                <span>编辑</span>
              </Button>
              <Popconfirm
                title="是否删除该选项?"
                ok-text="确认"
                cancel-text="取消"
                @confirm="deleteDictionaryData(record)"
              >
                <Button type="link" size="small">
                  <span>删除</span>
                  <template #icon>
                    <DeleteOutlined class="vertical-middle" />
                  </template>
                </Button>
              </Popconfirm>
            </div>
          </template>
        </template>
      </Table>
      <AddDictModal
        :type="visibleProps.type"
        :id="visibleProps.id"
        v-model:visible="state.addDictionaryVisible"
        @submitForm="addDictionaryData"
        @resetProps="handleResetValue"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.vertical-middle {
  vertical-align: text-top;
}
.wrapper-operation {
  button {
    margin: 0 6px;
    &:nth-child(1) {
      margin-left: 0;
    }
  }
}
.wrapper-action {
  button {
    padding: 0;
  }
  button > span:nth-child(2) {
    margin-left: 3px;
    &::after {
      content: '';
      display: inline-block;
      height: 1em;
      width: 1px;
      margin: 0 8px;
      vertical-align: middle;
      background-color: #eee;
    }
  }
  button:last-child > span:nth-child(2) {
    &::after {
      display: none;
    }
  }
}
</style>

function usePageSizeChange(): [any, any] { throw new Error('Function not
implemented.') }
