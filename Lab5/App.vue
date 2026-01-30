<template>
  <div class="main-layout d-flex justify-content-center py-5 bg-light min-vh-100">
    
    <div class="container" style="max-width: 850px;">
      <h1 class="text-center fw-bold mb-5 text-primary">Ứng dụng Blog cá nhân</h1>

      <div class="d-flex justify-content-center mb-5">
        <div class="btn-group shadow-sm">
          <button @click="tab = 1" :class="['btn px-4', tab === 1 ? 'btn-primary' : 'btn-outline-primary']">Bài 1</button>
          <button @click="tab = 2" :class="['btn px-4', tab === 2 ? 'btn-primary' : 'btn-outline-primary']">Bài 2</button>
          <button @click="tab = 3" :class="['btn px-4', tab === 3 ? 'btn-primary' : 'btn-outline-primary']">Bài 3</button>
          <button @click="tab = 4" :class="['btn px-4', tab === 4 ? 'btn-primary' : 'btn-outline-primary']">Bài 4</button>
        </div>
      </div>

      <div class="content-area">
        <div v-if="tab === 1" class="card p-4 shadow-sm border-0"><lab5bai1 /></div>
        <div v-else-if="tab === 2" class="card p-4 shadow-sm border-0"><lab5bai2 /></div>
        <div v-else-if="tab === 3" class="card p-4 shadow-sm border-0"><lab5bai3 /></div>
        
        <div v-else-if="tab === 4">
          <div class="mb-5">
            <CreatePost @add-post="addPost" />
          </div>

          <hr class="my-5" />

          <div class="mt-4">
            <PostList :posts="posts" />
          </div>
        </div>

        <div v-else class="text-center text-muted py-5">Vui lòng chọn một bài tập.</div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import lab5bai1 from './components/lab5bai1.vue';
import lab5bai2 from './components/lab5bai2.vue';
import lab5bai3 from './components/lab5bai3.vue';
import CreatePost from './components/CreatePost.vue';
import PostList from './components/PostList.vue';

const tab = ref(4); // Mặc định hiện bài 4 để bạn kiểm tra
const posts = ref([]);

function addPost(post) {
  posts.value.unshift(post); // Thêm bài mới lên đầu danh sách [cite: 257]
}
</script>

<style>
body {
  background-color: #f0f2f5 !important;
  margin: 0;
}
/* Đảm bảo toàn bộ form và danh sách căn lề trái bên trong container đã căn giữa */
.content-area {
  text-align: left !important;
}
</style>