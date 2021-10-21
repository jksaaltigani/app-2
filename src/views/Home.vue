<template>
  <div class="home">
    <div class="relative">
      <v-header id="header" class="">
    
        <div class="d-flex justify-center align-center  absolute_div">
          <v-layout class="text-center pt-5 mt-5" justify-center align-center row>
            <v-flex sm12 md6>
              <div class="ma-5 pa-5 " color="#f50057">
                <div class="ma-5 pa-5">
                  <h1 class="primary--text">get your life style from here</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit hic maiores ab asperiores numquam. Molestias totam
                    tenetur explicabo optio facilis et. Tenetur architecto
                    possimus rerum iste? A quam assumenda suscipit.
                  </p>
                  <v-btn class="primary">Get Now</v-btn>
                </div>
              </div>
            </v-flex>
            <v-flex sm12 md6 class="text-center">
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="500px"
                max-width="500px"
                src="../assets/headerPc.svg"
              ></v-img>
            </v-flex>
          </v-layout>
        </div>
    
    </v-header>
    </div>
    <v-main>
     <about />
     <!-- <brand/> -->
     <comerical />

    </v-main>
    <v-footer>
      <fotterApp />
    </v-footer>
  </div>
 
  
</template>

<script>
// @ is an alias to /src
import about from '@/components/about.vue'
import fotterApp from '@/components/footerApp.vue'
// import brand from '@/components/brandnew.vue'
import comerical from '@/components/with.vue'

export default {
  name: "Home",
  data() {
    return {
      overlay: true,
    };
  },
  components: {
    about,
    fotterApp,
    // brand,
  comerical 

  },
};
</script>
<style scoped loag="scss">
* {
  text-transform: capitalize;
}
#header {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: -70px;
  padding-top: 10 0px;
  background: radial-gradient(#fff, #b9a47d);
}
.relative{
  position: relative;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  
}
.absolute_div{
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50% ,-50%);
  width:80%;
  height:90%
}
@media (max-width: 786px) {
  #header {
    height: auto;
  }
}
</style>
