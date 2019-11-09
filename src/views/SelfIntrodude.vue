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

        <li v-for="(timeLineItem, index) in timeLine.items" :key="index+'_'+timeLineIndex">
          <i class="fa fa-envelope bg-blue"></i>
          <TimeLine
            :item='timeLineItem'
           />
        </li>
      </template>
    </ul>
  </div>
</template>

<script>

import TimeLine from '@/components/TimeLine.vue';

export default {
  name: 'SelfIntrodude',
  components: {
    TimeLine
  },
  data() {
    return {
      timeLines: [
        {
          date: '2019/04/01',
          items: [
            {
              time: '2019/05/01 ~ 今',
              header: '【プライベート】単語の意味をSNSアプリ開発',
              body: 'WikipediaのSNS版みたいなのを作りたくなって作り出す',
              tags: ['vue', 'dokcer', 'Firebase', 'Cloud Firestore', 'cordova'],
              status: 'private'
            },
            {
              time: '2019/09/15 ~ 今',
              header: '【業務】ニュース配信サービス開発',
              body: 'Content goes here',
              tags: ['Laravel', 'docker', 'mysql'],
              status: 'work'
            }
          ]
        },
        {
          date: '2018/04/01',
          items: [
            {
              time: '2019/05/01 ~ 今',
              header: '【プライベート】単語の意味をSNSアプリ開発',
              body: 'WikipediaのSNS版みたいなのを作りたくなって作り出す',
              tags: ['vue', 'dokcer', 'Firebase', 'Cloud Firestore', 'cordova'],
              status: 'private'
            },
            {
              time: '2019/09/01 ~ 今',
              header: '【業務】ニュース配信サービス開発',
              body: 'Content goes here',
              tags: ['Laravel', 'docker', 'mysql'],
              status: 'work'
            }
          ]
        }
      ],
      colors: ['teal', 'purple', 'orange', 'maroon']
    };
  }
};
</script>
