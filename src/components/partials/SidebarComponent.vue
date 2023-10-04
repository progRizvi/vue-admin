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
          <SidebarMenu />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { mapState } from 'vuex'
import SidebarMenu from '../sidebar/SidebarMenu.vue'

export default {
  components: { RouterLink, SidebarMenu },
  name: 'SidebarComponent',
  data() {
    return {
      active: false
    }
  },
  computed: {
    ...mapState(['isSidebarOpen'])
  }
}
</script>

<style>
</style>