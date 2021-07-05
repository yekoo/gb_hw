<template>
  <div class="payment-form">
      <input placeholder="Category" type="text" v-model.trim="category"/>
      <input placeholder="Amount" type="number" v-model.number="value"/>
      <input placeholder="Date" type="text" v-model.trim="date"/>
      <button @click="onClick">Save</button>
  </div>
</template>

<script>
export default {
    name: "AddPaymentForm",
    data:()=>{
        return {
            value: 0,
            category: "",
            date:""
        }
    },
    methods:{
        onClick(){
            const {value, category, date} = this;
            const data = {
                date: this.date || this.getCurrentDate(),
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