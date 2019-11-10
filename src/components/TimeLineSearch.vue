<template>
  <div style="text-align: right;">
    <label v-for="(checkBox,index) in checkBoxList" :key="index">
      <CheckBox
        :id='checkBox.id'
        @changeChecked='changeChecked'
      />
      <span class="checkbox-label">{{ checkBox.label }}</span>
    </label>
  </div>
</template>
<script>
import CheckBox from '@/components/CheckBox.vue';
export default {
  name: 'TimeLineSearch',
  components: {
    CheckBox
  },
  data() {
    return {
      checkBoxList: [
        {
          id: 'work',
          label: '業務',
          isChecked: true
        },
        {
          id: 'private',
          label: 'プライベート',
          isChecked: true
        },
        {
          id: 'qualification',
          label: '資格',
          isChecked: true
        },
      ]
    };
  },
  methods: {
    changeChecked(obj) {
      this.checkBoxList.map(function(checkBox){
        if (obj.id === checkBox.id) checkBox.isChecked = obj.checkStatus;
      });
      const ids = this.checkBoxList.filter(checkBox => checkBox.isChecked).map(checkBox => checkBox.id);
      this.$emit('changeCheckBox', ids);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
label {
  margin-left: 8px;
}
.checkbox-label {
  position: relative;
  bottom: 10px;
  margin: 0px 4px;
}

</style>
