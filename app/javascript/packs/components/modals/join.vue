<template>
<div>
    <div class="modal center" id="joinmodal">
        <br/><br/>
        <h4>회원가입</h4>
        <div class="modal-header"></div>
      <div class="row margin">
        <div class="input-field col s12">
          <i class="material-icons prefix">account_circle</i>
          <input id="username" v-model="user.username" type="text"/>
          <label for="username">이름</label>
        </div>
      </div>

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

      <div class="row margin">
        <div class="input-field col s12">
          <i class="material-icons prefix">vpn_key</i>
          <input id="password_a" v-model="cpassword" type="password" />
          <label for="password_a">비밀번호 확인</label>
        </div>
      </div>
      <div v-if="user.password != cpassword"><p class="red-text">비밀번호가 틀립니다.</p></div>
      <div class="row margin">
        <div class="input-field col s12">
          <input id="address" v-model="user.address" type="text" />
          <label for="address">주소</label>
          <button href="#addressmodal" class="btn waves-effect waves-light col s12 modal-trigger amber">주소찾기</button>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <button v-on:click="join" class="btn waves-effect waves-light col s12">회원 등록 하기</button>
        </div>
      </div>
    </div>
    <div class="modal" id="addressmodal">
        <vue-daum-postcode @complete="jusoComplete($event)"/>
    </div>
</div>
</template>
<script>
import axios from 'axios';
  
export default{
    data:function(){
        return {
            user: {
                username:'',
                password:'',
                email:'',
                address:'',
            },
            cpassword: '',
        }
    },
    methods: {
        join:function(){
            axios.post('/api/users',{user : this.user})
            .then(res => {alert('회원가입이 완료 되었습니다!'); location.href="/"})
            .catch(err => {alert('회원가입에 실패 하였습니다!'); location.href="/"});
        },
        jusoComplete:function(e){
            this.user.address = e.postcode + ") " + e.address;
            $('.addressmodal').modal('close');
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