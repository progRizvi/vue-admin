<template>
  <SidebarMenuItem v-for="item in menuItems" :key="item.title" :item="item"></SidebarMenuItem>
</template>

<script>
import SidebarMenuItem from './SidebarMenuItem.vue'

export default {
  components: {
    SidebarMenuItem
  },
  data() {
    return {
      menuItems: [
        {
          title: 'Main',
          isLabel: true
        },
        {
          title: 'Dashboard',
          iconClass: 'ti-home',
          children: [
            {
              title: 'Dashboard 1',
              route: '/'
            },
            {
              title: 'Dashboard 2',
              route: '/dashboard-2'
            }
          ]
        },
        {
          title: 'Apps',
          isLabel: true
        },
        {
          title: 'Charts',
          iconClass: 'ti-bar-chart-alt',
          children: [
            {
              title: 'Flot',
              route: '/charts/flot'
            },
            {
              title: 'Morris',
              route: '/charts/morris'
            },
            {
              title: 'Chartjs',
              route: '/charts/chartjs'
            },
            {
              title: 'Sparklinejs',
              route: '/charts/sparklinejs'
            },
            {
              title: 'C3 Charts',
              route: '/charts/c3'
            },
            {
              title: 'Chartist',
              route: '/charts/chartist'
            },
            {
              title: 'Peity',
              route: '/charts/peity'
            },
            {
              title: 'Knob',
              route: '/charts/knob'
            }
          ]
        },
        {
          title: 'Calender',
          iconClass: 'ti-calendar',
          route: '/calender'
        },
        {
          title: 'Email',
          iconClass: 'ti-email',
          route: '/email'
        },
        {
          title: 'Profile',
          iconClass: 'ti-user',
          route: '/profile'
        },
        {
          title: 'Widget',
          iconClass: 'ti-layout-grid2-alt',
          route: '/widget'
        },
        {
          title: 'Features',
          isLabel: true
        },
        {
          title: 'UI Elements',
          iconClass: 'ti-layout',
          children: [
            {
              title: 'Typography',
              route: '/ui/typography'
            },
            {
              title: 'Alerts',
              route: '/ui/alerts'
            },
            {
              title: 'Buttons',
              route: '/ui/buttons'
            },
            {
              title: 'Progress Bars',
              route: '/ui/progress-bars'
            },
            {
              title: 'Tabs',
              route: '/ui/tabs'
            }
          ]
        },
        {
          title: 'Components',
          iconClass: 'ti-package',
          children: [
            {
              title: 'Calendar',
              route: '/components/calendar'
            },
            {
              title: 'Carousel',
              route: '/components/Carousel'
            },
            {
              title: 'Weather',
              route: '/components/weather'
            },
            {
              title: 'Datamap',
              route: '/components/datamap'
            },
            {
              title: 'To do',
              route: '/components/todo'
            },
            {
              title: 'Scrollable',
              route: '/components/scrollable'
            },
            {
              title: 'Sweet Alert',
              route: '/components/sweet-alert'
            },
            {
              title: 'Toastr',
              route: '/components/toastr'
            },
            {
              title: 'Basic Range Slider',
              route: '/components/basic-range-slider'
            },
            {
              title: 'Advance Range Slider',
              route: '/components/advance-range-slider'
            },
            {
              title: 'Nestable',
              route: '/components/nestable'
            },
            {
              title: 'Bar Rating',
              route: '/components/bar-rating'
            },
            {
              title: 'jRate',
              route: '/components/jRate'
            }
          ]
        },
        {
          title: 'Table',
          iconClass: 'ti-view-list-alt',
          children: [
            {
              title: 'Basic Table',
              route: '/tables/basic-table'
            },
            {
              title: 'Datatable Export',
              route: '/tables/datatable-export'
            },
            {
              title: 'Datatable Row Select',
              route: '/tables/datatable-row-select'
            },
            {
              title: 'Editable',
              route: '/tables/editable'
            }
          ]
        },
        {
          title: 'Icons',
          iconClass: 'ti-heart',
          children: [
            {
              title: 'Themify',
              route: '/icons/themify'
            }
          ]
        },
        {
          title: 'Maps',
          iconClass: 'ti-map',
          children: [
            {
              title: 'Basic',
              route: '/maps/basic'
            },
            {
              title: 'Vector Map',
              route: '/maps/vector'
            }
          ]
        },
        {
          title: 'Form',
          isLabel: true
        },
        {
          title: 'Extra',
          isLabel: true
        },
        {
          title: 'Invoice',
          iconClass: 'ti-files',
          children: [
            {
              title: 'Basic',
              route: '/extra/invoice'
            },
            {
              title: 'Editable',
              route: '/extra/invoice-editable'
            }
          ]
        },
        {
          title: 'Pages',
          iconClass: 'ti-files',
          children: [
            {
              title: 'Login',
              route: '/pages/login'
            },
            {
              title: 'Register',
              route: '/pages/register'
            },
            {
              title: 'Forgot Password',
              route: '/pages/forgot-password'
            }
          ]
        },
        {
          title: 'Documentation',
          iconClass: 'ti-book',
          route: '/documentation'
        },
        {
          title: 'Logout',
          iconClass: 'ti-power-off',
          route: '/logout'
        }
      ]
    }
  }
}
</script>

<style>
/* Add your CSS styles here */
</style>
