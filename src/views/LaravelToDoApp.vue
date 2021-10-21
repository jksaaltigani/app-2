<template>
  <div id="example-1">
    <div class="parent">
      <div class="child">
        <v-card>
          <v-card-title color="primary"> laravel To do App </v-card-title>
          <v-card-content class="text-center">
            <v-layout>
              <v-flex>
                <v-card flat class="pa-5 ma-5">
                  <h1 class="font">1</h1>
                  all job
                </v-card>
              </v-flex>
              <v-flex>
                <v-card flat class="pa-5 ma-5">
                  <h1 class="font primary--text">1</h1>
                  all job
                </v-card>
              </v-flex>
              <v-flex>
                <v-card flat pa-5 class="pa-5 ma-5">
                  <h1 class="font gray--text">1</h1>
                  all job
                </v-card>
              </v-flex>
            </v-layout>
            <v-card class="mx-5 px-3" flat>
              <v-text-field
                label="New Task .."
                v-model="InputFiled"
                @keypress.enter="AddItem"
              ></v-text-field>
            </v-card>
            <v-card class="pa-3">
              <!-- {{ product }} -->
              <div v-if="product.length > 0">
                <v-card v-for="produc in product" :key="produc.id">
                  <div class="listItem pa-3">
                    <div class="todo">{{ produc.name }}</div>
                    <div class="opration">
                      <span>{{ product.Created_at }}</span>
                      <v-icon>mdi-delete</v-icon>
                    </div>
                  </div>
                </v-card>
              </div>
              <div v-else class="primary--text">No Task To Do It ..</div>
              <transition name="EmaptyValue" @enter="SetForleave">
                <div v-if="EmaptyValue" class="primary white--text pa-3">
                  Cant Add empty Value
                </div>
              </transition>
              <!-- <v-btn @click="EmaptyValue = !EmaptyValue">cahneStatus</v-btn> -->
            </v-card>
          </v-card-content>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios
      .get("http://localhost:8000/api/Jksaaltigani")
      .then((res) => {
        console.log(res);
        this.product = res.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    AddItem() {
      if (this.InputFiled == "") {
        this.EmaptyValue = true;
      }
      const data = {
        name: this.InputFiled,
        price: 30,
        desc: "sadsdn",
        slug: "sjds",
      };
      axios
        .post("http://localhost:8000/api/Jksaaltigani", data)
        .then((res) => {
          this.product.push(res.data);
        })
        .catch((err) => console.log(err));
      this.InputFiled = "";
    },
    SetForleave() {
      setTimeout(() => (this.EmaptyValue = false), 2000);
    },
  },
  data() {
    return {
      InputFiled: "",
      EmaptyValue: false,
      product: [],
      show: true,
    };
  },
};
</script>

<style>
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.child {
  width: 600px;
}
.EmaptyValue-enter {
  transform: translateX(-5px);
}
.EmaptyValue-enter-to {
  transform: translateX(10px);
}
.EmaptyValue-enter-active {
  transition: all 0.1s linear;
  /* transform: translateX(50px); */
}
.EmaptyValue-leave-active {
  transition: 0.3s;
  transform: translateX(-10px);
}
.EmaptyValue-leave-to {
  transform: translateX(10px);
}
.slide-fade-enter-active {
  transition: all 1s ease;
  transform: translate(-10px);
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transform: translateX(10px);
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
  transition: all 1s ease;
}
.font {
  font-size: 100px;
}
.listItem {
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
}
</style>