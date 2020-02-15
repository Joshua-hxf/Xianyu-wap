<template>
  <div id="app">
    <xyheader></xyheader>
    <router-view/>
  </div>
</template>

<script>
import Xyheader from '@/common/header/xyheader'

export default {
  components: {
    Xyheader
  },
  name: 'App'
}
</script>
<style>

</style>
