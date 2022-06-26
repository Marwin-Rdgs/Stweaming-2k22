<template>

<div class="border-2 border-noir rounded-md group mt-10 card-zoom shadow-xl">

    <!-- IMG -->
    <div class="">
        <img src="/public/yourname.jpg" alt="" class="card-zoom-image w-full mb-1">
    </div>

    <!-- Textual -->
    <div class="ml-2">
    <h2 class="text-xl">Your Name</h2>
    <p>Biographie de la série, film, dessin animé, anime, ...</p>
    </div>

    <!-- Fav & Visionner -->
    <div class="flex justify-between mt-4 lg:mr-4 lg:ml-4 pb-8">
        <button class="border-2 border-noir p-1 rounded-2xl hover:bg-noir hover:text-blanc-b">
            Visionner
        </button>

        <button class="border-2 border-noir rounded-full py-1 px-3">
            <p class="text-lg">♡</p>
        </button>
    </div>


</div>
    
</template>

<script>
import heart from './icones/like.vue'

export default {
    components:{ heart }
};

</script>