<template>
   <v-app-bar app  :color="trans" hide-on-scroll>
      <v-app-bar-nav-icon @click="drawer"></v-app-bar-nav-icon>

      <v-toolbar-title><h1>life <span class="primary--text ">style</span></h1></v-toolbar-title>
    </v-app-bar> 
</template>

<script>
export default {
    props:["tran"],
    data(){
        return{
            draw : true,
            trans: this.tran
        }
    },
methods:{
    drawer(){
        this.$emit("draw" , this.draw );
    }
}
}
</script>

<style>

</style>