<!-- src/components/Footer.vue -->
<template>
    <footer class="bg-gray-800 text-white py-5">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <!-- Logo atau Teks -->
            <div class="text-lg font-semibold mb-4 md:mb-0">
                &copy; 2024 Created By Muhamad Iksan
            </div>

            <!-- Ikon Sosial Media -->
            <div class="flex space-x-6">
                <a href="https://www.instagram.com/ikhsantile36?igsh=MW9kbDl5bzFzMDNidg==" target="_blank"
                    aria-label="Instagram">
                    <i class="fab fa-instagram text-white text-2xl hover:text-green-600"></i>
                </a>
                <a href="https://wa.me/+628989619240" target="_blank" aria-label="WhatsApp">
                    <i class="fab fa-whatsapp text-white text-2xl hover:text-green-600"></i>
                </a>
                <a href="ikhsantile3006@gmail.com" aria-label="Email">
                    <i class="fas fa-envelope text-white text-2xl hover:text-green-600"></i>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>