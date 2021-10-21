<template>
  <v-panel id="footer">
    <v-layout row>
      <v-flex sm12 md6 lg3 >
        <h4 class="primary--text text-uppercase ma-3">follow us</h4>
        <ul>
          <li>facebook</li>
          <li>instgram</li>
          <li>twitter</li>
          <li>whats app</li>
          <li>line</li>
          <li>youtube</li>
        </ul>
      </v-flex>
      <v-flex lg3>
        <h4 class="primary--text text-uppercase ma-3">usefull links</h4>
        <ul>
          <li>privcy</li>
          <li>policy</li>
          <li>how us</li>
          <li>eight mile</li>
          <li>FAQ</li>
        </ul>
      </v-flex>
      <v-flex sm12 md6 lg3>
        <h4 class="primary--text text-uppercase ma-3">vuetify shop</h4>
        <p class="white--text pa-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cum
          sunt repellat temporibus saepe accusantium quibusdam harum, dicta vero
          fugit aperiam! Corporis at nam repudiandae eligendi voluptates nulla,
          cupiditate est!
        </p>
      </v-flex>
      <v-flex lg3 sm12 md6>
        <h4 class="primary--text text-uppercase ma-3">download our app</h4>
        <p class="white--text pa-4">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <v-panel>
          <v-row>
            <v-flex sm12 md6>
              <v-img src="../assets/img/iosstore.png" max-height="70px"></v-img>
            </v-flex>
            <v-flex md6  sm12 class="ma-0" >
              <v-img src="../assets/img/logo.png" max-height="70px"></v-img>
            </v-flex>
          </v-row>
        </v-panel>
      </v-flex>
    </v-layout>
    <v-divider color="white" class=" mt-2"></v-divider>
    <div class="white--text text-center mt-3 ">
   copy right &copy; jksa altigani osman
    </div>
  </v-panel>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  text-transform: capitalize;
}
ul {
  text-align: center;
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    color: #fff;
    margin:7px
  }
}
#footer {
  background: #111;
  padding: 50px 40px 0;
  width: 100%;
  margin-top: 20px;
}
</style>
