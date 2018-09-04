<template>
  <div id="tir">
    <p>{{ message }}</p>
    <p>{{ test }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      // この文字列が画面に表示されている
      test : "느금마 올라프,",
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
