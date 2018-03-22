<template>
  <div>
    <el-menu :default-active="activeIndex2"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">


      <el-menu-item  v-for="item in links" @click="$goRoute(item.route)">{{item.text}}</el-menu-item>

    </el-menu>

  </div>

</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        links: [
          {
            text: '处理中心',
            route: '/home',
            index:1
          },
          {
            text: '消息中心',
            route: '/page01',
            index:2
          },
          {
            text: '订单管理',
            route: '/page02',
            index:3
          }
        ],
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    components: {},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .home {
    margin-top: 10%;
    font-size: 2.4em;
    font-weight: bold;
  }
</style>
