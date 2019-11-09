<template>
  <div id="app">
    <div class="wrapper">
       <MyHeader></MyHeader>
       <MyAside></MyAside>
       <div class="content-wrapper main-content">
         <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import MyAside from '@/components/MyAside';
export default {
  name: 'app',
  components: {
    MyHeader,
    MyAside
  }
};
</script>
<style lang="scss">
.main-content {
  padding: 16px;
}
</style>
