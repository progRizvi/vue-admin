<template>
  <div class="row">
    <RealChart />
    <!-- /# column -->

    <div class="col-lg-6">
      <div class="card">
        <div class="card-title">
          <h4>Line Chart</h4>
        </div>
        <div class="flot-container">
          <div id="flot-line" class="flot-line"></div>
        </div>
      </div>
      <!-- /# card -->
    </div>
    <!-- /# column -->
  </div>
  <!-- /# row -->
  <div class="row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-title">
          <h4>Pie Chart</h4>
        </div>
        <div class="flot-container">
          <div id="flot-pie" class="flot-pie-container"></div>
        </div>
      </div>
      <!-- /# card -->
    </div>
    <!-- /# column -->

    <div class="col-lg-6">
      <div class="card">
        <div class="card-title">
          <h4>Line Chart</h4>
        </div>
        <div class="flot-container">
          <div id="chart1"></div>
        </div>
      </div>
      <!-- /# card -->
    </div>
    <!-- /# column -->
  </div>
  <!-- /# row -->
  <div class="row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-title">
          <h4>Bar Chart</h4>
        </div>
        <div class="flot-container">
          <div id="flotBar"></div>
        </div>
      </div>
      <!-- /# card -->
    </div>
    <!-- /# column -->

    <div class="col-lg-6">
      <div class="card">
        <div class="card-title">
          <h4>Curve Line</h4>
        </div>
        <div class="flot-container">
          <div id="flotCurve"></div>
        </div>
      </div>
      <!-- /# card -->
    </div>
    <!-- /# column -->
  </div>
</template>

<script>
import RealChart from '../../components/pages/charts/Flot/RealChart.vue'

export default { components: { RealChart } }
</script>

<style>
</style>