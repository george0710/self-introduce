<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar" style="height: auto;">
      <ul class="sidebar-menu tree" data-widget="tree">
        <li>
          <router-link to="/">
            <i class="fa fa-circle-o text-red"></i> <span>TOP</span>
          </router-link>
        </li>
        <li>
          <router-link to="/story">
            <i class="fa fa-circle-o text-yellow"></i> <span>Story</span>
          </router-link>
        </li>
        <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Contact</span></a></li>
    </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: 'MyAside',
};
</script>
