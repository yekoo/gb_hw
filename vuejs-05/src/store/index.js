import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        paymentsList:[],
        category: [],
        appPages: [],
        openedItems: [],
        addPaymentVisible: false,
        addPaymentFormVisible: false,
    },
    mutations:{
        setPaymentsListData(state, payload){
            state.paymentsList = payload;
            this.dispatch('appendVisibleItems');
            
        },
        // setPaymentFormVisible(state, how){
        //     state.addPaymentFormVisible = how;
        // },

        addDataToPaymentList(state, payload){
            // console.log(">>>>>>>>>>>",payload);
            // payload['id'] = state.paymentsList.length+1;
            state.paymentsList.push(payload);
        },
        addItemsToOpenedList(state, payload){
            state.paymentsList = [...state.paymentsList, ...payload];
            // state.openedItems.push([...payload]);
        },
        addCategory(state, payload){
            state.category = payload;
        },
    },
    getters:{
        getPaymentsList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
        },
        getCategoryFull: state=>{
            return state.paymentsList.map(i => i.category)
        },
        getCategoryList: state=>{
            return state.category;
        },
        // getVisibleItems: state => state.openedItems,
        // getAddPaymentVisible: state => state.addPaymentVisible
    },
    actions:{
        // someAction({commit}, res){
        //     commit('setPaymentsListData', res)
        // }, 
        // async fetchData({commit}){
        async fetchData(){
            const catNum = 6;
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const items = [];
                    for(let i=0; i<110; i++){
                        items.push({
                            id: i+1,
                            date: "7.07.2007",
                            category: "Food",
                            categoryid: Math.round(Math.random()*catNum),
                            value: Math.round(Math.random()*300)
                        });
                    }
                    resolve(items);
                }, 2000);
            }).then(res => this.commit("setPaymentsListData", res));
        },
        fetchCategoryList({commit}){
            return new Promise(resolve=>{
                setTimeout(()=>{
                    resolve(['Food','Transport', 'Education','Internet','GB','Life','Sport']);
                }, 1000);
            }).then(res => commit('addCategory', res));
        },
        appendVisibleItems({commit}, res){
            commit('addItemsToOpenedList', res);
        },
        addNewPayment({commit}, res){
            // console.log(p1, p2);
            // this.addDataToPaymentList({commit}, res);
            commit('addDataToPaymentList', res);
        }
    },
})