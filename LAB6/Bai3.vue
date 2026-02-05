<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
        <div class="card h-100">
          <img :src="item.image" class="card-img-top img-fluid" alt="Hình ảnh bài viết" />
          <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Khởi tạo mảng dữ liệu dựa trên nội dung Lab 6
const items = ref([
  {
    title: '8 loại rau củ quả giàu canxi',
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi...',
    image: 'https://picsum.photos/400/250?random=1'
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác...',
    image: 'https://picsum.photos/400/250?random=2'
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content: 'Đậu làng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất...',
    image: 'https://picsum.photos/400/250?random=3'
  }
]);
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover; /* Đảm bảo hình ảnh không bị méo */
}
</style>