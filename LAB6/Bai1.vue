<template>
  <div class="container mt-4">
    <h3>Nhập điểm của bạn:</h3>
    <input type="number" class="form-control" v-model.number="dtb" step="0.1" />

    <div class="mt-3">
      <p v-if="dtb < 5">Xếp loại: <b>Yếu</b></p>
      <p v-else-if="dtb < 6.5">Xếp loại: <b>Trung bình</b></p>
      <p v-else-if="dtb < 8">Xếp loại: <b>Khá</b></p>
      <p v-else-if="dtb < 9">Xếp loại: <b>Giỏi</b></p>
      <p v-else-if="dtb <= 10">Xếp loại: <b>Xuất sắc</b></p>
      <p v-else style="color: red">Điểm không hợp lệ!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const dtb = ref(0); // Khởi tạo giá trị mặc định là 0
</script>