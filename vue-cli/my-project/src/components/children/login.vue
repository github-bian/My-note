<template>
  <div>
    <div class="home text-center">{{login}}</div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        login: 'loginvue'
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
