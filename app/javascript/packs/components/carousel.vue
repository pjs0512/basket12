<template>
  <div>
    <div id="push"></div>
    <section class="wallpaper valign-wrapper right-align">
      <div class="main_message_grid container valign-wrapper">
        <div></div>
        <div></div>
            <div class="main_message">
               <h3 class="center-align white-text">WELCOME</h3>
               <br/>
               <h4 class="center-align white-text">열두 광주리 농장에</h4>
               <h4 class="center-align white-text">어서오세요!</h4>
            </div>
      </div>
    </section>
  </div>
</template>
<script>
var c_img = 0;
$(document).ready(function(){
  for(let i = 1 ; i <5;i++){
      $('<img src="'+ "/assets/c_img"+i+".jpg" +'">').load(function() {});
  }
});
  setInterval(function (){
    c_img++;
    if(c_img >4){
      c_img = 1;
    }
      $('.wallpaper').css("background-image", "url(/assets/c_img"+c_img+".jpg)");  
},3000);
</script>