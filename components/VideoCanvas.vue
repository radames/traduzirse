<template>
  <div>
    <h1>VIDEO CANVAS</h1>
    <canvas ref="mycanvas"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pixiApp: null
    }
  },
  mounted() {
    this.pixiApp = new this.$PIXI.Application({
      view: this.$refs.mycanvas,
      antialias: true, // default: false
      transparent: true, // default: false
      resolution: 1 // default: 1)
    })
    this.pixiApp.view.style.width = '100%'
    this.pixiApp.view.style.height = 'auto'
  }
}
</script>
<style lang="scss" scoped></style>
