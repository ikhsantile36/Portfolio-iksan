<template>
    <div class="flex items-center justify-center min-h-screen bg-blue-300 relative">
        <span class="text-5xl font-extrabold text-gray-800 tracking-widest absolute top-10">
            CALCULATOR
        </span>
        <div class="bg-white p-6 rounded-lg shadow-lg w-80">
            <div class="text-3xl mb-4 text-right font-bold text-gray-800">
                {{ displayValue }}
            </div>
            <div class="grid grid-cols-4 gap-4">
                <!-- Tombol Angka dan Operasi -->
                <button v-for="button in buttons" :key="button" @click="handleClick(button)"
                    class="bg-gray-200 text-gray-800 p-4 rounded hover:bg-gray-300 font-bold">
                    {{ button }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayValue: '0',
            currentValue: '',
            buttons: [
                '7', '8', '9', '/',
                '4', '5', '6', '*',
                '1', '2', '3', '-',
                '0', '.', '=', '+',
                'C'  // Clear Button
            ]
        };
    },
    methods: {
        handleClick(button) {
            if (button === 'C') {
                this.currentValue = '';
                this.displayValue = '0';
            } else if (button === '=') {
                try {
                    this.displayValue = eval(this.currentValue).toString();
                    this.currentValue = this.displayValue;
                } catch {
                    this.displayValue = 'Error';
                    this.currentValue = '';
                }
            } else {
                this.currentValue += button;
                this.displayValue = this.currentValue;
            }
        }
    }
};
</script>

<style scoped>
button {
    transition: background-color 0.2s;
}
</style>
