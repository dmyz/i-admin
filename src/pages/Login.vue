<template>
  <div>login</div>

  <a-button type="primary" @click="login">登录</a-button>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup() {
    const data = reactive({})
    onMounted(() => {
      // console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    const refData = toRefs(data)

    const { push } = useRouter()

    const login = () => {
      sessionStorage.setItem('token', '1123')
      push('/')
    }

    return {
      ...refData,
      login
    }
  }
}
</script>
<style scoped></style>
