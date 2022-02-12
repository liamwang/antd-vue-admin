<script lang="ts" setup>
import { reactive } from 'vue'
import { Form, Input, Checkbox, Button } from 'ant-design-vue'

const form = reactive({
  username: '',
  password: '',
  remember: false,
})

const rules = {
  username: [{ required: true, message: '请输入用户名' }],
}
</script>

<template>
  <Form :model="form" :rules="rules">
    <Form.Item name="username">
      <Input v-model:value="form.username" />
    </Form.Item>
    <Form.Item name="username">
      <Input.Password />
    </Form.Item>
    <Form.Item name="username">
      <Checkbox v-model:value="form.remember">下次自动登录</Checkbox>
    </Form.Item>
    <Button type="primary" size="large">登 录</Button>
  </Form>
</template>
