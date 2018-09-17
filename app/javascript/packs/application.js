import Vue from 'vue/dist/vue.esm.js'
import Carousel from './components/carousel.vue';
import Header from './components/header.vue'
import Router from './router/router'
import VueDaumPostcode from 'vue-daum-postcode';
import JoinModal from  './components/modals/join.vue';
import LoginModal from './components/modals/login.vue';
import EditModal from './components/modals/edit.vue';
import Footers from './components/footers.vue';
Vue.use(VueDaumPostcode)

var app = new Vue({
    router: Router,
    el : '#app',
    components:{
        'navbar' : Header,
        'carousel' : Carousel,
        'loginmodal' : LoginModal,
        'joinmodal' : JoinModal,
        'editmodal' : EditModal,
        'footers' : Footers
    },
});
