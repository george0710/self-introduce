<template>
  <div class="home">
    <!-- <TimeLineSearch /> -->
    <ul class="timeline">
      <template v-for="(timeLine, timeLineIndex) in timeLines">
        <li class="time-label" :key="timeLineIndex">
          <span :class="['bg-'+colors[timeLineIndex]]">
            {{ timeLine.date }}
          </span>
        </li>

        <li v-for="(timeLineItem, index) in timeLine.data" :key="index+'_'+timeLineIndex">
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

var sid = 'AKfycbzByUUk_WY0BRsav2IBlrXMYw6llMsstqjOGZS1m2MwmdQ_JD0';
var ssJsonUrl = 'https://script.google.com/macros/s/'+sid+'/exec';

export default {
  name: 'SelfIntrodude',
  components: {
    TimeLine
  },
  created() {
    var that = this;
    axios.get(ssJsonUrl)
      .then(function (response) {
        that.timeLines = response.data;
      });
  },
  data() {
    return {
      timeLines: [],
      colors: ['teal', 'purple', 'orange', 'maroon']
    };
  }
};
</script>

<style lang="scss">

</style>
