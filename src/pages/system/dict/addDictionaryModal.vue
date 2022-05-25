<script setup lang="ts">
import type { FormInstance } from 'ant-design-vue'
import { Modal, Form, FormItem, Input, Textarea } from 'ant-design-vue'
import { reactive, ref, watch } from 'vue'
import { searchDictionaryDetail } from '../../../services/dictionary'
import type { DictionaryInterface } from '../../../types/dictionary'
import { addDictionaryTitle, addDictionaryRuleHolder } from './constant'
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'add'
  },
  id: {
    type: String,
    default: ''
  }
})

const formState = reactive<Omit<DictionaryInterface, 'userId'>>({
  dictionaryName: '',
  dictionaryCode: '',
  describe: ''
})

const layoutWrapper = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
}

const formRef = ref<FormInstance>(null!)

const emits = defineEmits(['update:visible', 'submitForm', 'resetProps'])

function handleCancelVisible() {
  emits('update:visible', false)
  emits('resetProps', formRef.value.resetFields)
}

function handleSubmit() {
  formRef.value.validate().then((res) => {
    emits('submitForm', res)
  })
}
watch(
  () => props.type,
  (val: string) => {
    if (val === 'edit' && props.id) {
      //TODO: 请求接口
      searchDictionaryDetail({
        id: props.id
      }).then((res) => {
        const { data } = res
        console.log(res)
        if (data.code == 200 && data.data) {
          const { name, code, description } = data.data
          formState.dictionaryName = name
          formState.dictionaryCode = code
          formState.describe = description
        }
      })
    }
  },
  { immediate: true }
)
</script>

<template>
  <Modal
    :visible="props.visible"
    :title="addDictionaryTitle"
    @cancel="handleCancelVisible"
    @ok="handleSubmit"
  >
    <Form
      :model="formState"
      :="layoutWrapper"
      ref="formRef"
      name="addDictionaryForm"
    >
      <FormItem
        label="字典名称"
        name="dictionaryName"
        :rules="[{ required: true, message: addDictionaryRuleHolder.name }]"
      >
        <Input v-model:value="formState.dictionaryName" />
      </FormItem>
      <FormItem
        label="字典编码"
        name="dictionaryCode"
        :rules="[{ required: true, message: addDictionaryRuleHolder.code }]"
      >
        <Input v-model:value="formState.dictionaryCode" />
      </FormItem>
      <FormItem label="描述" name="describe">
        <Textarea
          v-model:value="formState.describe"
          show-count
          :maxlength="100"
        />
      </FormItem>
    </Form>
  </Modal>
</template>

<style></style>
