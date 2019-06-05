<template>
  <div>
    <div style="color: blue;">
      header
      <slot name="header"></slot>
    </div>
    <div style="color: red">
      footer
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'slotName',
    data () {
      return {
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
