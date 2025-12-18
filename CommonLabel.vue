<template>
  <div class="label-container">
    <div class="text-caption text-medium-emphasis">
      {{ labelProperty.display.label }}
    </div>

    <div class="text-body-1 font-weight-medium">
      {{ labelProperty.display.text }}
    </div>
  </div>
</template>

<script>
import { LABEL_RECIPE } from './Recipes/rCommonLabel'

export default {
  name: 'CommonLabel',

  props: {
    item: { type: Object, default: () => ({}) },
  },

  computed: {
    labelProperty() {
      return {
        display: {
          ...LABEL_RECIPE.display,
          ...this.item.display,
        },
      }
    },
  },
}
</script>

<style scoped>
.label-container {
  margin-bottom: 12px;
}
</style>
