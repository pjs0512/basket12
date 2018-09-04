import Vue from 'vue/dist/vue.esm.js'
import Carousel from './components/carousel.vue';
import VueCarousel from 'vue-carousel';
import Header from './components/header.vue'
import Router from './router/router'

Vue.use(VueCarousel);
var app = new Vue({
    router: Router,
    el : '#app',
    components:{
        'navbar' : Header,
        'carousel' : Carousel
    }
});