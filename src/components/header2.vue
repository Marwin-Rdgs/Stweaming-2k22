<template>

  <nav>
      <!-- Menu bureau -->
      <div class="fixed flex gap-4 mb-20 m-2">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between">
                <!-- Bouton menu -->
                <div class="ipad_pro:hidden flex items-center">
                    <button @click="menuVisible = !menuVisible" class=" py-5 px-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-noir" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <!-- Menu -->
                <div class="flex space-x-4">
                    <!-- Logo -->
                    <div class="flex">
                        <RouterLink to="/"><logo class="w-4/5 hover:animate-pulse"/></RouterLink>
                    </div>
                    <!-- Menu -->
                    <div class="ipad_pro:flex items-center space-x-10 flex font-kyivtype-sans text-lg">
                        <RouterLink class="py-5 px-2 hover:underline" to="/searchfilm">Films</RouterLink>
                        <p>|</p>
                        <RouterLink class="py-5 px-2 hover:underline" to="/searchserie">Séries</RouterLink>
                        <p>|</p>
                        <RouterLink class="py-5 px-2 hover:underline" to="/searchanime">Animés</RouterLink>
                        <p>|</p>
                        <RouterLink class="py-5 px-2 hover:underline" to="/searchdessin">Dessins Animés</RouterLink>
                    </div>
                </div>


                
            </div>
        </div>
      </div>
      <!-- Menu mobile -->
      <div class="border-b-8 ipad_pro:hidden h-full" :class="{hidden: menuVisible}">
          <div class="flex justify-center">
              <div>
                <RouterLink class="block py-2 px-4" to="/searchfilm" @click="menuVisible = !menuVisible">Films</RouterLink>
                <RouterLink class="block py-2 px-4" to="/searchserie" @click="menuVisible = !menuVisible">Séries</RouterLink>
                <RouterLink class="block py-2 px-4" to="/searchanime" @click="menuVisible = !menuVisible">Animés</RouterLink>
                <RouterLink class="block py-2 px-4" to="/searchdessin" @click="menuVisible = !menuVisible">Dessins Animés</RouterLink>
             </div>
        </div>
      </div>
  </nav>

</template>

<script>
import logo from "./icones/logo.vue"

import { RouterLink, RouterView } from "vue-router";

export default {
  components:{ logo},
};
</script>

<script setup>
import {ref} from 'vue';
const menuVisible = ref(true);
</script>