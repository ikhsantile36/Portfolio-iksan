<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 class="text-3xl font-bold mb-4 text-center text-gray-800">To-Do List</h1>
        <div class="flex mb-4">
          <input
            v-model="newTask"
            @keyup.enter="addTask"
            placeholder="Add a new task"
            class="w-full px-4 py-2 border rounded-l focus:outline-none focus:border-blue-500"
          />
          <button @click="addTask" class="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition">
            Add
          </button>
        </div>
        <ul>
          <li
            v-for="(task, index) in tasks"
            :key="index"
            class="flex items-center justify-between bg-gray-200 px-4 py-2 rounded mb-2"
          >
            <span :class="{ 'line-through text-gray-500': task.completed }" @click="toggleTask(index)">
              {{ task.text }}
            </span>
            <button @click="removeTask(index)" class="text-red-500 hover:text-red-700 transition">
              ✖
            </button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: "", // Task yang baru ditambahkan
        tasks: []    // Daftar semua task
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== "") {
          this.tasks.push({ text: this.newTask, completed: false });
          this.newTask = ""; // Kosongkan input setelah ditambahkan
        }
      },
      toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed; // Toggle status selesai
      },
      removeTask(index) {
        this.tasks.splice(index, 1); // Hapus task dari daftar
      }
    }
  };
  </script>
  
  <style scoped>
  .line-through {
    text-decoration: line-through;
    cursor: pointer;
  }
  </style>
  