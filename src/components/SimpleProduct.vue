
<template>
  <v-card mt3>
    <img src="" alt="" height="150px" />
    <v-card-title> {{ product.title }} </v-card-title>
    <v-card-subtitle>
      <v-card-title> {{ "$" + product.price }} </v-card-title>

      <div class="rating">
        <v-icon color="primary" v-for="star in product.stars" :key="star"
          >mdi-star</v-icon
        >
      </div>
    </v-card-subtitle>
    <v-card-text>
      <p>{{ product.desc }}</p>
      <v-btn
        :disabled="IsInserted"
        @click="DoEmit(product)"
        width="100%"
        color="primary"
      >
        {{IsInserted ? 'added to cart...' : 'add to cart',}}</v-btn
      >
    </v-card-text>
  </v-card>
</template>
<script>
// import SimpleCardWishlistVue from "./SimpleCardWishlist.vue";
// import josn_product from "../json/product.json";

export default {
  name: "SimpleProduct",
  props: ["product", "IsInserted"],
  data() {
    return {
      //  json: josn_product,
      loading1: true,
      imgurl: require(this.product.src),
    };
  },
  computed: {
    imgsrc() {
      return require(this.product.src);
    },
  },
  mounted() {},
  methods: {
    DoEmit(product) {
      this.$emit("addCartEv", product);
    },
  },

  // };
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
