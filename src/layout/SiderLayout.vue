<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :style="{ height: '100%', borderRight: 0, overflowX: 'hidden', overflowY: 'auto' }"
      :openKeys="openKeys"
      :selectedKeys="selectedKeys"
      @openChange="openChange"
      @click="onClick"
    >
      <a-menu-item key="/console">控制台</a-menu-item>
      <a-sub-menu key="/system">
        <template #title>
          <span>系统设置</span>
        </template>
        <a-menu-item key="/admin">管理员管理</a-menu-item>
      </a-sub-menu>

      <!-- <a-sub-menu key="sub2">
          <template #title>
              <span>subnav 2</span>
          </template>
          <a-menu-item key="5">option5</a-menu-item>
          <a-menu-item key="6">option6</a-menu-item>
          <a-menu-item key="7">option7</a-menu-item>
          <a-menu-item key="8">option8</a-menu-item>
      </a-sub-menu>-->
      <!--       <a-sub-menu key="sub3">
          <template #title>
              <span>subnav 3</span>
          </template>
          <a-menu-item key="9">option9</a-menu-item>
          <a-menu-item key="10">option10</a-menu-item>
          <a-menu-item key="11">option11</a-menu-item>
          <a-menu-item key="12">option12</a-menu-item>
      </a-sub-menu>-->
      <!-- <a-sub-menu key="sub4">
          <template #title>
              <span>subnav 3</span>
          </template>
          <a-menu-item key="13">option13</a-menu-item>
          <a-menu-item key="14">option14</a-menu-item>
          <a-menu-item key="15">option15</a-menu-item>
          <a-menu-item key="16">option16</a-menu-item>
      </a-sub-menu>-->
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'HeaderLayout',
  setup() {
    const state = reactive({
      rootSubmenuKeys: ['sub1', 'sub2', 'sub3', 'sub4', '/system'],
      openKeys: [],
      selectedKeys: ['/console']
    })

    const { push } = useRouter()

    // onBeforeMount(() => {
    //     console.log('2.组件挂载页面之前执行----onBeforeMount')
    // })
    // onMounted(() => {
    //     console.log('3.-组件挂载到页面之后执行-------onMounted')
    // })

    const openChange = (openKeys) => {
      const latestOpenKey = openKeys.find((key) => state.openKeys.indexOf(key) === -1)
      if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        state.openKeys = openKeys
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }

    const onClick = ({ item, key, keyPath }) => {
      // console.log(item, key, keyPath);
      if (keyPath.length === 1) {
        state.openKeys = []
      }
      state.selectedKeys = [key]
      push(key)
    }

    return {
      ...toRefs(state),
      openChange,
      onClick
    }
  }
}
</script>
<style scoped></style>
