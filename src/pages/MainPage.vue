<template>
    <div class="flex flex-col min-h-screen">
        <Headbar />
        <main class="flex-1">
            <Home />
            <About />
            <Projects />
            <Contact />
        </main>
        <Footer />
    </div>
</template>

<script>
import Headbar from '../components/Headbar.vue';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Projects from '../pages/Projects.vue';
import Footer from '../components/Footer.vue'
import Contact from './Contact.vue';

export default {
    components: {
        Headbar,
        Footer,
        Home,
        About,
        Projects,
        Contact
    }
}
</script>