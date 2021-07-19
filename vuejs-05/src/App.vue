<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>My Personal Cost</h1>
    </div>

  <div class="menu">
    <a href="#" @click="goToPage('dashboard')">Dashboard</a> / 
    <a href="#" @click="goToPage('about')">About</a>
    

    <!-- <a href="dashboard">dashboard</a> - 
    <a href="page404">404</a> - 
    <a href="about">About</a> - -->
    </div>
    <div class="content" style="border: 1px solid green">
      <router-view/>
    </div>

    <div class="wrapper">
      
    </div>
    
    <transition name="fade">
       <ModalWin  v-if="modalWindowName" :settings="settings"/>
    </transition>
  </div>
</template>

<script>
// import About from './components/pages/About.vue'
// import Page404 from './components/pages/Page404.vue'
// import Dashboard from './components/pages/Dashboard.vue'

// import ModalWin from './components/ModalWin'


export default {
  name: 'App', 
  components: {
    // About,
    // Page404,
    // Dashboard
    ModalWin: ()=> import ('./components/ModalWin')
  },
  data(){
    return {
      // showAddPaymentModal: true,
      modalWindowName:"",
      settings:{
        // header:"Add payment",
        // compName: 'add'
      }
    }
  },
  methods:{
    // ...mapActions({
    //   fetchListData: 'fetchData'
    // }),
    goToPage(pageName){
      this.$router.push({
        name: pageName,
        params: this.$router.params
        
      })
    },
    onShow(settings){
      console.log(">>>>>>>>>>>>",this.$route);
      console.log("onShow(settings)", settings);
      this.settings = settings.settings;
      this.modalWindowName = settings.settings.compName;
    },
    onHide(){
      console.log("onHide()");
      this.modalWindowName = "";
      this.settings = {};
    }
  },
  created(){

  },
  
  mounted(){
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
    // this.setPage()

    // const links = document.querySelectorAll('a');
    // links.forEach(link=>{
    //   link.addEventListener("click", evt=>{
    //     evt.preventDefault();
    //     history.pushState({}, link.href);
    //     this.setPage();
    //   })
    // })
    
    // window.addEventListener('hashchange',  ()=>{
    //   this.setPage()
    // })
  }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active{
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
<style lang="scss" scoped module>
.header{
  font-size: 20px;
}
.content{
  border: 2px dashed orange;
  background: red;
}
</style>
