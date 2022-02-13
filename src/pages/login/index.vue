<script lang="ts" setup>
import { reactive } from 'vue'
import { Form, Input, Checkbox, Button } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import Footer from '@/layout/Footer.vue'
import useAuth from '@/hooks/useAuth'
import useRequest from '@/hooks/useRequest'

const form = reactive({
  username: '',
  password: '',
  remember: false,
})

const rules = {
  username: [{ required: true, message: '请输入用户名' }],
  password: [{ required: true, message: '请输入密码' }],
}

const { login } = useAuth()
const { run, loading } = useRequest()

const onFinish = (values: any) => {
  run(login(values))
}
</script>

<template>
  <div class="login">
    <div class="login-form">
      <Form :model="form" :rules="rules" @finish="onFinish">
        <Form.Item name="username">
          <Input
            v-model:value="form.username"
            size="large"
            placeholder="用户名"
          >
            <template #prefix>
              <UserOutlined />
            </template>
          </Input>
        </Form.Item>
        <Form.Item name="password">
          <Input.Password
            v-model:value="form.password"
            size="large"
            placeholder="密码"
          >
            <template #prefix>
              <LockOutlined />
            </template>
          </Input.Password>
        </Form.Item>
        <!--
        <Form.Item name="remember">
          <Checkbox v-model:value="form.remember">下次自动登录</Checkbox>
        </Form.Item>
        -->
        <Button
          type="primary"
          size="large"
          html-type="submit"
          :loading="loading"
          >登 录</Button
        >
      </Form>
    </div>
    <Footer />
  </div>
</template>

<style lang="less">
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-form {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .ant-form {
      width: 320px;
      padding-bottom: 100px;
    }
    .ant-btn {
      width: 100%;
    }
  }
}
</style>
