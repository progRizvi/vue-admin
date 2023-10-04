<template>
  <div class="row">
    <!-- column -->
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Product line Chart</h4>
          <ul class="list-inline text-right">
            <li>
              <h5><i class="fa fa-circle m-r-5 text-inverse"></i>iPhone</h5>
            </li>
            <li>
              <h5><i class="fa fa-circle m-r-5 text-info"></i>iPad</h5>
            </li>
            <li>
              <h5><i class="fa fa-circle m-r-5 text-success"></i>iPod</h5>
            </li>
          </ul>
          <div id="morris-area-chart"></div>
        </div>
      </div>
    </div>
    <!-- column -->
    <!-- column -->
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Site visit Chart</h4>
          <ul class="list-inline text-right">
            <li>
              <h5><i class="fa fa-circle m-r-5 text-info"></i>Site A View</h5>
            </li>
            <li>
              <h5><i class="fa fa-circle m-r-5 text-inverse"></i>Site B View</h5>
            </li>
          </ul>
          <div id="morris-area-chart2"></div>
        </div>
      </div>
    </div>
    <!-- column -->
    <!-- column -->
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Line Chart</h4>
          <div id="morris-line-chart"></div>
        </div>
      </div>
    </div>
    <!-- column -->
    <!-- column -->
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Donut Chart</h4>
          <div id="morris-donut-chart"></div>
        </div>
      </div>
    </div>
    <!-- column -->
    <!-- column -->
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Bar Chart</h4>
          <div id="morris-bar-chart"></div>
        </div>
      </div>
    </div>
    <!-- column -->
    <!-- column -->
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Extra Area Chart</h4>
          <ul class="list-inline text-center m-t-40">
            <li>
              <h5><i class="fa fa-circle m-r-5 text-info"></i>Site A</h5>
            </li>
            <li>
              <h5><i class="fa fa-circle m-r-5 text-inverse"></i>Site B</h5>
            </li>
            <li>
              <h5><i class="fa fa-circle m-r-5 text-success"></i>Site C</h5>
            </li>
          </ul>
          <div id="extra-area-chart"></div>
        </div>
      </div>
    </div>
    <!-- column -->
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>