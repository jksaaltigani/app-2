<template>
  <div class="section__content">
    <div class="container">
      <div class="row row--center">
        <div class="col-lg-6 col-md-8 u-s-m-b-30">
          <div class="l-f-o">
            <div class="l-f-o__pad-box">
              <h1 class="gl-h1">I'M NEW CUSTOMER</h1>
              <span class="gl-text u-s-m-b-30"
                >By creating an account with our store, you will be able to move
                through the checkout process faster, store shipping addresses,
                view and track your orders in your account and more.</span
              >
              <div class="u-s-m-b-15">
                <a
                  class="l-f-o__create-link btn--e-transparent-brand-b-2"
                  href="/signup"
                  >CREATE AN ACCOUNT</a
                >
              </div>

              <div class="u-s-m-b-30">
                <label class="gl-label" for="login-email">E-MAIL *</label>

                <input
                  class="input-text input-text--primary-style"
                  type="text"
                  id="login-email"
                  placeholder="Enter E-mail"
                  v-model="email"
                />
                <small
                  v-if="erroremail != ''"
                  class="text--danger text--red"
                  color="red"
                >
                  {{ erroremail }}
                </small>
              </div>
              <div class="u-s-m-b-30">
                <label class="gl-label" for="login-password">PASSWORD *</label>

                <input
                  class="input-text input-text--primary-style"
                  type="text"
                  id="login-password"
                  placeholder="Enter Password"
                  v-model="password"
                />
                <small v-if="errorPass" color="red"> {{ errorPass }} </small>
              </div>
              <div class="gl-inline">
                <div class="u-s-m-b-30">
                  <v-btn
                    class="btn btn--e-transparent-brand-b-2"
                    @click="SubmitForm()"
                    :loading="SubmitLoading"
                  >
                    LOGIN
                  </v-btn>
                </div>
                <div class="u-s-m-b-30">
                  <a class="gl-link" href="lost-password.html"
                    >Lost Your Password?</a
                  >
                </div>
              </div>
              <div class="u-s-m-b-30">
                <!--====== Check Box ======-->
                <div class="check-box">
                  <input type="checkbox" id="remember-me" />
                  <div class="check-box__state check-box__state--primary">
                    <label class="check-box__label" for="remember-me"
                      >Remember Me</label
                    >
                  </div>
                </div>
                <!--====== End - Check Box ======-->
              </div>
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
  name: "loginComponenet",
  mounted() {
    if (this.$root.UserAuth !== {}) {
      this.$router.push("/articals");
    }
  },
  data() {
    return {
      email: "",
      password: "",
      erroremail: "",
      errorPass: "",
      SubmitLoading: false,
    };
  },

  methods: {
    SubmitForm() {
      this.erroremail = "";
      this.errorPass = "";
      this.SubmitLoading = true;
      if (this.email == "" || this.password == "") {
        if (this.email == "") {
          this.erroremail = "some thing went worng in email";
        }
        if (this.password == "") {
          this.errorPass = "password can be null";
        }
        this.SubmitLoading = false;
      } else {
        axios
          .post("http://localhost:8000/api/auth/login", {
            email: this.email,
            password: this.password,
          })
          .then((re) => {
            console.log(re);
            localStorage.setItem("userAuth", JSON.stringify(re.data));
            this.$root.UserAtuh = re.data;
          })
          .catch((err) => {
            console.log(err.response);
            this.SubmitLoading = false;
          });
      }
    },
  },
};
</script>
