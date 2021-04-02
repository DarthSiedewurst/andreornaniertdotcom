<template>
  <div>
    <video controls autoplay class="fullscreen">
      <source src="@/assets/andre.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.fullscreen {
  width: 100vw;
  height: 100vh;
}
</style>
