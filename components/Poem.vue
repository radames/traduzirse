<template>
  <div class="">
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
          :value="poem"
        >
          {{ poem.langs }}
        </option>
      </select>
    </div>
    <div class="poem">
      <h1>
        {{ poemTitle }}
      </h1>
      <span v-for="(row, index) in poemVerses" :key="`${row.verse}-${index}`">
        <a @click="verseClick(index)">{{ row.verse }}</a>
      </span>
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
      selectedVerse: -1
    }
  },
  computed: {
    poemVerses() {
      if (this.selectedLang) {
        return this.selectedLang.verses
      }
      return null
    },
    poemTitle() {
      if (this.selectedLang) {
        return this.selectedLang.title
      }
      return null
    }
  },
  mounted() {
    this.selectedLang = this.poemsData.find((e) => e.langs === 'Portuguese')
    this.updateSelection()
  },
  methods: {
    verseClick(index) {
      this.selectedVerse = index
      this.updateSelection()
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
  display: flex;
  justify-content: center;
}
.poem {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    text-transform: capitalize;
  }
  a:hover {
    background-color: lightgray;
    opacity: 0.5;
    cursor: pointer;
  }
}
</style>
