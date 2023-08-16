<template>
  <li class="label" v-if="isLabel">{{ title }}</li>
  <li :class="[isOpen && 'open']" v-if="!isLabel">
    <router-link
      v-if="hasChildren"
      :class="[hasChildren && 'sidebar-sub-toggle']"
      :to="{ path: route }"
      :currentRoute="route.path"
      @click="toggleSubMenu"
    >
      <i :class="iconClass"></i> {{ title }}
      <span :class="['sidebar-collapse-icon', isOpen ? 'ti-angle-up' : 'ti-angle-down']"></span>
    </router-link>
    <router-link v-else :to="route" class="sidebar-sub-toggle">
      <i :class="iconClass"></i> {{ title }}
    </router-link>
    <ul :class="[isOpen ? 'd-block' : 'd-none']">
      <sidebar-menu-item v-for="item in items" :key="item.title" :item="item"></sidebar-menu-item>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['item'],
  computed: {
    title() {
      return this.item.title
    },
    iconClass() {
      return this.item.iconClass
    },
    hasChildren() {
      return this.items.length > 0
    },
    items() {
      return this.item.children || []
    },
    route() {
      return this.item.route || '#' // Default to '#' if no route is provided
    },
    isLabel() {
      return this.item.isLabel || false
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleSubMenu() {
      this.isOpen = !this.isOpen
    }
  },
  components: {
    SidebarMenuItem: this // This makes the component recursive
  }
}
</script>


<style>
</style>