<template>
  <div class="wrapper hiddenn">
      <h3 class="header">{{settings.header}}</h3>
      <div class="content">
          <!-- <AddPaymentForm v-if="settings.compName==='add'"/> -->
          <!-- <Auth v-if="settings.compName==='auth'"/> -->
          <component 
            :is="settings.compName" 
            :categoryList="this.$store.getters.getCategoryList"
            @addNewPayment="onAddNewPayment"
          />
      </div>
      <div class="footer">
          <button @click="onCloseClick">Close</button>
      </div>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue"
import Auth from "./Auth.vue"
export default {
    name: "ModalWin",
    components:{
        AddPaymentForm,
        Auth
    },
    props:{
        settings:{
            type:Object
        }
    },
    methods: {
        onCloseClick(){
            // this.$emit("hide");
            this.$modal.hide();
        },
        onAddNewPayment(data){
            console.log("New payment adding:", data);
            // this.$store.onAddNewPayment
            // this.$store.addDataToPaymentList(this.$store, data);
        }
    }
}
</script>

<style scoped lang="scss">
    .wrapper{
        position: absolute;
        background: #e3e3e3;
        top: 0;
        // margin: 0 auto;
        padding: 12px;
    }
</style>