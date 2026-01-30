<template>
  <div class="p-5">
    <h3>Bài 2: Two-way Data Binding</h3>
    <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" class="form-control" />
    <p class="mt-3">Giá trị bạn nhập: <b>{{ userInput }}</b></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userInput = ref('FPL');
</script>