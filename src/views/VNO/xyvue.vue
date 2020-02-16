<template>
  <div>
    <div v-for="item in noteList" :key="item.id">
      <card>
        <div class="note-title">{{ item.title }}</div>
        <!-- <div class="note-time">{{ item.time.split(' ')[0] }}</div>
        <div class="note-text" v-html="ellipsis(item.text)" v-highlight></div> -->
      </card>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getNoteList } from '@/api/store'
import Card from '@/common/card'
// import { mapState, mapMutations } from 'Vuex'

export default {
  name: 'xyvue',
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
    // ...mapMutations({
    //   setInputShow: 'SET_INPUTE_SHOW',
    //   setMessageList: 'SET_MESSAGE_LIST'
    // }),
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
  // computed: {
  //   ...mapState([
  //     'inputShow'
  //   ])
  // },
  created () {
    this._getNoteList()
  },
  watch: {
    $route (to) {
      this.localpage = to.name
      this._getNoteList()
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
