<template>
  <div class="full-width center-content">
    <hello-component name="World" />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'

export default {
    components: {
      HelloComponent,
    }
}
</script>