<template>
  <div class="timeline-item">
    <span class="time"><i class="fa fa-clock-o"></i> {{ item.time }}</span>
    <h3 class="timeline-header">
      {{ item.header }}

      <a v-if="item.link" :href="item.link" target='_blank'>リンクはこちら</a>
    </h3>
    <div class="timeline-body">
      {{ item.body }}
    </div>
    <div class="timeline-footer">
      <hr>
      <i class="fa fa-pencil margin-r-5"></i> 使用技術 <br />
        <span
          v-for="(tag, tagIndex) in item.tags.split(',')"
          :key="tagIndex"
          class="tags"
        >
          <span class="label label-primary tag">
            {{ tag }}
          </span>
        </span>
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
.timeline-body {
  white-space:pre-wrap;
}

.timeline-footer {
  word-wrap: break-word;
}
.tag{
  margin: 0px 4px;
  font-size: 84% !important;
  white-space: normal !important;
}
.tags{
  margin: 2px 0px;
  line-height: 24px;
}
</style>
