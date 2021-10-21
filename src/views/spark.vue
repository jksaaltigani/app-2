<template>
  <v-card class="mx-auto text-center" color="green" dark max-width="600">
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="primary"
          height="200"
          padding="5"
          smooth
           auto-draw
        >
          <template v-slot:label="item"> ${{ item.value }} </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">
        Sales Last 24h
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn block text @click="add_one">
        Go to Report
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    value: [760 , 100 , 500 ,300 ,200 , 0, 1000],
  }),
  methods:{
      add_one(){
          setInterval(() => {
         const num = Math.floor(Math.random() * 1000  )  ;
             this.value.push(num); 
          }, 1000);
      }
  }
};
</script>
