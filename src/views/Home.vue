<template>
  <div class="home">
    <div class="row">
      <span class='col-md-3'></span>
      <span class='col-md-6 col-sm-12 col-xs-12'>
      <social-user
          name="Joji Iizuka"
          description="1995/07/10 社会人2年目"
          :list="socialDataList"
        ></social-user>
      </span>

      <span class='col-md-6 col-sm-12 col-xs-12'>
        <va-chart  :chart-config='langChartConfig'/>
      </span>
      <span class='col-md-6 col-sm-12 col-xs-12'>
        <va-chart :chart-config='frameWorkChartConfig'/>
      </span>
    </div>
  </div>
</template>

<script>
import VAChart from 'va/components/VAChart.vue';
import SocialUser from '@/components/SocialUser.vue';
import ProfileImage from '@/assets/logo.png';

export default {
  name: 'Home',
  components: {
    'va-chart': VAChart,
    'social-user': SocialUser,
  },
  data() {
    return {
      loaded: false,
      profileImage: ProfileImage,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        },
        legend: {
          labels: {
            display: false
          }
        },
        tooltips: {
          callbacks: {
            label(tooltipItem) {
              return tooltipItem.yLabel + 'ヶ月';
            }
          }
        },
      },
      langChartConfig: {
        type: 'bar',
        data: {
          labels: ['PHP', 'JavaScript', 'Java', 'C#', 'Swift', 'Python','Ruby', 'Go'],
          datasets: [{
            label: '経験月数',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [24, 24, 9, 6, 4, 3, 2, 1]
          }]
        }
      },
      frameWorkChartConfig: {
        type: 'bar',
        data: {
          labels: ['Laravel', 'CakePHP', 'Vue', 'Spring', 'Ruby on Rails', 'Flask'],
          datasets: [{
            label: '経験月数',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [12, 6, 6, 3, 2, 1]
          }]
        }
      },
      socialDataList: [
        {
          icon: 'fa-github',
          name: 'GitHubアカウント',
          href: 'https://github.com/george0710'
        },
        {
          icon: 'fa-twitter',
          name: '作成中',
          href: ''
        },
        {
          icon: 'fa-instagram',
          name: '作成中',
          href: ''
        },
        {
          icon: 'fa-facebook',
          name: '作成中',
          href: ''
        },
      ]
    };
  },
  created() {
    this.frameWorkChartConfig['options'] = this.options;
    this.langChartConfig['options'] = this.options;
  }
};
</script>

<style lang="scss">
.bg-yellow {
  background-color: #12a9f4 !important;
}
</style>
