import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Index from '../components/pages/index.vue'
import Gallery from '../components/pages/gallery.vue'
import Product from '../components/pages/product.vue'
import Comment from '../components/pages/comment.vue'
import About from '../components/pages/about.vue'
import VueSession from 'vue-session'

Vue.use(VueRouter);
Vue.use(VueSession);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/gallery', component: Gallery },
    { path: '/product', component: Product },
    { path: '/comment', component: Comment },
    { path: '/about', component: About },
  ],
})