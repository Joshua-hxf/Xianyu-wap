<template>
  <div>
    <div v-for="item in AllNote" :key="item.id">
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
import { getAllNote } from '@/api/store'
import Card from '@/common/card'

export default {
  name: 'home',
  components: {
    Card
  },
  data () {
    return {
      AllNote: []
    }
  },
  methods: {
    ellipsis (value) {
      if (value.length > 325) {
        return value.slice(0, 325) + '<span>...</span>'
      }
      return value
    },
    _getAllNote () {
      getAllNote().then((res) => {
        this.AllNote = res.data[1]
        console.log(this.AllNote)
      })
    }
  },
  created () {
    this._getAllNote()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
