<template>
<div>
  <input type="number" v-model.number="operand1" placeholder="Operand 1"/>
  {{lastOperation}}
  <input type="number" 
    v-model.number="operand2" 
    placeholder="Operand 2"
    @blur="sendData(operand2)"
    />
  =
  {{ sum }}

  <div class="keyboard">
      <button v-on:click="sum = operand1 + operand2; lastOperation='+'">+</button>
      <button v-on:click="sum = operand1 - operand2; lastOperation='-'">-</button>
      <button @click="mult">*</button>
      <button @click="div(operand1,operand2)">/</button>
      <button @click="divInteger(operand1,operand2)">/~</button>
      <button @click="powNums">x'</button>
  </div>
  {{powWithOperand}} <br>
  {{powSum}}
</div>
</template>

<script>
export default {
    name:"Calculator",
    data(){
        return {
            operand1: 0,
            operand2: 0,
            sum: 0,
            lastOperation:""
        }
    },
    watch:{
        sum: function(newVal){
            //console.log(newVal, oldVal);
            this.sendData(newVal);
        }
    },
    methods:{
        mult(){
            this.sum = this.operand1 * this.operand2;
            this.lastOperation='*';
            // return oper1 * oper2;
        },
        div(oper1, oper2){
            this.sum = oper1 / oper2;
            this.lastOperation='/';
        },
        divInteger(oper1, oper2){
            this.sum = Math.floor(oper1 / oper2);
            this.lastOperation='/~';
        },
        powNums(){
            this.sum = Math.pow(this.operand1, this.operand2);
            this.lastOperation="x'";
        },
        sendData(data){
            console.log("Send data",data);
        }
    },
    computed:{
        powWithOperand(){
            return  Math.pow(this.operand1, this.operand2);
        },
        powSum(){
            return  Math.pow(this.sum, 4);
        },

    }
}
</script>

<style>

</style>