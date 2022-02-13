<script lang="ts" setup>
  import { reactive } from 'vue'
  import { Form, Input, Checkbox, Button } from 'ant-design-vue'
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
  import Footer from '@/layout/Footer.vue'
  import useAuth from '@/hooks/useAuth'
  import useRequest from '@/hooks/useRequest'

  const appName = import.meta.env.VITE_APP_NAME

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
  <div class="login-bg"></div>
  <div class="login">
    <div class="login-form">
      <Form :model="form" :rules="rules" @finish="onFinish">
        <div class="login-header">
          <div><img src="/logo.svg" /></div>
          <h1>{{ appName }}</h1>
          <p>A starting point for new web applications.</p>
        </div>
        <Form.Item name="username">
          <Input v-model:value="form.username" size="large" placeholder="用户名">
            <template #prefix>
              <UserOutlined />
            </template>
          </Input>
        </Form.Item>
        <Form.Item name="password">
          <Input.Password v-model:value="form.password" size="large" placeholder="密码">
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
        <Button type="primary" size="large" html-type="submit" :loading="loading">登 录</Button>
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
      padding-bottom: 100px;
      .ant-form {
        background: #fff;
        width: 420px;
        border-radius: 5px;
        padding: 40px 40px 60px;
        box-shadow: rgb(0 0 0 / 5%) 0px 0px 5px;
      }
      .ant-btn {
        width: 100%;
      }
    }
    &-header {
      text-align: center;
      h1 {
        color: rgba(0, 0, 0, 0.8);
        font-weight: 600;
        font-size: 33px;
        margin: 6px 0;
      }
      img {
        width: 50px;
        margin-right: 10px;
      }
      p {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
        margin-bottom: 40px;
      }
    }
  }

  .login-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #f0f2f5;
    background-image: url(/assets/login-bg.svg), url(/assets/login-left-bg.svg),
      url(/assets/login-right-bg.svg);
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-attachment: fixed, fixed, fixed;
    background-size: 70%, 420px, 420px;
    background-position: center 10px, left bottom, right bottom;
  }
  @media (max-width: 1200px) {
    .login-bg {
      background-size: 70%, 368px, 368px;
    }
    .login-form {
      padding-bottom: 0;
    }
  }
  @media (max-width: 768px) {
    .login-bg {
      background-size: 70%, 150px, 150px;
    }
  }

  @media (max-height: 650px) {
    .login-form {
      padding-bottom: 0;
    }
  }
</style>
