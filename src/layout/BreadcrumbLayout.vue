<template>
  <a-breadcrumb style="margin: 15px 15px 0 15px">
    <a-breadcrumb-item v-for="item in matchedList" :key="item.path">
      {{ item.meta.title }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export default {
  name: 'BreadcrumbLayout',
  setup() {
    const state = reactive({
      matchedList: []
    })
    const { matched } = useRoute()
    onMounted(() => {
      state.matchedList = matched
    })

    // eslint-disable-next-line no-shadow
    onBeforeRouteUpdate(({ matched }) => {
      state.matchedList = matched
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
<style scoped></style>
