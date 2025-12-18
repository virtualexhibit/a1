<template>
  <div class="header">
    <h2 class="title">アンドンシステム</h2>
    <span class="datetime">{{ currentDateTime }}</span>
  </div>
</template>

<script>
  export default {
  name: 'PageHeader',
  data() {
    return {
      currentDateTime: '',
      timer: null,
    }
  },
  mounted() {
    this.updateDateTime()
    this.timer = setInterval(this.updateDateTime, 1000)
  },

  beforeUnmount() {
    clearInterval(this.timer)
  },
  methods: {
    /**
     * Updates the current date and time in 12-hour format.
     * Format: YYYY/MM/DD hh:mm:ss AM|PM
     */
    updateDateTime() {
      const now = new Date()
      const pad = (n) => String(n).padStart(2, '0')

      this.currentDateTime = `${now.getFullYear()}/${pad(
        now.getMonth() + 1
      )}/${pad(now.getDate())} ${pad(now.getHours())}:${pad(
        now.getMinutes()
      )}:${pad(now.getSeconds())}`
    },

    updateDateTimeFormat() {
      const now = new Date()

      const pad = (n) => String(n).padStart(2, '0')

      let hours = now.getHours()
      const minutes = pad(now.getMinutes())
      const seconds = pad(now.getSeconds())
      const ampm = hours >= 12 ? 'PM' : 'AM'

      hours = hours % 12
      hours = hours ? hours : 12 
      hours = pad(hours)

      this.currentDateTime = `${now.getFullYear()}/${pad(
        now.getMonth() + 1
      )}/${pad(now.getDate())} ${hours}:${minutes}:${seconds} ${ampm}`
    },

  },
}

</script>

<style scoped>
.header {
  background-color: #2f2f2f;
  color: #fff;
  padding: 0.75rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px;
}

.title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.datetime {
  font-size: 14px;
  white-space: nowrap;
}

@media (max-width: 350px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    font-size: 16px;
  }

  .datetime {
    font-size: 13px;
  }
}

</style>
