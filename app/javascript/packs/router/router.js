import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Gallery from '../components/gallery.vue'
import Product from '../components/product.vue'
import Comment from '../components/comment.vue'
import About from '../components/about.vue'
import Edit from '../components/edit.vue'
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
    { path: '/edit', component: Edit },
  ],
})