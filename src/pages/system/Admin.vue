<template>
  <a-space direction="vertical" style="width: 100%">
    <a-card :headStyle="{}" :bodyStyle="{ padding: '5px' }">
      <a-button type="primary" @click="handleAdd">添加</a-button>
    </a-card>

    <a-table bordered row-key="userId" :dataSource="dataSource" :columns="columns">
      <template #status="{ text }">
        <a-tag color="#2db7f5" v-if="text === '1'">正常</a-tag>
        <a-tag color="#87d068" v-else>失效</a-tag>
      </template>

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
    <a-form
      ref="userRef"
      :model="userState"
      :rules="userRules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item ref="loginName" label="用户名" name="loginName">
        <a-input v-model:value="userState.loginName" />
      </a-form-item>
      <a-form-item ref="nickname" label="昵称" name="nickname">
        <a-input v-model:value="userState.nickname" />
      </a-form-item>
      <a-form-item label="状态" name="status">
        <a-radio-group v-model:value="userState.status">
          <a-radio value="1">正常</a-radio>
          <a-radio value="0">失效</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { onMounted, reactive, toRefs, ref, toRaw, createVNode } from 'vue'
import { Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'

export default {
  name: 'Admin',
  setup() {
    const state = reactive({
      dataSource: [],
      title: '',
      visible: false,
      userState: {}
    })

    const initUserState = {
      loginName: '',
      nickname: '',
      role: '',
      status: '1'
    }

    const userRef = ref()

    const columns = [
      {
        title: '用户名',
        dataIndex: 'loginName',
        key: 'loginName'
      },
      {
        title: '昵称',
        dataIndex: 'nickname',
        key: 'nickname'
      },
      {
        title: '角色',
        dataIndex: 'role',
        key: 'role'
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        slots: { customRender: 'status' }
      },
      {
        title: '操作',
        key: 'action',
        fixed: 'right',
        slots: { customRender: 'action' }
      }
    ]

    const userRules = {
      name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
      ],
      region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
      date1: [{ required: true, message: 'Please pick a date', trigger: 'change', type: 'object' }],
      type: [
        {
          type: 'array',
          required: true,
          message: 'Please select at least one activity type',
          trigger: 'change'
        }
      ],
      resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
      desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }]
    }

    onMounted(() => {
      state.dataSource = [
        {
          userId: '1',
          loginName: 'JohnBrown',
          nickname: 'John Brown',
          status: '1',
          role: '系统管理员'
        },
        {
          userId: '2',
          loginName: 'Jim Green',
          nickname: 'JimGreen',
          status: '1',
          role: '普通管理员'
        },
        {
          userId: '3',
          loginName: 'Joe Black',
          nickname: 'JoeBlack',
          status: '0',
          role: '普通管理员'
        }
      ]
    })

    // 添加
    const handleAdd = () => {
      state.title = '添加管理员'
      state.visible = true
      state.userState = initUserState
    }
    // 编辑
    const handleEdit = (record) => {
      state.title = '编辑管理员'
      state.visible = true
      state.userState = record
    }
    // 删除
    const handleDel = (record) => {
      console.log(record)
      Modal.confirm({
        title: '确认删除该用户',
        icon: createVNode(ExclamationCircleOutlined),
        okText: '确认',
        cancelText: '取消',
        onOk(e) {
          console.log('删除')

          return Promise.resolve()
        }
      })
    }

    // 提交
    const handleOk = () => {
      userRef.value
        .validate()
        .then(() => {
          console.log('values', state.userState, toRaw(state.userState))
        })
        .catch((error) => {
          console.log('error', error)
        })
    }

    // 取消
    const handleCancel = () => {
      state.title = ''
      state.visible = false
      state.userState = {}
    }

    return {
      ...toRefs(state),
      userRef,
      columns,
      handleAdd,
      handleEdit,
      handleDel,
      handleOk,
      handleCancel,
      userRules,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    }
  }
}
</script>
<style scoped></style>
