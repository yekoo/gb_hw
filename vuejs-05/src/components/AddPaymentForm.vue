<template>
    <div>
        <!-- <button @click="showHidePanel">Add payment</button> -->

        <div class="payment-form" >
            <input placeholder="Amout" type="number" v-model.number="value" />
            <!-- <input placeholder="Category" type="text" v-model.trim="category" /> -->
            <select v-model="category">
                <option v-for="(item, idx) in categoryList" :value="item" :key="idx">
                    {{item}}
                </option>
            </select>
            <input placeholder="Date" type="text" v-model.trim="date" />
            <button @click="onClick"> Save </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddPaymentForm",
    props:[
        'categoryList',
        // 'panelVisible'
        ],
    data(){
        return {
            value: 0,
            category: 'Food',
            date: '',
            // formVisible: false
        }
    },
    methods:{
        
        getCurrentDate(){
            const today= new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        },
        getCategoryId(name){
            // this.$store.getters.getCategoryList.indexOf(name);
            // console.log(name, this.$store.getters.getCategoryList.indexOf(name));
            return this.$store.getters.getCategoryList.indexOf(name);
        },
        onClick(){
            const {value, category} = this
            const data = {
                date: this.date || this.getCurrentDate(), 
                category,
                categoryid:this.getCategoryId(category),
                value
            }
            console.log("Time to add payment data lo list", data);
            // this.$emit('addNewPayment', data)
            this.$store.dispatch("addNewPayment", data);
        },
    },
}
</script>

<style>

</style>