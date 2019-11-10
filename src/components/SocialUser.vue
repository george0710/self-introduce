<template>
  <div class="box box-widget widget-user-2">
    <div class="widget-user-header bg-blue">
      <h3>{{ name }}</h3>
      <h5>{{ description }}</h5>
    </div>
    <div class="box-footer no-padding">
      <ul class="nav nav-stacked">
        <li v-for="(item, index) in list" :key="index">
          <a v-if="item.href" :href="item.href" target="_blank">
            <i v-if="item.icon"
              class="fa text-bule"
              :class="item.icon">
            </i>
            {{ item.name }}
          </a>
          <span v-else>
            <i v-if="item.icon"
              class="fa text-bule"
              :class="item.icon">
            </i>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialUser',
  props: {
    name: {
      type: String
    },
    description: {
      type: String
    },
    profileImage: {
      type: String
    },
    list: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
// span{
//   font-size: 100px;
// }
.nav-stacked>li>span {
    border-radius: 0;
    border-top: 0;
    border-left: 3px solid transparent;
    color: #444;
    position: relative;
    display: block;
    padding: 10px 15px;
}
</style>
