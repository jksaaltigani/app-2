import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';


    // Helpers
    
    Vue.use(Vuetify, {
        theme: {
            primary: '#f50057',
           
        }
    })


export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#f50057',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
    
    
});
