<template>
  <div>
      <v-container>
            <div><Contact/> </div>
            <div><Testmoinals /></div>
     </v-container>
  <v-footer width="100%">
          <FooterApp />
    </v-footer>
  

    
  </div>
</template>

<script>
import Contact from '@/components/contact.vue'
import Testmoinals from '@/components/testmoinals.vue'
import FooterApp from '@/components/footerApp.vue'
export default {
components:{
    Contact,
    FooterApp,
     Testmoinals,
 

}
}
</script>

<style>

</style>