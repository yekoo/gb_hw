<template>
  <div>
      <div :class="[$style.pagesBtns]">
          <div 
            :class="[$style.pageItem , 
            currentPage==idx?$style.currentPage:'']"
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
    
    props:{
        itemsTotal:{
            type: Number,
            default: 1,
            required: true
        },
        currentPage:{
            type:Number,
            default: 0,
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
            const allPagesNum = Math.ceil(this.itemsTotal / this.itemsPerPage);
            return new Array(allPagesNum);
        }
    },
    methods:{
        pageClick(num){
            // this.currentPage = num;
            this.$emit("onSwitch", num);
        },
    },
    
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
        pointer-events: none;
    }
</style>