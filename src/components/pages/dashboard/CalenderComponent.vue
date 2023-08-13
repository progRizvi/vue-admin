<template>
  <div class="col-lg-4">
    <div class="card">
      <div class="card-body">
        <div class="year-calendar">
          <FullCalendar :options="calendarOptions" />
        </div>
      </div>
    </div>
    <!-- /# card -->
  </div>
</template>

<script>
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/vue3'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        weekends: false // initial value
      }
    }
  }
}
</script>

<style>
</style>