<template>
  <div>
    <p>wheels: {{ wheels }}</p>
    <p>axles: {{ axles }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { myModule } from '~/store'

@Component
export default class UsingVuex extends Vue {
  get wheels() {
    return myModule.wheels
  }

  get axles() {
    return myModule.axles
  }
}
</script>
