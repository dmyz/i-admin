import { createApp } from 'vue'

import store from './store'
import router from './router'

import App from './App.vue'

import antdv from './plugins/antdv'
import vxeTable from './plugins/vxe-table'

createApp(App).use(router).use(store).use(antdv).use(vxeTable).mount('#app')
