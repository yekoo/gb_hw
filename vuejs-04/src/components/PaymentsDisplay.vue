<template>
<div class="payments-list">
    <!--<div class="list">
        <div class="item" 
            v-for="(item, idx) in items" 
            :key="idx">
            {{ idx + 1 }} - {{ item }}
        </div>
    </div>-->
    <div :class="[$style.list]">
            <table>
                <thead>
                    <td>#</td>
                    <td>Category</td>
                    <td>Price</td>
                    <td>Date</td>
                </thead>
                <tr v-for="(item, idx) in items" :key="idx">
                    <td>{{item.id}}</td>
                    <td>{{categoryList[item.categoryid]}}</td>
                    <td>{{item.value}}</td>
                    <td>{{item.date}}</td>
                    <!-- <div  class="item" 
                v-for="(item, idx) in items" 
                :key="idx"> -->
                <!-- {{idx+1}} - {{item}}  -->
                <!-- </div> -->
                </tr>
            </table>
            
        </div>
</div>
</template>

<script>
export default {
    name: "PaymentsDisplay",
    props: {
        items: {
            type: Array,
            default: ()=>[],
        }
    },
    computed:{
        categoryList(){
            return this.$store.getters.getCategoryList
        }
    },
    methods:{
        getCategoryName(idx){
            return this.$store.getters.getCategoryName(idx);
        }
    }
}
</script>


<style module>
    .list{
        background: #f8f8f8;
    }

    table{
        width: 100%;
        border: 1px solid grey;
        border-spacing: 0;
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
    thead{
        font-weight: bold;
        background: #bbb;
    }
    td{
        width: 30%;
    }
    td:nth-child(1){
        width: 10%;
    }
    td{
        padding: 2px;
        /* width: 100%; */
    }
    tr:nth-child(even){
        background: #eee;
    }
</style>