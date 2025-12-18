<template>
  <div class="page-container">
    <PageHeader />
  </div>
</template>

<script>
import PageHeader from '@/components/AndonSystem/SubComponents/PageHeader'

export default {
  name: 'AndonSystem',
  components: {
    PageHeader,
  },
}
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background-color: hwb(0 93% 7%);
}

</style>
