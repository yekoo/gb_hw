<template>
  <div>
      [ Dashboard ]
      <!-- <AddPaymentForm @addNewPayment="addNewPaymentData" :category-list="categoryList"/> -->
      <button @click="showPaymentsForm">Add Payment</button>
      <!-- <ModalWindow  v-if="showAddPaymentModal" @close="showAddPaymentModal=false" :settings="settings"/> -->
      <PaymentsDisplay :items="getPageElements"/>
      <PaymentsListPages 
        :currentPage="curPage" 
        :itemsTotal="paymentList.length" 
        :itemsPerPage="itemsPerPage"
        @onSwitch="changeListPage"/>

      <br/>

          <!-- <ModalWindow  v-if="showAddPaymentModal" @close="showAddPaymentModal=!showAddPaymentModal" :settings="settings"/> -->
          <div>Total Sum  =  {{getFPV}} </div>
  </div>
</template>

<script>
//  mapActions
import { mapMutations, mapGetters, mapActions } from 'vuex'
import PaymentsDisplay from '../PaymentsDisplay.vue'
// import AddPaymentForm from '../AddPaymentForm.vue'
import PaymentsListPages from '../PaymentsListPages.vue'
// import ModalWindow from '../ModalWindow.vue'

export default {
    name: "Dashboard",
    components:{
      PaymentsDisplay,
      // AddPaymentForm,
      PaymentsListPages,
    },
    data(){
      return {
        curPage: 0,
        itemsPerPage: 10,
        pagename:'',
        showAddPaymentModal: false,
        // settings:{
        //   header:"Add payment",
        //   compName: 'add'
        // }
      }
    },
    methods: {
    ...mapMutations([
      'setPaymentsListData',
      // 'addDataToPaymentList'
    ]),
    ...mapActions({
      fetchListData: 'fetchData'
    }),
    
    // addNewPaymentData(value){
    //   this.addDataToPaymentList(value)
    // },
    changeListPage(num){
      this.curPage = num;
      console.log("SWITCHING PAGE "+num);
    },
    // setPage(){
    //   this.pagename = location.hash.slice(1);
    // }
    showPaymentsForm(){
      console.log("showPaymentsForm");
      this.$modal.show('add', {header:"Add new cost", compName:"AddPaymentForm", categoryList:this.categoryList});
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
    console.log("CREATED====== ANG DO TO PAGE: ",this.$route);
    const currentListPage = this.$route.params.page-1 || 0;
    console.log("page "+currentListPage);
    this.$router.push({
      name:`dashboard`
    });

    //  emit page switch event with this.$route.params.page

    if(!this.$store.getters.getPaymentsList.length) {
      this.fetchListData()
    }
    this.$store.dispatch('fetchCategoryList')
    this.changeListPage(currentListPage);

  },
  mounted(){
    // this.$modal.show("name","settings");
    // this.$modal.hide();
    this.page = +this.$route.params.page || 1
  }
}

</script>

<style>

</style>