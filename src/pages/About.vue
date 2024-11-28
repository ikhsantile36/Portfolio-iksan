<template>
    <section id="about">
        <div class="flex flex-col md:flex-row items-center justify-center bg-green-500 p-20">
            <div class="md:w-5/12 w-full flex justify-center">
                <NetworkIcons />
            </div>

            <div class="md:w-7/12 w-full  md:text-left mb-8 md:mb-0 md:mr-14">
                <p class="text-xl font-semibold text-slate-100">"A Network Engineering enthusiast, passionate about
                    learning and problem-solving, seeking
                    hands-on
                    experience and growth in an
                    innovative team. Committed to continuously updating technical skills and staying abreast of the
                    latest
                    industry trends for professional
                    development. Additionally, I thrive in dynamic environments and am eager to collaborate with
                    like-minded
                    individuals to drive
                    technological advancements in the networking field."
                </p>
            </div>
        </div>
    </section>

</template>

<script>
import NetworkIcons from '../assets/icons/networkIcons.vue';

export default {
    name: 'About',
    components: {
        NetworkIcons
    }
}
</script>