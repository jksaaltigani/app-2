<template>
  <div>
    <Artical
      v-for="artical in articals.data"
      :key="artical.id"
      :artical="artical"
    />
    <div class="text-center">
      <v-pagination
        v-model="articals.page"
        :length="articals.last_page"
        @click="clickPagination"
      ></v-pagination>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import Artical from "@/components/Artical.vue";
export default {
  data() {
    return {
      articals: [],
    };
  },
  mounted() {
    this.getArticals();
  },
  methods: {
    getArticals(url = "http://localhost:8000/api/articals") {
      console.log("from methosd");
      Axios.get(url)
        .then((res) => {
          console.log(res.data);
          this.articals = res.data.data;
        })
        .catch((err) => {
          console.log(err.data);
        });
    },
    clickPagination() {
      alert("clicked");
    },
  },
  components: {
    Artical,
  },
};
</script>