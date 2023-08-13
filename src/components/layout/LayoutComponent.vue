<template>
  <div :class="['pace-done', { 'sidebar-hide': isSidebarOpen }]">
    <SidebarComponent />
    <HeaderComponent />
    <div class="content-wrap">
      <div class="main">
        <div class="container-fluid">
          <bread-component />
          <RouterView />
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import { mapState } from 'vuex'
import BreadComponent from '../partials/BreadComponent.vue'
import FooterComponent from '../partials/FooterComponent.vue'
import HeaderComponent from '../partials/HeaderComponent.vue'
import SidebarComponent from '../partials/SidebarComponent.vue'

export default {
  name: 'LayoutComponent',
  computed: {
    ...mapState(['isSidebarOpen'])
  },
  components: { SidebarComponent, HeaderComponent, FooterComponent, RouterView, BreadComponent }
}
</script>

<style>
/* Add your styles here */
</style>
