 <template>
  <v-app id="hottel-app" class="grey lighten-2">
    <!-- <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->

    <v-app-bar app color="transparent" hide-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><h1>life <span class="primary--text">style</span></h1></v-toolbar-title
      >
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      drak
      id="drawer"
      class="white--text primary"
    >
      <v-list>
        <v-list-item
          v-for="i in links"
          :key="i.name"
          router
          :to="i.route"
          class="white--text"
        >
          <v-list-item-title class="white--text">
            <v-icon class="white--text">{{ i.icon }}</v-icon>
            <span class="mx-5 white--text"> {{ i.name }}</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import axios from "axios";
export default {
  data: () => {
    return {
      drawer: null,
      product: [],
      links: [
        { name: "home", route: "/", icon: "mdi-home" },
        { name: "spark", route: "/spark", icon: "mdi-dashbord" },
        { name: "our product", route: "/product", icon: "mdi-pen" },
        { name: "cotanct us", route: "/contant", icon: "mdi-gmail" },
        { name: "card", route: "/card", icon: "mdi-card" },
        { name: "FAQ", route: "/fag", icon: "mdi-help" },
      ],
    };
  },
};
</script>
<style scoped>
#drawer {
  color: #fff;
}
</style>
