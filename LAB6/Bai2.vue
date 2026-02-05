<template>
  <div class="container mt-4">
    <h3>Nhập tháng của bạn:</h3>
    <input type="number" class="form-control" v-model.number="month" />

    <div class="mt-3">
      <p v-if="month < 1 || month > 12" style="color: red">
        Vui lòng nhập tháng từ 1 đến 12! [cite: 26, 43]
      </p>
      <p v-else-if="month >= 1 && month <= 3">Mùa Xuân [cite: 33, 44]</p>
      <p v-else-if="month <= 6">Mùa Hè [cite: 45]</p>
      <p v-else-if="month <= 9">Mùa Thu [cite: 46]</p>
      <p v-else>Mùa Đông [cite: 47]</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // [cite: 51]
const month = ref(1); // Khởi tạo tháng mặc định là 1 [cite: 52]
</script>