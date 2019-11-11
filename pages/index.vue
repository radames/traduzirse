<template>
  <div class="container">
    <Poem :poemsData="poemsData" v-model="selectedData" class="poem-col" />
    <VideoCanvas
      :poemsData="poemsData"
      :selectedData="selectedData"
      class="video-col"
    />
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
      selectedData: {}
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

<style lang="scss" scope>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  flex-wrap: wrap;

  @media screen and (min-width: 500px) {
    flex-wrap: unset;
  }
  // flex-wrap: wrap;
}
.video-col {
  widows: 100%;
  @media screen and (min-width: 700px) {
    width: 70%;
  }
}
.poem-col {
  width: 100%;
  @media screen and (min-width: 700px) {
    width: 30%;
  }
}
</style>
