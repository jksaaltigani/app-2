<template>
  <div class="">
    <v-container>
      <BarndNew />
      <OurProduct />
    </v-container>
    <v-footer>
      <AppFooter />
    </v-footer>
  </div>
</template>

<script>
import OurProduct from "../components/ourProduct";
import BarndNew from "../components/brandnew";
import AppFooter from "../components/footerApp";
export default {
  data() {
    return {};
  },
  components: {
    OurProduct,
    BarndNew,
    AppFooter,
  },
};
</script>

<style>
</style>
