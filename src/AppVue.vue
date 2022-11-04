
<script>
export default {
  data () {
    return {
      message: "Hello Vuejs"
    }
  }  
}
</script>

<template>
  <div class="Foo">
    {{ message }}
  </div>
</template>

<style scoped>
  .Foo {
    font-weight: bold;
    color: green;
  } 
</style>