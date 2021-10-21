
<template>
  <v-container>
    <v-card max-width="700px" class="mx-auto pa-3 px-5">
      <v-form ref="form" v-model="valid" lazy-validation class="m-3">
        <v-text-field
          v-model="title"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="descr"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <wysiwyg v-model="content" />

        <v-text-field v-model="hint" label="E-mail" required></v-text-field>

        <PictureInput
          width="600"
          height="300"
          accept="image/jpeg,image/png"
          size="10"
          button-class="mr-4 v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default success"
          :custom-strings="{
            upload: '<h1>Bummer!</h1>',
            drag: 'Drag a 😺 GIF or GTFO',
          }"
          @change="onChange"
        />
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="sendData"
        >
          Validate
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>


<script>
import Axios from "axios";
import PictureInput from "vue-picture-input";
export default {
  data: () => ({
    valid: true,
    title: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 30) || "Name must be less than 10 characters",
    ],
    descr: "",
    hint: "",
    content: "",
    img: null,
  }),

  methods: {
    onChange(img) {
      console.log("changed");
      this.img = img;
    },
    sendData() {
      const form = new FormData();
      form.append("file", this.img);
      Axios.post("http://localhost:8000/api/store_file", form)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
  components: {
    PictureInput,
  },
};
</script>