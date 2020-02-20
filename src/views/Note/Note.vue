<template>
  <div>
    <div class="note">
    <div class="title">{{note.title}}</div>
    <div class="time">{{note.time}}</div>
    <div class="text" v-html="note.text" v-highlight></div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getNote } from '@/api/store'

export default {
  data () {
    return {
      note: {}
    }
  },
  methods: {
    _getNote (topic, id) {
      getNote(topic, id).then((res) => {
        if (res.status === 200) {
          if (res.data.length > 0) {
            this.note = res.data[0]
          }
        }
      })
    }
  },
  created () {
    this._getNote(this.$route.params.topic, this.$route.params.id)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~@/assets/style/note.styl'

.note
  margin 10px auto
  padding 0 10px
  .title
    font-size 20px
  .time
    font-size 14px
    font-weight lighter
    margin-right 15px
    color #777
  .text
    font-size 14px
</style>
