// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import { Button, Row, Col, Icon, Swipe, SwipeItem, Lazyload } from 'vant'

Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(Icon)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
