<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <h1>Gifted ReVue</h1>
      {{ gifts }}
      <GiftCard />
    </div>
  </div>
</div>
</template>


<script>
import { computed, onMounted, onUnmounted } from 'vue';
import { logger } from '../utils/Logger.js'
import Pop from "../utils/Pop.js";
import { giftsService } from '../services/GiftsService.js'
import { AppState } from "../AppState.js";

export default {
  setup(){
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } 
      catch(error) {
        Pop.error(error, 'Getting gifts')
      }
    }
    onMounted(() => {
      logger.log('home page mounted')
      getGifts()
    });
    onUnmounted(() => {
      logger.log('home page unmounted')
    });
    return {
      gifts: computed(() => AppState.gifts)
    }
  },
  components: { }
}
</script>


<style lang="scss" scoped>

</style>

