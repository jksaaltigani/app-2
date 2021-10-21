
<template>
  <v-main>
    <h2 class="text-center spc"><span>our prodcut</span></h2>
    <v-container>
      <v-layout row wrap>
        <v-flex sm12 md6 lg3 v-for="post in json" :key="post" class="mt-2 pa-1">
          <v-card>
            <v-img
              max-height="250px"
              src="../assets/logo.svg"
              alt="mot found"
              class="pa-2"
            >
            </v-img>
            <v-card-title>
              {{ post.title }}
            </v-card-title>
            <v-card-subtitle>
              <div>
                {{ post.desc }}
                {{ post.star }}
              </div>
              <div class="rating">
                <v-icon color="primary" v-for="star in post.stars" :key="star"
                  >mdi-star</v-icon
                >
              </div>
            </v-card-subtitle>
            <v-card-text>
              <p>Lorem ipsum dolor sit amet deleniti nemo?</p>
              <v-btn
                class="primary"
                @click="
                  add_to_card(
                    post.title,
                    post.price,
                    post.desc,
                    post.src,
                    post.stars
                  )
                "
              >
                add to cart</v-btn
              >
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
import josn_product from "../json/product.json";

export default {
  data() {
    return {
      json: josn_product,
      loading1: true,
    };
  },
  methods: {
    add_to_card(pr1, pr2, pr3, pr4, pr5) {
      this.$router.push({
        name: "card",
        params: { title: pr1, price: pr2, desc: pr3, img: pr4, rate: pr5 },
      });
    },
  },
};
</script>

<style lang="scss">
.spc {
  margin: 10px;
  span {
    position: relative;
    text-transform: capitalize;
    &::first-letter {
      color: #f50057;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      height: 4px;
      width: 100%;
      background: #f50057;
      border-radius: 10px;
    }
  }
}
</style>
