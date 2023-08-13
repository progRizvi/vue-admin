<template>
  <div class="col-lg-8">
    <div class="card">
      <div class="card-title">
        <h4>Fee Collections and Expenses</h4>
      </div>
      <div class="card-body">
        <div class="ct-bar-chart m-t-30" id="bar-chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { BarChart } from 'chartist'

export default {
  mounted() {
    this.loadChartist().then(() => {
      this.createBarChart()
    })
  },
  methods: {
    async loadChartist() {
      // Dynamically import Chartist using import()

      window.Chartist = (await import('chartist')).default
    },
    createBarChart() {
      const data = {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        series: [
          [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
          [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
          [4, 6, 3, 9, 6, 5, 2, 8, 3, 5, 4]
        ]
      }

      const options = {
        seriesBarDistance: 15
      }

      new BarChart('#bar-chart', data, options)
    }
  }
}
</script>

<style>
</style>