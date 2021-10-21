<template>
  <div>
    <v-card :loading="loading" class="mx-auto my-12" max-width="700px">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-card-title>{{ artical.title }}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-1">jksa altigani osman</div>
        </v-row>

        <div class="my-4 text-subtitle-1">{{ artical.descr }}</div>

        <div>
          {{ artical.content }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="primary accent-4 white--text"
          column
        >
          <v-chip v-for="s_hint in hint" :key="s_hint">{{ s_hint }} </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <!-- <v-layout row warp>
          <v-felx sm6>
            <v-btn color="deep-purple lighten-2" text>
              <v-icon>mdi mdi-thumb-up</v-icon></v-btn
            >
            <v-btn color="deep-purple lighten-2" text>
              <v-icon>mdi mdi-thumb-down</v-icon></v-btn
            >
          </v-felx>
          <v-felx sm6 class="text-right">
            1000 <v-icon>mdi-eye</v-icon>
          </v-felx>
        </v-layout> -->
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ["artical"],
  data() {
    return {
      loading: false,
      hint: [],
    };
  },
  mounted() {
    this.hint = this.artical.hint_word.split(" ");
  },
};
</script>