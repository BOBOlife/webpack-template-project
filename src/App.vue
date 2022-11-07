
<script lang="typescript">
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

<style scoped lang="scss">
  $border: 1px solid black; 
  .Foo {
    font-weight: bold;
    color: green;
    border: $border;
  } 
</style>