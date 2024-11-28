<template>
    <section id="projects">
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <div class="container mx-auto p-6">
                <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">PROJECTS ME</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Column 1 -->
                    <router-link to="/calculator" class="block">
                        <div
                            class="bg-white p-4 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                            <img src="/src/assets/kalkulator.png" alt="Service 1"
                                class="w-full h-96 object-cover rounded mb-4">
                            <h2 class="text-xl font-semibold mb-2 text-gray-800">Calculator</h2>
                            <p class="text-gray-600">Description for the first service goes here. It’s brief but
                                informative.</p>
                        </div>
                    </router-link>

                    <!-- Column 2 -->
                    <router-link to="/to-do-list" class="block">
                        <div
                            class="bg-white p-4 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                            <img src="/src/assets/todolist.png" alt="Service 2"
                                class="w-full h-96 object-cover rounded mb-4">
                            <h2 class="text-xl font-semibold mb-2 text-gray-800">To-Do List</h2>
                            <p class="text-gray-600">Description for the second service goes here. Highlight key
                                benefits.
                            </p>
                        </div>
                    </router-link>


                    <!-- Column 3 -->
                    <router-link to="/stopwatch" class="block">

                        <div
                            class="bg-white p-4 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                            <img src="/src/assets/stopwatch.png" alt="Service 3"
                                class="w-full h-96 object-cover rounded mb-4">
                            <h2 class="text-xl font-semibold mb-2 text-gray-800">Stopwatch</h2>
                            <p class="text-gray-600">Description for the third service goes here. Make it concise and
                                engaging.</p>
                        </div>
                    </router-link>

                    <!-- Column 4 -->

                    <router-link to="/stopwatch" class="block">
                        <div>
                        </div>
                    </router-link>

                    <!-- Column 5 -->
                    <a href="https://muhabad-iksan-pages-login.vercel.app/" target="_blank" rel="noopener noreferrer"
                        class="block">
                        <div
                            class="bg-white p-4 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                            <img src="/src/assets/login-unpam.png" alt="Service 3"
                                class="w-full h-96 object-cover rounded mb-4">
                            <h2 class="text-xl font-semibold mb-2 text-gray-800">Login</h2>
                            <p class="text-gray-600">Description for the third service goes here. Make it concise and
                                engaging.</p>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Calculator from '../components/Kalkulator.vue';

export default {
    name: 'Projects',
    components: {
        Calculator
    }
}
</script>
