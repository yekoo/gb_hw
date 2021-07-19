<template>
  <div class="wrapper hidden">
      <div class="popupItem" @click="onEditClick">
        Редактировать
      </div>
      <div class="popupItem" @click="onDeleteClick">
        Удалить
      </div>
  </div>
</template>

<script>
export default {
    name: "ContextMenu",
    methods:{
        onEditClick(){
            console.log("Edit this item");
        },
        onDeleteClick(){
            console.log("Delete this item");
        },
        
    }
}
</script>

<style scoped lang="scss">
    .wrapper{
        position: relative;
        border: 2px dashed orange;
        position: absolute;
        top:0;
        right:0;
        background: white;
    }
    
</style>