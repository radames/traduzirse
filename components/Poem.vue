<template>
  <div class="">
    <h2>
      Language
    </h2>

    <select ref="langPicker" v-model="selectedLang" @input="updateSelection()">
      <option disabled value="">Select a Language</option>
      <option
        :key="`${poem.langs}-option`"
        v-for="poem in poemsData"
        :value="poem"
      >
        {{ poem.langs }}
      </option>
    </select>
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
    }
    // value: {
    //   type: Object,
    //   required: true
    // }
  },
  data() {
    return {
      selectedLang: null
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
      console.log(index)
    },
    updateSelection() {
      this.$emit('input', this.selectedLang)
    }
  }
}
</script>
<style lang="scss" scoped>
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
