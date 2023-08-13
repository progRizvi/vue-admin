<template>
  <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
    <div :class="['nano', { 'has-scrollbar': isSidebarOpen }]">
      <div class="nano-content active" :style="{ right: isSidebarOpen ? '-14px' : '0' }">
        <ul>
          <div class="logo">
            <router-link to="index.html">
              <!-- <img src="assets/images/logo.png" alt="" /> --><span>Focus</span></router-link
            >
          </div>
          <li class="label">Main</li>
          <li :class="[isSubMenuOpen && 'open']">
            <a class="sidebar-sub-toggle" @click="toggleSubMenu">
              <i class="ti-home"></i> Dashboard <span class="badge badge-primary">2</span>
              <span
                :class="['sidebar-collapse-icon', isSubMenuOpen ? 'ti-angle-up' : 'ti-angle-down']"
              ></span>
            </a>
            <ul :class="[isSubMenuOpen ? 'd-block' : 'd-none']">
              <li>
                <router-link to="/">Dashboard 1</router-link>
              </li>
              <li>
                <router-link to="/about">Dashboard 2</router-link>
              </li>
            </ul>
          </li>

          <li class="label">Apps</li>
          <li>
            <a class="sidebar-sub-toggle"
              ><i class="ti-bar-chart-alt"></i> Charts
              <span class="sidebar-collapse-icon ti-angle-down"></span
            ></a>
            <ul>
              <li><router-link to="chart-flot.html">Flot</router-link></li>
              <li><router-link to="chart-morris.html">Morris</router-link></li>
              <li><router-link to="chartjs.html">Chartjs</router-link></li>
              <li><router-link to="chartist.html">Chartist</router-link></li>
              <li><router-link to="chart-peity.html">Peity</router-link></li>
              <li><router-link to="chart-sparkline.html">Sparkle</router-link></li>
              <li><router-link to="chart-knob.html">Knob</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/about"> <i class="ti-calendar"></i> Calender </router-link>
          </li>
          <li>
            <router-link to="app-email.html"><i class="ti-email"></i> Email</router-link>
          </li>
          <li>
            <router-link to="app-profile.html"><i class="ti-user"></i> Profile</router-link>
          </li>
          <li>
            <router-link to="app-widget-card.html"
              ><i class="ti-layout-grid2-alt"></i> Widget</router-link
            >
          </li>
          <li class="label">Features</li>
          <li>
            <a class="sidebar-sub-toggle"
              ><i class="ti-layout"></i> UI Elements
              <span class="sidebar-collapse-icon ti-angle-down"></span
            ></a>
            <ul>
              <li><router-link to="ui-typography.html">Typography</router-link></li>
              <li><router-link to="ui-alerts.html">Alerts</router-link></li>

              <li><router-link to="ui-button.html">Button</router-link></li>
              <li><router-link to="ui-dropdown.html">Dropdown</router-link></li>

              <li><router-link to="ui-list-group.html">List Group</router-link></li>

              <li><router-link to="ui-progressbar.html">Progressbar</router-link></li>
              <li><router-link to="ui-tab.html">Tab</router-link></li>
            </ul>
          </li>
          <li>
            <a class="sidebar-sub-toggle"
              ><i class="ti-panel"></i> Components
              <span class="sidebar-collapse-icon ti-angle-down"></span
            ></a>
            <ul>
              <li><router-link to="uc-calendar.html">Calendar</router-link></li>
              <li><router-link to="uc-carousel.html">Carousel</router-link></li>
              <li><router-link to="uc-weather.html">Weather</router-link></li>
              <li><router-link to="uc-datamap.html">Datamap</router-link></li>
              <li><router-link to="uc-todo-list.html">To do</router-link></li>
              <li><router-link to="uc-scrollable.html">Scrollable</router-link></li>
              <li><router-link to="uc-sweetalert.html">Sweet Alert</router-link></li>
              <li><router-link to="uc-toastr.html">Toastr</router-link></li>
              <li><router-link to="uc-range-slider-basic.html">Basic Range Slider</router-link></li>
              <li>
                <router-link to="uc-range-slider-advance.html">Advance Range Slider</router-link>
              </li>
              <li><router-link to="uc-nestable.html">Nestable</router-link></li>

              <li><router-link to="uc-rating-bar-rating.html">Bar Rating</router-link></li>
              <li><router-link to="uc-rating-jRate.html">jRate</router-link></li>
            </ul>
          </li>
          <li>
            <a class="sidebar-sub-toggle"
              ><i class="ti-layout-grid4-alt"></i> Table
              <span class="sidebar-collapse-icon ti-angle-down"></span
            ></a>
            <ul>
              <li><router-link to="table-basic.html">Basic</router-link></li>

              <li><router-link to="table-export.html">Datatable Export</router-link></li>
              <li><router-link to="table-row-select.html">Datatable Row Select</router-link></li>
              <li><router-link to="table-jsgrid.html">Editable </router-link></li>
            </ul>
          </li>
          <li>
            <a class="sidebar-sub-toggle"
              ><i class="ti-heart"></i> Icons
              <span class="sidebar-collapse-icon ti-angle-down"></span
            ></a>
            <ul>
              <li><router-link to="font-themify.html">Themify</router-link></li>
            </ul>
          </li>
          <li>
            <a class="sidebar-sub-toggle"
              ><i class="ti-map"></i> Maps <span class="sidebar-collapse-icon ti-angle-down"></span
            ></a>
            <ul>
              <li><router-link to="gmaps.html">Basic</router-link></li>
              <li><router-link to="vector-map.html">Vector Map</router-link></li>
            </ul>
          </li>
          <li class="label">Form</li>
          <li>
            <router-link to="form-basic.html"
              ><i class="ti-view-list-alt"></i> Basic Form
            </router-link>
          </li>
          <li class="label">Extra</li>
          <li>
            <a class="sidebar-sub-toggle"
              ><i class="ti-files"></i> Invoice
              <span class="sidebar-collapse-icon ti-angle-down"></span
            ></a>
            <ul>
              <li><router-link to="invoice.html">Basic</router-link></li>
              <li><router-link to="invoice-editable.html">Editable</router-link></li>
            </ul>
          </li>
          <li>
            <a class="sidebar-sub-toggle"
              ><i class="ti-target"></i> Pages
              <span class="sidebar-collapse-icon ti-angle-down"></span
            ></a>
            <ul>
              <li><router-link to="page-login.html">Login</router-link></li>
              <li><router-link to="page-register.html">Register</router-link></li>
              <li><router-link to="page-reset-password.html">Forgot password</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="../documentation/index.html"
              ><i class="ti-file"></i> Documentation</router-link
            >
          </li>
          <li>
            <a><i class="ti-close"></i> Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { mapState } from 'vuex'

export default {
  components: { RouterLink },
  name: 'SidebarComponent',
  data() {
    return {
      active: false,
      isSubMenuOpen: false
    }
  },
  computed: {
    ...mapState(['isSidebarOpen'])
  },
  methods: {
    toggleSubMenu() {
      this.isSubMenuOpen = !this.isSubMenuOpen
    }
  }
}
</script>

<style>
</style>