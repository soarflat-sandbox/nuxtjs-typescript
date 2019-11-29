<template>
  <div>
    <p>Name: {{ fullName }}</p>
    <p>Message: {{ message }}</p>
    <button @click="handleClick">change</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface User {
  firstName: string
  lastName: number
}

@Component
export default class UserInfo extends Vue {
  @Prop({ type: Object, required: true })
  readonly user!: User

  message: string = 'This is a message'

  get fullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }

  handleClick() {
    this.message = this.message.toUpperCase()
  }
}
</script>
