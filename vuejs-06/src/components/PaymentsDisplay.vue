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
                    <td></td>
                </thead>
                <tr v-for="(item, idx) in items" :key="idx">
                    <td>{{item.id}}</td>
                    <td>{{categoryList[item.categoryid]}}</td>
                    <td>{{item.value}}</td>
                    <td>{{item.date}}</td>
                    <td><img 
                        src="../assets/tripledots.png" 
                        @click="showItemContextMenu(item)"
                        class="item-menu-btn"/></td>
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
        },
        showItemContextMenu(item){
            console.log("clicked item:", item.id, event.target);
            // this.$contextMenu.emit("")
            this.$contextMenu.showContextMenu(item.id, event.target);
        },
        showItemMenu(){
            console.log("Show menu");
        },
        hideItemMenu(){
            console.log("Hide menu");
        },
    },
    mounted(){
        // this.$contextMenu.EventBus.$on("show", this.showItemMenu);
        // this.$contextMenu.EventBus.$on("show", this.hideItemMenu);
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
    .item-menu-btn{
        cursor: pointer;
        border: 1px solid red;
    }
</style>