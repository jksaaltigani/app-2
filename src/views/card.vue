<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex sm12>
        <v-card class="ma-2" flat>
          <v-img max-width="250px" src="../assets/logo.png"> </v-img>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex sm12 md12>
        <v-card class="ma-2">
          <v-card-title> name: {{ this.title }} </v-card-title>
          <v-card-subtitle> desc:{{ this.desc }} </v-card-subtitle>
          <v-card-title>
            price : <span class="primary--text"> {{ price_card + " $" }}</span>
          </v-card-title>
          {{ img_card }}
          <img :src="`${img_card}`" alt="not exist" />
          <v-card-content>
            <div class="ma-3 pa-2">
              <v-icon v-for="i in this.rate" :key="i" class="primary--text"
                >mdi-star</v-icon
              >
            </div>
            <div class="ma-3 pa-2">
              size: <input type="number" value="1" v-model="number_card" />
            </div>
            <v-btn class="primary ma-3" @click="addcard">add to card</v-btn>
          </v-card-content>
        </v-card>
      </v-flex>
    </v-layout>
    <div>
      <v-card v-if="listcard.length > 0" class="my-5">
        <v-card
          v-for="(i, index) in listcard"
          :key="index"
          :class="`todo pl-3 `"
          flat
        >
          <v-layout row warp class="pa-3">
            <v-flex xs12 md6 class="">
              <v-layout>
                <v-flex md2 class="ma-2 pa-2">
                  <v-img src="../assets/logo.png" max-height="100px"> </v-img>
                </v-flex>
                <v-flex>
                  <div class="caption grey--text">product title</div>
                  <div class="pa-2 primary--text">{{ i.title }}</div>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">number</div>
              <div class="pa-2 primary--text">{{ i.num }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">price</div>
              <div class="pa-2 primary--text">{{ i.price }}</div>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-card>
        <div class="pa-5">
          <v-layout>
            <v-flex offset-sm-8>
              <v-layout>
                <v-flex>
                  <h4 class="primary--text">totla :</h4>
                </v-flex>
                <v-flex>
                  {{ all_totle }}
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["title", "img", "price", "desc", "rate"],
  data() {
    return {
      price_card: this.price,
      title_card: this.title,
      img_card: this.img,
      number_card: 1,
      listcard: [],
    };
  },
  computed: {
    all_price() {
      return this.price_card * this.number_card;
    },
    all_totle() {
      let x = 0;
      this.listcard.forEach((element) => {
        x = x + element.price;
      });
      return x;
    },
  },
  methods: {
    addcard() {
      this.listcard.push({
        title: this.title_card,
        img: this.img,
        price: this.all_price,
        num: this.number_card,
      });
      window.list = this.listcard;
    },
  },
};
</script>
<style></style>
