<template>
  <header class="main-header">
    <router-link to="/">
      <a class="logo">
        <span class="logo-mini"><b>J</b></span>
        <span class="logo-lg"><b>Joji</b>iizuka</span>
      </a>
    </router-link>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
};
</script>
