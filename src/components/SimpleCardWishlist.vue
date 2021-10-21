<template>
  <v-card width="100%" class="pb-0">
    <v-layout>
      <v-flex sm6>
        <div class="text-center dispaly-3">
          <h2>
            <v-icon class="m2" color="primary" large>mdi-cart-minus</v-icon>
          </h2>
          <span color="primary">salies</span>
        </div>
      </v-flex>
      <v-flex sm6>
        <div class="text-center dispaly-3">
          <h2><v-icon large>mdi-heart</v-icon></h2>
          whish list
        </div>
      </v-flex>
    </v-layout>
    <ul>
      <li>
        <!-- //s_cart ### single cart -->
        <v-card v-for="s_cart in cart" :key="s_cart.id" flat>
          <div class="listItem pa-3">
            <div class="todo">{{ s_cart.title }}</div>
            <div class="opration">
              <span class="mx-2">{{ s_cart.price + " $" }}</span>
              <v-icon
                color="primary"
                @click="DeleteFromCart(s_cart)"
                class="m-2"
                >mdi-delete</v-icon
              >
            </div>
          </div>
        </v-card>
      </li>
      <v-card-subtitle class="p-2" v-if="cart.length > 0">
        <v-layout row wrap class="p-2">
          <v-flex sm4>
            <v-btn color="primary" @click="pay()">
              <v-icon small>mdi-cart-arrow-right</v-icon>
              <span class="ml-2">pay now</span></v-btn
            >
          </v-flex>
          <v-flex sm6 class="text-right ml-3">
            <h3 class="">{{ totol + "$" }}</h3>
          </v-flex>
        </v-layout>
      </v-card-subtitle>
    </ul>
  </v-card>
</template>
<script>
export default {
  props: ["cart"],
  data() {
    return {};
  },
  computed: {
    totol() {
      return this.cart.reduce(
        (acc, item) => (acc = acc + Number(item.price)),
        0
      );
    },
  },
  methods: {
    DeleteFromCart(cart_event) {
      this.$emit("DeleteFromCartEv", cart_event);
      console.log("emit was done");
    },
    pay() {
      this.$emit("PayEv");
      console.log("pay was done");
    },
  },
};
</script>