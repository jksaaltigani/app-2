<template>
  <div class="section__content">
    <div class="container">
      <div class="row row--center">
        <div class="col-lg-6 col-md-8 u-s-m-b-30">
          <div class="l-f-o">
            <div class="l-f-o__pad-box">
              <h1 class="gl-h1">PERSONAL INFORMATION</h1>
              <div class="alert-danger">
                <small
                  class="text--danger text--red"
                  color="red"
                  v-for="err in error"
                  :key="err"
                >
                  {{ err }}
                </small>
                {{ error.lingth }}
              </div>

              <div class="u-s-m-b-30">
                <label class="gl-label" for="reg-fname"> NAME *</label>

                <input
                  class="input-text input-text--primary-style"
                  type="text"
                  id="reg-fname"
                  placeholder="First Name"
                  v-model="name"
                />
              </div>
              <div class="u-s-m-b-30">
                <label class="gl-label" for="reg-lname"> Emial *</label>

                <input
                  class="input-text input-text--primary-style"
                  type="text"
                  id="reg-lname"
                  placeholder="Last Name"
                  v-model="email"
                />
              </div>

              <div class="u-s-m-b-30">
                <label class="gl-label" for="reg-email">E-MAIL *</label>

                <input
                  class="input-text input-text--primary-style"
                  type="text"
                  id="reg-email"
                  placeholder="Enter E-mail"
                  v-model="password"
                />
              </div>
              <div class="u-s-m-b-30">
                <label class="gl-label" for="reg-password">PASSWORD *</label>

                <input
                  class="input-text input-text--primary-style"
                  type="text"
                  id="reg-password"
                  placeholder="Enter Password"
                  v-model="password"
                />
              </div>
              <div class="u-s-m-b-15">
                <v-btn
                  :loading="loadingStauts"
                  class="btn btn--e-transparent-brand-b-2"
                  type="submit"
                  @click="SubmitForm()"
                >
                  CREATE
                </v-btn>
              </div>

              <a class="gl-link" href="#">Return to Store</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====== End - Section Content ======-->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      conff_email: "",
      loadingStauts: false,
      error: {},
    };
  },
  methods: {
    SubmitForm() {
      this.loadingStauts = true;
      console.log(this.name, this.email, this.password);
      axios
        .post("http://localhost:8000/api/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("userAuth", JSON.stringify(response.data.user));
          this.$root.UserAtuh = response.data.user;
		

          this.$route.push("/login");
        })
        .catch((err) => {
          this.loadingStauts = false;
          this.error = err.response.data;
          console.log(err.response);
        });
    },
  },
};
</script>