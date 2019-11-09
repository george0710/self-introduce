<template>
  <div class="timeline-item">
    <span class="time"><i class="fa fa-clock-o"></i> {{ item.time }}</span>
    <h3 class="timeline-header">
      {{ item.header }}
    </h3>
    <div class="timeline-body">
      {{ item.body }}
    </div>
    <div class="timeline-footer">
      <hr>
      <i class="fa fa-pencil margin-r-5"></i> 使用技術
      <p>
        <span v-for="(tag, tagIndex) in item.tags"
          class="label label-danger"
          :key="tagIndex">
          {{ tag }}
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TimeLine',
  props: {
    item:{
      type:Object,
      require:true,
      default:() => {null;}
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
