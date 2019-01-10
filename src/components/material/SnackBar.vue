<template>
  <v-snackbar v-model="show">
    {{message}}
    <v-btn flat color="accent" @click.native="show = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      message: ''
    }
  },
  computed: {
    snackShow(){
      this.show = this.$store.getters.getSnackShow()
    }
  },
  created: function () {
    this.$store.watch(state => state.snackMsg, () => {
      const msg = this.$store.state.snackMsg
      if (msg !== '') {
        this.show = true
        this.message = this.$store.state.snackMsg
        this.$store.commit('setSnack', '')
      }
    })
  }
}
</script>