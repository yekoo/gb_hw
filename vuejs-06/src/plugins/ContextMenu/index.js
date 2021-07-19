// import Vue from "vue";

export default {
    install(Vue){
        if(this.installed){
            return;
        }

        this.installed = true;
        
        Vue.prototype.$contextMenu = {
            EventBus: new Vue(),
            showContextMenu(id, htmlElem){
                this.EventBus.$emit("showContextMenu", {id, htmlElem})
            },
            hideContextMenu(){
                this.EventBus.$emit("hideContextMenu");
            }
        }
    }
}
