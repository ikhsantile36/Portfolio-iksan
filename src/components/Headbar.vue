<template>
  <header className="bg-black text-white p-4 shadow-md sticky top-0 z-10">
    <div className="container mx-auto flex justify-between items-center px-5">
      <h1 className="text-xl font-bold">PORTFOLIO WEB</h1>
      <nav className="mr-5">
        <ul className="flex space-x-4">
          <li><router-link to="/" class="hover:text-green-600 font-semibold">Home</router-link></li>
          <li><router-link to="/#about" class="hover:text-green-600 font-semibold">About</router-link></li>
          <li><router-link to="/#projects" class="hover:text-green-600 font-semibold">Projects</router-link></li>
          <li><router-link to="/#contact" class="hover:text-green-600 font-semibold">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Headbar',
}
</script>