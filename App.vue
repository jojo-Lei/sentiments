 /*主容器*/
<template>    
    <div id="app">
       <router-view></router-view>
        <Bottom-Nav></Bottom-Nav>   /*将组件写入页面*/
    </div>
</template>

<script>
    // 导入组件 
    import BottomNav from  './components/BottomNav.vue'
    export default {
        name: 'app',
        components:{
            BottomNav   //注册组件
        }
    }
</script>

<style>
    #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
