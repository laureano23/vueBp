<template>
  <v-app>
    <SnackBar></SnackBar>
    <core-filter />

    <core-toolbar />

    <core-drawer />

    <core-view />
  </v-app>
</template>

<script>
import SnackBar from '@/components/material/SnackBar.vue'
import axios from 'axios'
export default {
  components: {
    SnackBar
  },
  created: function(){
    var me=this;
    axios.interceptors.response.use(function(resp){
      console.log(resp)
        me.$store.commit('setSnack', 'Proceso exitoso')
        return Promise.resolve(resp)
    }, function(error) {
        me.$store.commit('setSnack', 'Ocurrió un Error')
    });
  }
}
</script>


<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
