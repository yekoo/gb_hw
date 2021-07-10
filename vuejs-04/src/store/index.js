import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        paymentsList:[],
        category: []
    },
    mutations:{
        setPaymentsListData(state, payload){
            state.paymentsList = payload;
        },
        addDataToPaymentList(state, payload){
            state.paymentsList.push(payload);
        },
        //editPaymentList(staate, payload){
            //state.paymentsList[0] = payload; 
            //  если править значения данных напрямую,
            //  то не произойдет реактивности
            //Vue.set(paymentsList, 0, payload);

            //  более громоздкий вариант:
            //  state.paymentsList[0] = payload; 
            //  state.paymentsList = [...state.paymentsList]
        //}
        addCategory(state, payload){
            state.category = payload;
        }
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
        }
    },
    actions:{
        someAction({commit}, res){
            commit('setPaymentsListData', res)
        }, 
        async fetchData({commit}){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const items = [];
                    for(let i=0; i<110; i++){
                        items.push({
                            id: i,
                            date: "7.07.2007",
                            category: "Food",
                            value: i
                        });
                    }
                    resolve(items);
                }, 2000);
            }).then(res => this.commit("setPaymentsListData", res));
        },
        fetchCategoryList({commit}){
            return new Promise(resolve=>{
                setTimeout(()=>{
                    console.log(">>> RESOLVE");
                    resolve(['Food','Transport', 'Education','Internet','GB','Life','Sport']);
                }, 1000);
            }).then(res => commit('addCategory', res));
        }
    },
})