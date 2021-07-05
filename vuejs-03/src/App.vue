<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>Sopping costs</h1>
    </div>
    <div :class="[$style.wrapper]">
      <div :class="[$style.newLineFormBox]">
        <button @click="newFormToggle">Add new Payment</button>
        <add-payment-form v-show="addNewLineFormVisible" @addNewPayment="addNewPaymentData"/>
      </div>
      <payments-display 
        :items="currentPageItems" 
        :firstItemNum="curPageNum*itemsPerPage"/>
      <payments-list-pages 
        :itemsPerPage="itemsPerPage" 
        :pagesNum="paymentsList.length/this.itemsPerPage" 
        :items="paymentsList" 
        @onSwitch="switchPage"/>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsListPages from "./components/PaymentsListPages.vue";
export default {
  name: 'App',
  components: {
    PaymentsDisplay, 
    AddPaymentForm,
    PaymentsListPages
  },
  data(){
    return {
      paymentsList: [],
      curPageNum:0,
      curPageItms:[],
      itemsPerPage: 4,
      addNewLineFormVisible: false,
    }
  },
  methods:{
    addNewPaymentData(data){
      // console.log("Dayment added:",data);
      this.paymentsList = [...this.paymentsList, data];
    },
    fetchData(){
        return [
            {
                date: "24.03.2021",
                category: "Food",
                value: 120
            },
            {
                date: "28.03.2021",
                category: "Food",
                value: 180
            },
            {
                date: "5.03.2021",
                category: "Internet",
                value: 640
            },
            {
                date: "12.03.2021",
                category: "Wear",
                value: 1400
            },
            {
                date: "2.07.2021",
                category: "Coffee",
                value: 140
            },
        ]
    },
    switchPage(num){
      console.log(this.paymentsList);
      console.log("App: SwitchPage "+num);
      this.curPageNum = num;
      this.curPageItms = this.paymentsList.slice(num*this.itemsPerPage, num*this.itemsPerPage+this.itemsPerPage)
      console.log(this.curPageItms);
    },
    newFormToggle(){
      this.addNewLineFormVisible = !this.addNewLineFormVisible;
    }
  },
  created(){
      this.paymentsList = this.fetchData();
      this.switchPage(0);
  },
  computed:{
    currentPageItems(){
      // return this.curPageItms = this.paymentsList.slice(num*this.itemsPerPage, num*this.itemsPerPage+this.itemsPerPage)
      console.log(this.paymentsList, this.itemsPerPage );
      return this.paymentsList.slice(this.curPageNum*this.itemsPerPage, this.curPageNum*this.itemsPerPage+this.itemsPerPage)
    },
    allPages(){
      const num = Math.ceil( this.paymentsList, this.itemsPerPage);
      return new Array(num);
    }
  }
}
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper{
  padding: 3px 5px;
  border-radius: 4px;
  background: #e8e8e8;
}
.header{
  font-size: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.newLineFormBox{
  display: flex;
  padding: 4px 0;
}
</style>
