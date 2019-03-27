import Vue from 'vue'
import Router from 'vue-router' /*引入Vue路由模块，并赋值给Router*/ 

import BottomNav from '@/components/BottomNav'   /* 英文Hello.vue模版，并赋值给变量Hello,这里是“@”相当于“../” */
import Mine from '@/components/Mine' 

Vue.use(Router)   /*使用路由*/

export default new Router({
    routers:[    /* 进行路由配置，规定“/”引入到Hello组件 */
      {
        path: '/',
        name: 'BottomNav',
        components: BottomNav   /* 注Hello 组件 */
      } ,{
        path: '/',
        name: 'Mine',
        components: Mine
      }
    ]
})