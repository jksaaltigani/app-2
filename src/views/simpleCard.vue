<template>
  <div class="mt-5 pt-5">
    <v-main class="mt-5 pt-5">
      <v-container class="mt-5 pt-5">
        <v-layout row wrap class="mt-5 pt-5">
          <v-flex lg8 md6 sm12 class="mr-1">
            <v-layout row warp width="75%">
              <v-flex
                sm12
                md6
                lg4
                class="mt-2 pa-1"
                v-for="product in products"
                :key="product.id"
              >
                <SimpleProduct
                  :product="product"
                  @addCartEv="addToCartFun(product)"
                  :IsInserted="IsInCart(product)"
                />
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex lg3 class="ml-4">
            <SimpleCardWishlistVue
              :cart="cart"
              @DeleteFromCartEv="DeleteFromCartFun($event)"
              @PayEv="PayFun()"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </div>
</template>



<script>
import SimpleProduct from "@/components/SimpleProduct";
import json_product from "@/json/product.json";
import SimpleCardWishlistVue from "../components/SimpleCardWishlist.vue";

export default {
  data() {
    return {
      products: json_product,
      cart: [],
    };
  },
  components: {
    SimpleProduct,
    SimpleCardWishlistVue,
  },
  methods: {
    addToCartFun(product) {
      this.cart.push(product);
    },
    IsInCart(product) {
      const item = this.cart.find((item) => item.id === product.id);
      if (item) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    },
    DeleteFromCartFun(cart_event) {
      this.cart = this.cart.filter((item) => item.id !== cart_event.id);
    },
    PayFun() {
      alert("shoping is completed");
      this.cart = [];
    },
  },
};
</script>



