<template>
<div class="modal center" id="loginmodal">
        <br/><br/>
        <h4>로그인</h4>
        <div class="modal-header"></div>
      <div class="row margin">
        <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input id="email" v-model="user.email" type="text" style="cursor: auto;" />
          <label for="email">이메일</label>
        </div>
      </div>
      <div class="row margin">
        <div class="input-field col s12">
          <i class="material-icons prefix">vpn_key</i>
          <input id="password" v-model="user.password" type="password" />
          <label for="password">비밀번호</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <button v-on:click="login" class="btn waves-effect waves-light col s12">로그인</button>
        </div>
      </div>
</div>
</template>
<script>
import axios from 'axios';
export default{
    data: function(){
        return {
            user : {
                email:'',
                password:''
            }
        }
    },
    methods: {
        login: function(){
            axios.post('/api/sessions',{user : this.user})
            .then(res => {
              this.$session.start();
              this.$session.set('email',this.user.email);
              this.$session.set('is_login',true);
              alert('로그인 하셨습니다.');
              
              location.href="/"
              
            })
            .catch(err => {
              alert('아이디,비밀번호를 확인해주세요')
            });
        }
    }
}
  $(document).ready(function(){
    $('.modal').modal({
    });
  });
    
</script>
<style>
</style>