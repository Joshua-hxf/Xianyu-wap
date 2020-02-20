<template>
<div>
    <div class="headerlink">
      <!-- 咸鱼图标 -->
      <img class="headerimg" src="https://www.feizhouxianyu.cn/img/logo.82f65e68.png"/>
      <!-- 首页链接 -->
      <router-link
        class="headerrouter"
        :class="{'location': page.path === clickway}"
        tag="div"
        v-for="page of view"
        :key="page.id"
        :to="page.path"
      >
        {{page.name}}
      </router-link>
    </div>
  <transition name="slide-down">
  <div class="headerlinkmin" v-show="!overlow">
    <!-- 公共  -->
    <router-link
      class="headerroutermin"
      :class="{'location': page.path === clickway}"
      v-for="page of view"
      :key="page.id"
      :to="page.path"
    >
      {{page.name}}
    </router-link>
  </div>
  </transition>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      overlow: true,
      clickway: '',
      view: [{
        id: '01',
        name: 'Home',
        path: '/'
      }, {
        id: '02',
        name: 'Vue',
        path: '/vue'
      }, {
        id: '03',
        name: 'Node',
        path: '/node'
      }, {
        id: '04',
        name: 'Other',
        path: '/other'
      },
      {
        id: '05',
        name: 'Timeline',
        path: '/timeline'
      }]
    }
  },
  mounted () {
    setTimeout(() => {
      if (this.$route.params.topic && this.$route.params.id) {
        this.clickway = `/${this.$route.params.topic}`
      } else {
        this.clickway = this.$route.path
      }
    }, 50)
    window.addEventListener('scroll', this.handlescroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handlescroll)
  },
  methods: {
    handlescroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 30) {
        this.overlow = false
      } else {
        this.overlow = true
      }
    }
  },
  watch: {
    $route (to) {
      console.log(to)
      if (to.params.topic && to.params.id) {
        this.clickway = `/${to.params.topic}`
      } else {
        this.clickway = to.path
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.headerlink
  position relative
  overflow hidden
  padding-right 15px
  display flex
  justify-content space-between
  left 0
  top 0
  line-height 50px
  text-align center
  background rgb(238, 238, 238)
  font-size 12px
  .headerimg
    width 50px
  .headerrouter
    color rgb(144, 147, 153)
    width 15%
    &:active
      color black
  .location
    color black
    background-color rgb(190, 190, 190)
    border-bottom-style solid
    border-bottom-width 2px
    border-bottomcolor rgb(153, 153, 153)
.headerlinkmin
  z-index 2
  position fixed
  overflow hidden
  display flex
  justify-content center
  left 0
  right 0
  top 0
  height 20px
  font-size 12px
  text-align center
  color black
  background rgb(238, 238, 238)
  .headerroutermin
    width 15%
    color rgb(144, 147, 153)
  .location
    color black
    background-color rgb(190, 190, 190)
    border-bottom-width 2px
    border-bottom-style solid
    border-bottomcolor rgb(153, 153, 153)

.slide-down-enter, .slide-down-leave-to
  transform translate3d(0, -100%, 0)
.slide-down-enter-to, .slide-down-leave
  transform translate3d(0, 0, 0)
.slide-down-enter-active, .slide-down-leave-active
  transition all .2s linear
</style>
