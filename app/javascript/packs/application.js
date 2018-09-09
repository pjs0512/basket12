import Vue from 'vue/dist/vue.esm.js'
import Carousel from './components/carousel.vue';
import Header from './components/header.vue'
import Router from './router/router'
import VueDaumPostcode from 'vue-daum-postcode';
import JoinModal from  './components/join.vue';
import LoginModal from './components/login.vue';

Vue.use(VueDaumPostcode)

var app = new Vue({
    router: Router,
    el : '#app',
    components:{
        'navbar' : Header,
        'carousel' : Carousel,
        'test' : VueDaumPostcode,
        'joinmodal' : JoinModal,
        'loginmodal' :LoginModal,
    },
});
