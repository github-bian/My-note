<template>
  <div>
    <h3 class="text-center red">长白菜同样不好吃</h3>
    <ul class="text-center spacing" style="padding: 0">
      <li v-for="item in links"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {

      return {
        links: [
          {
            text: '点击向下一级end',
            route: '/page01/page01-B/end'
          },
          {
            text: '返回首页',
            route: '/home'
          }
        ]
      }
    }
  }
</script>
