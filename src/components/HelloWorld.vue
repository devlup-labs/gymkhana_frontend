<template>
  <h1>
    Welcome to Your Vue.js App
    {{ msg }}
    <br />
  </h1>
</template>

<script>
export default {
  name: "HelloWorld",
  props: { msg: { type: String } }
};
</script>

<style></style>
