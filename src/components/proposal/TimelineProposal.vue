<script setup>
  import completeTimeline from '@/assets/api/nasa_timeline.json'

  const timeline = completeTimeline.Timeline.map(event => {
    let icon
    let color
    switch (event.Component) {
      case 'Vue Front-End':
        icon = 'mdi-vuejs'
        color = 'teal'
        break
      case 'Public Webapp':
        icon = 'mdi-vuetify'
        color = 'blue'
        break
      case 'Supabase Database':
        icon = 'mdi-lightning-bolt'
        color = 'green'
        break
      case 'RFID Scanner':
        icon = 'mdi-barcode-scan'
        color = 'purple'
        break

      default:
        break
    }

    return {
      date: event['End date'],
      title: event.Task,
      icon,
      color,
    }
  })

  const test = [
    {
      date: '10/14/2022',
      title: 'Vuetify 3.0 Released',
      icon: 'vuetify',
    },
  ]
</script>

<template>
  <v-timeline align="start">
    <v-timeline-item v-for="item in timeline" :key="item.date" :dot-color="item.color" size="small">
      <v-container>
        <v-row class="justify-center">
          <v-card-title><v-icon>{{ item.icon }}</v-icon>{{ item.title }}</v-card-title>
        </v-row>
        <v-row class="justify-center">
          <v-card-subtitle>{{ item.date }}</v-card-subtitle>
        </v-row>
      </v-container>
    </v-timeline-item>
  </v-timeline>

</template>
