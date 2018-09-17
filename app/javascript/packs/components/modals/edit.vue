<template>
<div id="editmodal" class="modal center">
    <editor 
        api-key="b7o4mg5j28e01tvxgb3p5jhyrabqj633fd6e83t06bo9io6b" 
        v-model="contents" 
        :init="{
        selector: 'textarea',
        plugins: 'wordcount textcolor colorpicker textpattern imagetools image paste',
        toolbar : 'undo redo | bold italic | forecolor backcolor | template codesample | alignleft aligncenter alignright alignjustify | bullist numlist | link image',
        paste_data_images: true,
        content_css : 'https://www.tiny.cloud/css/content-standard.min.css',
        language_url: '/assets/ko_KR.js'}
        ">
    </editor>
</div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
    data: function(){
        return{
            src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
        }
    },
    components : {
        'editor': Editor,
    },
    methods :{
        test: function(){
            console.log(this.contents);
        }
    },
}
$(document).ready(function(){
    $('.modal').modal({});
});
</script>
<style>
    
</style>