<template>
  <div>
    <canvas ref="mycanvas"></canvas>
  </div>
</template>
<script>
export default {
  props: {
    poemsData: {
      type: Array,
      required: true
    },
    selectedData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      pixiApp: null,
      texture1: null,
      videoSprite1: null,
      videoElement: null
    }
  },
  watch: {
    'selectedData.selectedVerse'() {
      const selectedLang = this.selectedData.selectedLang
      const verseId = this.selectedData.selectedVerse

      if (verseId > -1) {
        const videos = selectedLang.verses[verseId].videos

        this.videoElement.src =
          videos[~~(Math.random() * videos.length)].urlLang
        this.videoElement.play()
        this.texture1 = this.$PIXI.Texture.from(this.videoElement)
        this.videoSprite1 = new this.$PIXI.Sprite(this.texture1)
        this.pixiApp.stage.addChild(this.videoSprite1)
      }
    }
  },
  mounted() {
    this.videoElement = document.createElement('video')
    this.videoElement.loop = true
    this.videoElement.crossOrigin = 'anonymous'
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
