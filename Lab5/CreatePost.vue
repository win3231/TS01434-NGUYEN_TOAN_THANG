<template>
  <div class="card p-4 shadow-sm border-0 text-start bg-white rounded-3">
    <h2 class="h4 fw-bold mb-4">Tạo bài viết mới</h2>
    <div class="mb-3">
      <input v-model="title" class="form-control" placeholder="Tiêu đề bài viết" />
    </div>
    <div class="mb-3">
      <input v-model="author" class="form-control" placeholder="Tên tác giả" />
    </div>
    <div class="mb-3">
      <textarea v-model="content" class="form-control" rows="4" placeholder="Nội dung bài viết"></textarea>
    </div>
    <button class="btn btn-primary w-100 py-2 fw-bold" @click="submitPost">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const emit = defineEmits(['add-post']); // [cite: 156]

const title = ref('');
const author = ref('');
const content = ref('');

function submitPost() {
  if (title.value && author.value && content.value) { // [cite: 162]
    emit('add-post', {
      title: title.value,
      author: author.value,
      content: content.value,
      backgroundColor: '#ffffff'
    });
    // Reset fields [cite: 172-175]
    title.value = ''; author.value = ''; content.value = '';
  }
}
</script>