<template>
  <div class="col-lg-4">
    <div class="card">
      <div class="card-body">
        <div class="ct-pie-chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { PieChart } from 'chartist'

export default {
  mounted() {
    this.loadChartist().then(() => {
      this.createPieChart()
    })
  },
  methods: {
    async loadChartist() {
      // Dynamically import Chartist using import()

      window.Chartist = (await import('chartist')).default
    },
    createPieChart() {
      var data = {
        labels: ['facebook', 'twitter', 'youtube', 'google plus'],
        series: [
          {
            value: 20,
            className: 'bg-facebook'
          },
          {
            value: 10,
            className: 'bg-twitter'
          },
          {
            value: 30,
            className: 'bg-youtube'
          },
          {
            value: 40,
            className: 'bg-google-plus'
          }
        ]
        //        colors: ["#333", "#222", "#111"]
      }

      var options = {
        labelInterpolationFnc: function (value) {
          return value[0]
        }
      }

      var responsiveOptions = [
        [
          'screen and (min-width: 640px)',
          {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: 'explode',
            labelInterpolationFnc: function (value) {
              return value
            }
          }
        ],
        [
          'screen and (min-width: 1024px)',
          {
            labelOffset: 80,
            chartPadding: 20
          }
        ]
      ]

      new PieChart('.ct-pie-chart', data, options, responsiveOptions)
    }
  }
}
</script>

<style>
</style>