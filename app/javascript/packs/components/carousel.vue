<template>
  <div>
    <section class="wallpaper valign-wrapper right-align">
      <div class="main_message_grid container valign-wrapper">
        <div></div>
        <div></div>
            <div class="main_message center">
               <br/>
               <span class="white-text main_text1">WELCOME</span>
               <br/>
               <br/>
               <span class="white-text main_text2">열두 광주리 농장에</span>
               <br/>
               <span class="white-text main_text2">어서오세요!</span>
            </div>
      </div>
    </section>
  </div>
</template>
<script>
var c_img = 0;
$(document).ready(function(){
  for(let i = 1 ; i <7;i++){
      $('<img src="'+ "/assets/c_img"+i+".jpg" +'">').load(function() {});
  }
});
  setInterval(function (){
    c_img++;
    if(c_img >6){
      c_img = 1;
    }
      $('.wallpaper').css("background-image", "url(/assets/c_img"+c_img+".jpg)");  
},3000);
</script>