<template>
  <div>
      <div :class="[$style.pagesBtns]">
          <!-- <div 
            class="pageItem"
            v-for="(itm, idx) in items" 
            :key="idx"
            @click="pageClick(idx)"
          >{{itm}}</div> -->
          <div 
            :class="[$style.pageItem, currentPage==idx?$style.currentPage:'']"
            v-for="(itm, idx) in countedPages" 
            :key="idx"
            @click="pageClick(idx)"
          >{{idx+1}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: "PaymentsListPages",
    data(){
        return{
            currentPage:0,
        }
    },
    props:{
        items:{
            type: Array,
            default: ()=>[],
            required: true
        },
        pagesNum:{
            type:Number,
            default: 1,
            required: true,
        },
        itemsPerPage:{
            type: Number,
            default: 5,
            required: true,
        }
    },
    computed:{
        countedPages(){
            const allPagesNum = Math.ceil(this.items.length/this.itemsPerPage);
            return new Array(allPagesNum);
        }
    },
    methods:{
        pageClick(num){
            this.currentPage = num;
            this.$emit("onSwitch", num);
        }
    }
}
</script>

<style module>
    .pagesBtns{
        text-align: center;
    }
    .pageItem{
        padding: 10px 12px;
        border: 1px solid #bbb;
        display: inline-block;
        cursor: pointer;
        margin: 2px;
    }
    .pageItem:hover{
        border: 1px solid #bbb;
        background: white;
    }
    .currentPage{
        background: #bbb;
        border: 1px solid #bbb;
    }
</style>