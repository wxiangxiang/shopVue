import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import shopMail from '@/components/pages/shopMail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shopMail',
      component: shopMail
    }
  ]
})
