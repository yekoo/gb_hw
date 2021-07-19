import Vue from 'vue'
import Router from 'vue-router'

// import About from '../components/pages/About'
// import Dashboard from '../components/pages/Dashboard'
// import Page404 from '../components/pages/Page404'

// import {
//     Dashboard,
//     About
// } from '@/components/pages'

Vue.use(Router)

const router = new Router({ 
    mode: 'history',
    routes:[
        {
            path:'/dashboard',
            name:'dashboard',
            // component: Dashboard
            component: ()=>import(/* webpackChunkName: "Dashboard" */ '../components/pages/Dashboard.vue')
        },
        {
            path:'/dashboard/:page',
            name:'dashboardPage',
            // component: Dashboard
            component: ()=>import(/* webpackChunkName: "Dashboard" */ '../components/pages/Dashboard.vue')
        },
        {
            // path:'/add/payment/Food?value=200',
            path:'/add/payment/:payment',
            name:"addPayment",
            // component: Dashboard
            // component: ()=>import(/* webpackChunkName: "dashboard" */ '../components/pages/Dashboard.vue')
            component: ()=>import(/* webpackChunkName: "Dashboard" */ '../components/pages/Dashboard.vue')
            //this.$modal.show('add', {header:"Add new cost", compName:"AddPaymentForm", categoryList:this.categoryList});
        },
        // {
        //     path: '/auth',
        //     name:"Login",
        //     component: Page404
        // },
        // {
        //     path:'/dashboard/:page',
        //     name:'dashboardPage',
        //     component: Dashboard
        // },
        {
            path:'/about',
            name:'about',
            // component: About
            component: ()=>import(/* webpackChunkName: 'about' */ "../components/pages/About.vue")
        },
        // {
        //     path: '*',
        //     name: "notFound",
        //     component: Page404
        // },
    ]
})
/*const isAuth = true;

router.beforeEach( (to, from, next)=>{
    if(to.name !== "Login" && !isAuth){
        next({
            name: "Login"
        });
    }else{
        next()
        
    }
})*/

const getTitleTemplatesName = routerName =>{
    return {
         "dashboard": "My personanal cost",
         "about": "About page",
         "notFound": "Page not found"
    }[routerName];
}
router.afterEach((to)=>{
    document.title = getTitleTemplatesName(to.name);
})
export default router;