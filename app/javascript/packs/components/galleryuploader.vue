<template>
<div class="galleryuploader_div">
    <div class="upload_grid">
        <picture-input
                    ref='pictureInput' 
                    width='200' 
                    height='200' 
                    margin='16' 
                    accept='image/*' 
                    size='10'
                    set :crop="false"
                    button-class='btn'
                    :custom-strings="{
                      upload: '<h1>Bummer!</h1>',
                      drag: '<p>😺이미지를 넣거나 클릭!😺</p>'
                    }"
                    @change='onChange'>
        </picture-input>
        <div class="margin valign-wrapper">
            <div class="center">
                <div class="input-field col s12">
                    <i class="material-icons prefix">title</i>
                    <input id="title" v-model="image.title" type="text" style="cursor: auto;"/>
                    <label for="title">타이틀을 넣어주세요!</label>
                </div>
                <br/><br/><br/>
                <button v-if="(image.title && image.data)" class="btn amber" @click="galleryPost">업로드하기<i class="material-icons right">send</i></button>
            </div>
        </div>
    </div>
</div>    
</template>
<script>
import PictureInput from 'vue-picture-input';
import axios from 'axios';

export default{
  data : function(){
      return{
          image :{
                title : '',
                data : '',
          },
          
      }
  },
  components : {
      'picture-input' : PictureInput,
  },
  methods : {
   onChange : function(data){
      if (data) {
        console.log('Picture loaded.')
        this.image.data = data
        console.log(this.image.data)
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    galleryPost : function(){
        console.log(this.image.data);
        axios.post('/api/images',{image : this.image})
        .then(res => {alert('이미지 업로드 완료!'); location.reload()})
        .catch(err => {console.log(err)});
    }
  }
}
</script>
<style>
p {
  font-size : 12px;
}
.galleryuploader_div{
    width : 100%;
    height : 250px;
}
.upload_grid{
    display : grid;
}
</style>