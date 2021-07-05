<template>
  <div :class="[$style.list]">
      <table>
          <thead>
              <td>#</td>
              <td>Category</td>
              <td>Price</td>
              <td>Date</td>
          </thead>
          <tr v-for="(item, idx) in items" :key="idx">
              <td>{{idx+firstItemNum+1}}</td>
              <td>{{item.category}}</td>
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
</template>

<script>
export default {
    name:"PaymentsDisplay",
    
    props:{
        items:{
            type: Array,
            // default: ()=>[],
            required: true
        },
        firstItemNum:{
            type: Number,
            required: true
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