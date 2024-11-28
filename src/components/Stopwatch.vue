<!-- src/components/Stopwatch.vue -->

<template>
  <div class="flex items-center justify-center min-h-screen bg-yellow-400 relative">
    <span class="text-5xl font-extrabold text-gray-800 tracking-widest absolute top-10">
      STOPWATCH
    </span>
    <div class="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
      <h1 class="text-4xl font-bold mb-6 text-gray-800">Stopwatch</h1>
      <div class="text-4xl font-mono mb-6 text-gray-800">{{ formattedTime }}</div>
      <div class="flex justify-around">
        <button @click="startStop" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          {{ running ? 'Pause' : 'Start' }}
        </button>
        <button @click="reset" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Reset
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      time: 0,            // Total waktu dalam milidetik
      interval: null,     // Interval ID
      running: false      // Status stopwatch (aktif atau tidak)
    };
  },
  computed: {
    formattedTime() {
      const minutes = String(Math.floor(this.time / 60000)).padStart(2, '0'); // Menit
      const seconds = String(Math.floor((this.time % 60000) / 1000)).padStart(2, '0'); // Detik
      const milliseconds = String(this.time % 1000).padStart(3, '0'); // Milidetik
      return `${minutes}:${seconds}:${milliseconds}`;
    }
  },
  methods: {
    startStop() {
      if (this.running) {
        clearInterval(this.interval); // Hentikan interval
      } else {
        const startTime = Date.now() - this.time; // Mulai dari waktu sebelumnya
        this.interval = setInterval(() => {
          this.time = Date.now() - startTime; // Hitung waktu berjalan
        }, 10); // Perbarui setiap 10 milidetik
      }
      this.running = !this.running;
    },
    reset() {
      clearInterval(this.interval); // Hentikan interval
      this.time = 0; // Reset waktu
      this.running = false;
    }
  }
};
</script>

<style scoped>
button {
  transition: background-color 0.3s;
}
</style>