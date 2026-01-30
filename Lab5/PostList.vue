<template>
  <div class="text-start">
    <h2 class="h4 fw-bold mb-4 text-dark border-bottom pb-2">Danh sách bài viết</h2>
    <div v-for="(post, index) in posts" :key="index" 
         class="p-4 mb-3 border rounded-3 bg-white"
         :class="{ 'border-success border-2 shadow-sm': post.title.length > 20 }"> <h3 class="text-success fw-bold h5 mb-1">{{ post.title }}</h3> <h5 class="text-danger small mb-3">Tác giả: {{ post.author }}</h5> <p class="text-secondary mb-0" style="line-height: 1.6;">{{ post.content }}</p>
    </div>
    
    <div v-if="posts.length === 0" class="text-muted text-center py-5">
      Chưa có bài viết nào để hiển thị.
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: { type: Array, required: true } // [cite: 218-222]
});
</script>