<template>
    <section id="contact" class="p-14 bg-orange-500">
        <div class="container mx-auto max-w-4xl">
            <h2 class="text-3xl font-bold text-center mb-8 text-white">Contact Us</h2>
            <!-- Informasi Kontak dalam 2 Kolom -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <!-- Kolom Kiri -->
                <div>
                    <h3 class="text-xl font-semibold text-white">Name</h3>
                    <p class="text-white text-lg">Muhamad Iksan</p>
                </div>
                <div class="space-y-6">
                    <div>
                        <h3 class="text-xl font-semibold text-white">Phone</h3>
                        <p class="text-white text-lg">+62 898-9619-240</p>
                    </div>
                </div>
                <!-- Kolom Kanan -->
                <div class="space-y-6">
                    <div>
                        <h3 class="text-xl font-semibold text-white">Email</h3>
                        <p class="text-white text-lg">ikhsantile3006@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-semibold text-white">Address</h3>
                    <p class="text-white text-lg">Jl. Kyai Hasyim No.30 RT 03/003, Kel. Joglo, Kec. Kembangan, Jakarta,
                        Indonesia</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Contact",
};
</script>