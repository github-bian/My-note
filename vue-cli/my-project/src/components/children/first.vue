<template>
  <div>
    <div class="home text-center">{{first}}</div>
  </div>
</template>

<script>
  export default {
    name: 'first',
    data () {
      return {
        first: 'firstvue'
      }
    },
    components: {}
  }
</script>

<style>
  .home {
    margin-top: 10%;
    font-size: 2.4em;
    font-weight: bold;
  }
</style>
