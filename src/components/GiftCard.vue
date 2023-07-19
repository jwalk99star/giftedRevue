<template>
<!-- <router-link> -->
  <div>
    <h3>{{ gifts }}</h3> 
  </div>

<!-- </router-link> -->
</template>


<script>
// import { computed } from "vue";
import { Gift } from "../models/Gift.js";
// import { AppState } from "../AppState.js";

export default {
  props: {
    giftProp: { type: Gift, required: true }
  },
  setup(){
    return {

      // REVIEW SAYS BAD, BUT THIS IS GOOD TO TEST THE DATA DUMP!!!
      // W/ NO PROPS ABOVE, JUST DOUBLE CURLYS WITH "gifts" (the array name from AppState)
      // Also, imports needed above: computed  &  AppState

      // gifts: computed(() => AppState.gifts)
    }
  }
}
</script>


<style lang="scss" scoped></style>