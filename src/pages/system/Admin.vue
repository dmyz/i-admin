<template>
  <a-space direction="vertical" style="width: 100%">
    <a-card :headStyle="{}" :bodyStyle="{ padding: '5px' }">
      <a-button type="primary" @click="handleAdd">添加</a-button>
    </a-card>

    <a-table bordered :dataSource="dataSource" :columns="columns">
      <template #action="{ record }">
        <span>
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a @click="handleDel(record)">删除</a>
        </span>
      </template>
    </a-table>
  </a-space>

  <a-modal v-model:visible="visible" :title="title" @ok="handleOk" @cancel="handleCancel">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>

<script>
import { onMounted, reactive, toRefs, ref } from 'vue'

export default {
  name: 'Admin',
  setup() {
    const state = reactive({
      dataSource: [],

      title: '',
      visible: false
    })

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: '操作',
        key: 'action',
        slots: { customRender: 'action' }
      }
    ]

    onMounted(() => {
      state.dataSource = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer']
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser']
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher']
        }
      ]
    })

    // 添加
    const handleAdd = () => {
      state.title = '添加管理员'
      state.visible = true
    }
    // 编辑
    const handleEdit = (record) => {
      state.title = '编辑管理员'
      state.visible = true
    }
    // 删除
    const handleDel = (record) => {}

    // 提交
    const handleOk = () => {}

    // 取消
    const handleCancel = () => {
      state.title = ''
      state.visible = false
    }

    return {
      ...toRefs(state),
      columns,
      handleAdd,
      handleEdit,
      handleDel,
      handleOk,
      handleCancel
    }
  }
}
</script>
<style scoped></style>
