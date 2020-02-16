<template>
<div>
  <h1 class="xyword-title">{{this.page.wordtitle}}</h1>
    <div class="subcolumn" v-html='text'>{{page.time}}
        <i >&icon</i>
    {{page.viewer}}</div>
    <div class="xycontent">{{page.content}}</div>
</div>
</template>

<script type="text/ecmascript-6">

export default {
  max: 500,
  name: 'Xyword',
  props: {
    page: {}
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~@/assets/style/mixins.styl'
.xyword
  display flex
</style>
