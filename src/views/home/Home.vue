<template>
  <div>
    <div v-for="item in showNoteList" :key="item.id">
      <card>
        <div slot="header">
          <div class="note-title">{{ item.title }}</div>
          <div class="note-time">{{ item.time.split(' ')[0] }}</div>
        </div>
        <div class="note-text" v-html="ellipsis(item.text)" v-highlight></div>
      </card>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getShowNoteList } from '@/api/store'
import Card from '@/common/card'

export default {
  name: 'home',
  components: {
    Card
  },
  data () {
    return {
      showNoteList: []
    }
  },
  methods: {
    ellipsis (value) {
      if (value.length > 325) {
        return value.slice(0, 325) + '<span>...</span>'
      }
      return value
    },
    _getShowNoteList () {
      getShowNoteList().then((res) => {
        this.showNoteList = res.data.showNoteList
      })
    }
  },
  created () {
    this._getShowNoteList()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.note-title
  display block
  font-size 18px
  text-align center
  margin 0
.note-time
  font-size 12px
  text-align center
  margin 5px 0 0 0
  color #777
.note-text
  padding 10px 5px 0 5px
  font-size 14px
  line-height 20px
  & >>> code
    overflow hidden
    color #000
    font-weight lighter
    font-size 12px
    border-radius 3px
    padding 3px 5px
    font-family: sans-serif
    background #eee
</style>
