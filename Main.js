
//引入并安装vue-router插件
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.use(VueRouter);

//引入index.vue和hello.vue组件
import index from './components/index.vue';
import hello from './components/hello.vue';
//定义路由

new Vue({
    el: "#app",
    router,
    template: '<App/>',
    components: {App}

})