<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>My Personal Cost</h1>
    </div>
    <div class="wrapper">
      <AddPaymentForm @addNewPayment="addNewPaymentData" :category-list="categoryList"/>
      <br/>
          <div>Total Sum  =  {{getFPV}} </div>
      <!-- <PaymentsDisplay :items="paymentList"/> -->
      <PaymentsDisplay :items="getPageElements"/>
      <PaymentsListPages 
        :currentPage="curPage" 
        :itemsTotal="paymentList.length" 
        :itemsPerPage="itemsPerPage"
        @onSwitch="changePage"/>
      <!-- <PaymentsDisplay :items="categoryList"/> -->
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentsListPages from './components/PaymentsListPages.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    PaymentsListPages
  },
  data(){
    return {
      curPage: 0,
      itemsPerPage: 10,
    }
  },
  methods: {
    ...mapMutations([
      'setPaymentsListData',
      'addDataToPaymentList'
    ]),
    ...mapActions({
      fetchListData: 'fetchData'
    }),  
    addNewPaymentData(value){
      this.addDataToPaymentList(value)
    },
    changePage(num){
      this.curPage = num;
      console.log("New page to show - "+num);
    }
  },
  computed: {
    ...mapGetters([
      'getFullPaymentValue'
    ]),
    getFPV(){
        return this.getFullPaymentValue
    },
    paymentList(){
      return this.$store.getters.getPaymentsList
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    },
    getPageElements(){
      const {itemsPerPage, curPage} = this;
      return this.paymentList.slice(itemsPerPage*curPage, itemsPerPage*curPage+itemsPerPage)
    }
  },
  created(){
      // this.paymentsList = this.fetchData()
      // this.$store.commit('setPaymentsListData', this.fetchData())
      if(!this.fetchListData.length) {
        this.fetchListData()
      }
      this.$store.dispatch('fetchCategoryList')
  }
}
</script>

<style lang="scss" scoped module>
.header{
  font-size: 20px;
}
</style>
