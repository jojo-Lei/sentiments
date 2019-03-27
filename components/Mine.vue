<template>
    <div>
        <p>This is a MinePage.</p>

        <div id = "mine-list" v-for = "item in data">
             <div>{{item.money}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Mine",
    data(){
        return{
            data:[
                {money: 100},
                {money: 1000},
                {money: 100000}
            ]
        }
    }
}
</script>
