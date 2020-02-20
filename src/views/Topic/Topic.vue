<template>
  <div>
    <div v-for="item in noteList" :key="item.id" @click="toNote(item.topic, item.id)">
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
import { getNoteList } from '@/api/store'
import Card from '@/common/card'

export default {
  components: {
    Card
  },
  data () {
    return {
      noteList: [],
      localpage: ''
    }
  },
  methods: {
    toNote (topic, id) {
      this.$router.push(`/${topic}/${id}`)
    },
    ellipsis (value) {
      if (value.length > 325) {
        return value.slice(0, 325) + '<span>...</span>'
      }
      return value
    },
    _getNoteList () {
      getNoteList(this.localpage).then((res) => {
        this.noteList = res.data.noteList
      })
    }
  },

  created () {
    this.localpage = this.$route.name
    this._getNoteList()
  },
  watch: {
    $route (to) {
      this.localpage = this.$route.name
      this._getNoteList()
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~@/assets/style/note.styl'
</style>
