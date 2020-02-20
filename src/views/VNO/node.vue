<template>
  <div>
    <xyheader></xyheader>
    <xycontent></xycontent>
  </div>
</template>

<script type="text/ecmascript-6">
// import axios from 'axios'
import Xyheader from '@/common/header/xyheader'
import Xycontent from './xycontent/xycontent'

export default {
  name: 'node',
  components: {
    Xyheader,
    Xycontent
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
