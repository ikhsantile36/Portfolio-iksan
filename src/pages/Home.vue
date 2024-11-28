<template>
  <div class="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-8">
    <!-- Bagian Teks Perkenalan Diri -->
    <div class="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0 md:ml-14">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        Hello, I am <span class="text-blue-500">Muhamad Iksan</span>
      </h1>
      <p class="text-gray-600 text-lg leading-relaxed">
        I am a <span class="font-semibold">Network Engineer</span> with expertise in the field of
        <span class="font-semibold">Networking</span>. I am passionate about creating creative and efficient solutions.
      </p>
      <button
        class="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
        Download CV
      </button>
    </div>


    <!-- Bagian Foto -->
    <div class="md:w-1/2 w-full flex justify-center">
      <img src="/src/assets/iksanTile.jpg" alt="Foto Profil" class="rounded-full w-96 h-96 object-cover shadow-lg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileIntro',
}
</script>

<style scoped>
/* Tambahkan style tambahan jika diperlukan */
</style>