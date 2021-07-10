<template>
  <div class="payment-form">
      <!-- <input placeholder="Category" type="text" v-model.trim="category"/> -->
      <select v-model="category">
          <option v-for="(item, idx) in categoryList" :value="item" :key="idx">
              {{item}}
          </option>
      </select>
      <input placeholder="Amount" type="number" v-model.number="value"/>
      <input placeholder="Date" type="text" v-model.trim="date"/>
      <button @click="onClick">Save</button>
  </div>
</template>

<script>
// import {mapGetters, mapMutations} from 'vuex';
export default {
    name: "AddPaymentForm",
    props:["categoryList"],
    data:()=>{
        return {
            value: 0,
            category: "Food",
            date:""
        }
    },
    methods:{
        /*...mapMutations([
            'addDataToPaymentList'
        ]),*/
        onClick(){
            const {value, category, date} = this;
            const data = {
                date: date || this.getCurrentDate(),
                category,
                value,
            }
            console.log("Saved! ", data);
            this.$emit("addNewPayment", data);

        },
        getCurrentDate(){
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth()+1;
            const y = today.getFullYear();
            return `${d}.${m}.${y}`;
        }

    }
}
</script>

<style>

</style>