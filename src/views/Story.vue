<template>
  <div class="home">
    <TimeLineSearch @changeCheckBox="filterStatus"/>
    <vue-loading
      type="spin" color="#333"
      :size="{ width: '50px', height: '50px' }"
      v-show="!isloaded"
    />
    <ul
      class="timeline"
      v-show="isloaded"
    >
      <template
        v-for="(timeLine, timeLineIndex) in timeLines"
      >
        <li
          class="time-label"
          :key="timeLineIndex"
        >
          <span :class="['bg-'+colors[timeLineIndex]]">
            {{ timeLine.date }}
          </span>
        </li>

        <li
          v-for="(timeLineItem, index) in timeLine.data"
          :key="index+'_'+timeLineIndex"
          v-show="timeLineItem.isShow"
        >
          <i
            class="fa fa-flash"
            :class="['bg-'+colors[timeLineIndex]]"
          ></i>
          <TimeLine
            :item='timeLineItem'
           />
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import TimeLine from '@/components/TimeLine.vue';
import TimeLineSearch from '@/components/TimeLineSearch.vue';
import { VueLoading } from 'vue-loading-template';

var sid = 'AKfycbzByUUk_WY0BRsav2IBlrXMYw6llMsstqjOGZS1m2MwmdQ_JD0';
var ssJsonUrl = 'https://script.google.com/macros/s/'+sid+'/exec';

export default {
  name: 'Story',
  components: {
    TimeLine,
    TimeLineSearch,
    VueLoading
  },
  async created() {
    let _this = this;
    await axios.get(ssJsonUrl)
      .then(function (response) {
        const data = response.data.map(function(sheet){
          sheet.data = sheet.data.map(function(obj){
            obj['isShow'] = true;
            return obj;
          });
          return sheet;
        });
        _this.timeLines = data;
      });
    this.isloaded = true;
  },
  data() {
    return {
      timeLines: {},
      colors: ['teal', 'purple', 'orange', 'maroon'],
      isloaded: false,
    };
  },
  methods: {
    // private, work,
    filterStatus(showList) {
      this.timeLines = this.timeLines.map(function(category){
        category.data = category.data.map(function(obj){
          obj['isShow'] = showList.includes(obj.status);
          return obj;
        });
        return category;
      });
    }
  }
};
</script>

<style lang="scss">

</style>
