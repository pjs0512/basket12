<template>
    <div>
        <div class="pagewallpaper valign-wrapper border-g">
            <div class="center">
                <h1 class="title_font">갤러리</h1>
            </div>
        </div>
        <br/><br/>
        <div class="container">
        <galleryuploader></galleryuploader>
            <h1>
                안녕
            </h1>
        </div>
    </div>
</template>
<script>
import GalleryUploader from '../galleryuploader.vue'
export default{
    components :{
      galleryuploader : GalleryUploader,
    },
    methods : {
    },
}
</script>
<style>
.center {
    width : 100%;
}
.border-g{
     border-color :  #9DC8C8;
}
</style>