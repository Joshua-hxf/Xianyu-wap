<template>
  <div id="app">
    <xyheader></xyheader>
    <router-view/>
  </div>
</template>

<script>
import Xyheader from '@/common/xyheader'

export default {
  components: {
    Xyheader
  },
  name: 'App'
}
</script>
<style>
body {
  margin: 0
}
</style>
