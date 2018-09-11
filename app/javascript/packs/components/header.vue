<template>
  <div class="navbar-fixed">
    <nav>
      <ul id="dropdown" class="dropdown-content menu_el">
            <li><router-link class="menu_el" to = "/">홈</router-link></li>
            <li><router-link class="menu_el" to = "/product">제품</router-link> </li>
            <li><router-link class="menu_el" to = "/gallery">갤러리</router-link></li>
            <li><router-link class="menu_el" to = "/comment">구매후기</router-link></li>
            <li><router-link class="menu_el" to = "/about">문의하기</router-link> </li>
            <li v-if="$session.get('is_login')" v-on:click="logout"><router-link class="menu_el"  to="#!">로그아웃</router-link> </li>
            <li v-if="!$session.get('is_login')" data-target="loginmodal" class="modal-trigger" ><router-link class="menu_el"  to="#!">로그인</router-link> </li>
            <li v-if="!$session.get('is_login')" data-target="joinmodal" class="modal-trigger" ><router-link class="menu_el" to="#!">회원가입</router-link></li>
      </ul>
      <div class="nav-wrapper container">
          <img href="/" class="logo_img brand-logo" src="/assets/12basket_logo.png"></img>
        <ul class="right hide-on-med-and-down menu_el">
            <li><router-link class="menu_el" to = "/">홈</router-link></li>
            <li><router-link class="menu_el" to = "/product">제품</router-link> </li>
            <li><router-link class="menu_el" to = "/gallery">갤러리</router-link></li>
            <li><router-link class="menu_el" to = "/comment">구매후기</router-link></li>
            <li><router-link class="menu_el" to = "/about">문의하기</router-link> </li>
            <li v-if="$session.get('is_login')" v-on:click="logout"><router-link class="menu_el"  to="#!">로그아웃</router-link> </li>
            <li v-if="!$session.get('is_login')" data-target="loginmodal" class="modal-trigger" ><router-link class="menu_el"  to="#!">로그인</router-link> </li>
            <li v-if="!$session.get('is_login')" data-target="joinmodal" class="modal-trigger" ><router-link class="menu_el" to="#!">회원가입</router-link></li>
        </ul>
        <ul class="right hide-on-large-only">
          <li>
            <a class="dropdown-button menu_el" href="#!" data-activates="dropdown">
              Menu<i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from 'axios';

export default{
  data: function(){
    is_login : false;
    user_id : '';
  },
  mounted :function(){
  },
  methods : {
    logout: function(){
      this.$session.destroy();
      alert('로그아웃 하셨습니다.');
      location.href='/'
    }
  }
}
$(window).scroll(function(){
  var top=$(window).scrollTop();
  if(top > 150){
    $("nav").addClass('navbar-scroll');
  }else{
    $("nav").removeClass('navbar-scroll');
  }
})

</script>