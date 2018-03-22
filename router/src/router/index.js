import Vue from 'vue'
import Router from 'vue-router'
//一级目录
import home from '@/components/home'
import page01 from '@/components/page01'
import page02 from '@/components/page02'
//二级目录
import page01A from '@/components/page01/page01-A'
import page01B from '@/components/page01/page01-B'
import pageEnd from '@/components/page01/B/end'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },

    {
      path: '/page01',
      name: 'page01',
      component: page01, //一级
        children: [
            {
              path: 'page01-a',
              name: 'page01A',
              component: page01A  //二级
            },
            {
              path: 'page01-b',
              name: 'page01B',
              component: page01B, //二级
                  children: [
                  {
                    path: 'end',
                    name: 'pageEnd',
                    component: pageEnd  //三级
                  }
                ]
             }
        ]
    },
    {
      path: '/page02',
      name: 'page02',
      component: page02  //一级
    }
  ]
})
