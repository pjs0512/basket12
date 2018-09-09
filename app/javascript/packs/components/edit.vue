<template>
    <div class="testpage">
        <h1>안녕</h1>
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
        <button v-on:click="test" >눌러방</button>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
    data(){
        return {
            contents : '',
        }
    },
    components : {
        'editor': Editor,
    },
    render :{
        
    },
    mounted() {
    },
    methods :{
        test :function(){
            console.log(this.contents);
        },
    }
}
</script>