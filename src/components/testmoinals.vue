<template>
  <div>
      <v-dialog v-model="comments" max-width="500px">
          <v-card >
              <v-form>
                    <v-text-field label="enter you name"  prepend-icon="mdi-pen" :rules="inputRolls"></v-text-field>
                    <v-text-field label="rate us" type="number" prepend-icon="mdi-pen" ></v-text-field>
                     <v-textarea prepend-icon="mdi-pen" label="enter your text or message "></v-textarea>
                     <v-lable>
                       <v-btn class="primary ma-3" @click="send" :loading="send_value">add rate
                         <v-icon>mdi-send</v-icon>
                       </v-btn>
                     </v-lable>

              </v-form>
          </v-card>
      </v-dialog>
    <div class="mb-4">
      <h2 class="spc text-center"><span>testmonails</span></h2>
    </div>
    <v-layout row class="ma-5">
      <v-flex md4 sm12 v-for="i in 3" :key="i">
        <v-card class="ma-5 text-center pa-5">
            <v-layout row justify-center >
          <v-img
            src="../assets/logo.svg"
            max-width="100"
            max-height="100"
            class="circle"
          ></v-img>
          </v-layout>
          <div class="ma-5">
              mohammed altigani osman
          </div>
          <div>
            <v-icon  class="primary--text" v-for=" i in 5" :key="i">mdi-star</v-icon>
          </div>
          <v-card-subtitle>
            Lorem ipsum dolor sit amet consectetur  pariatur quis sint. Ea libero nihil labore qui quo.
          </v-card-subtitle>
        </v-card>
      </v-flex>
    </v-layout>
    <div class="text-center mb-5">
    <v-btn class="primary" @click="comments = !comments" flat> add rate</v-btn>

    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            comments:false,
            send_value: false,
            inputRolls:
             [(v) => v.length >= 3 || "this is less than wonted"],
        
        }
    },
    methods:{
      send(){
        this.send_value = true;
        setTimeout(() => {
          this.send_value =false
        }, 2000);
        console.log(this.$router);
        console.log(this.$store);
      }
    }
};
</script>

<style></style>
