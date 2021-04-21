<template>
  <a-config-provider :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import zhCN from 'ant-design-vue/es/locale/zh_CN'
// import 'moment/dist/locale/zh-cn'

export default defineComponent({
  name: 'App',
  setup() {
    return {
      zhCN
    }
  }
})
</script>

<style>
html,
body {
  height: 100vh;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
</style>
