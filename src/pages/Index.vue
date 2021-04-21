<template>
  <a-layout :style="{ height: '100vh' }">
    <header-layout />
    <a-layout>
      <sider-layout />
      <a-layout>
        <breadcrumb-layout />
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '5px',
            margin: '10px',
            minHeight: '300px',
            overflowY: 'auto'
          }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import HeaderLayout from '@layout/HeaderLayout.vue'
import SiderLayout from '@layout/SiderLayout.vue'
import BreadcrumbLayout from '@layout/BreadcrumbLayout.vue'
import TagsLayout from '@layout/TagsLayout.vue'

export default {
  name: '',
  components: {
    HeaderLayout,
    SiderLayout,
    BreadcrumbLayout,
    TagsLayout
  },
  setup() {
    return {}
  }
}
</script>
<style scoped></style>
