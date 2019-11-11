<template>
  <div class="">
    <div class="poem">
      <h1>
        {{ poemTitle }}
      </h1>
      <span v-for="(row, index) in poemVerses" :key="`${row.verse}-${index}`">
        <a
          @click="verseClick(index)"
          :class="selectedVerse === index ? 'selected' : ''"
          >{{ row.verse }}</a
        >
      </span>
    </div>
    <div class="menu">
      <select
        ref="langPicker"
        v-model="selectedLang"
        @input="updateSelection()"
      >
        <option disabled value="">Select a Language</option>
        <option
          :key="`${poem.langs}-option`"
          v-for="poem in poemsData"
          :value="poem.langs"
        >
          {{ poem.langs }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    poemsData: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedLang: null,
      selectedVerse: 0,
      animated: true
    }
  },
  computed: {
    selectedLangData() {
      if (this.poemsData) {
        return this.poemsData.find((e) => e.langs === this.selectedLang)
      }
      return null
    },
    poemVerses() {
      if (this.selectedLangData) {
        return this.selectedLangData.verses
      }
      return null
    },
    poemTitle() {
      if (this.selectedLangData) {
        return this.selectedLangData.title
      }
      return null
    }
  },
  mounted() {
    this.selectedLang = 'Portuguese'
    this.updateSelection()
    this.animate(true)
  },
  methods: {
    animate(enable) {
      if (enable && !this.t) {
        this.t = setInterval(() => {
          this.updateVerse()
        }, 4000)
      } else {
        clearInterval(this.t)
      }
    },
    updateVerse() {
      this.selectedVerse = (this.selectedVerse + 1) % this.poemVerses.length
      this.updateSelection()
    },
    verseClick(index) {
      this.selectedVerse = index
      this.updateSelection()
      if (this.animated) {
        this.animated = false
        this.animate(false)
      }
    },
    updateSelection() {
      this.$emit('input', {
        selectedLang: this.selectedLang,
        selectedVerse: this.selectedVerse
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.menu {
  position: fixed;
  left: 1rem;
  bottom: 1rem;
}
.poem {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  a:hover {
    background-color: lightgray;
    opacity: 0.5;
    cursor: pointer;
  }
  a.selected {
    background-color: lightgray;
  }
}
</style>
