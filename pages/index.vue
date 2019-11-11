<template>
  <div class="container">
    <Poem :poemsData="poemsData" />
    <VideoCanvas />
  </div>
</template>

<script>
import VideoCanvas from '~/components/VideoCanvas.vue'
import Poem from '~/components/Poem.vue'
import LANGS_DATA from '~/data/languagesData.json'

export default {
  components: {
    VideoCanvas,
    Poem
  },
  data() {
    return {
      selectedLang: {}
    }
  },
  computed: {
    poemsData() {
      // first time sort alphabetical Lang names
      return LANGS_DATA.sort((a, b) => (a.langs - b.langs > 0 ? 1 : -1))
    }
  }
}
</script>

<style lang="scss"></style>
