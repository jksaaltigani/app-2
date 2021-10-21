<template>
  <section class="brand">
    <v-container>
    <v-layout row>
        <v-flex  sm6
        md3>
          <v-img src="../assets/img/fila.png" max-height="120" min-height="99"></v-img>
        </v-flex>
        <v-flex  sm6
        md3>
          <v-img src="../assets/img/22.png" max-height="120" min-height="99"></v-img>
        </v-flex>
        <v-flex  sm6
        md3>
          <v-img src="../assets/img/adidass2.png" max-height="120" min-height="99"></v-img>
        </v-flex>
        <v-flex  sm6
        md3>
          <v-img src="../assets/img/puma.png" max-height="120" min-height="99"></v-img>
        </v-flex >
        
       
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">

.brand{
  margin:100px 0;
  img{

    filter:grayscale(2);
}
}
</style>
