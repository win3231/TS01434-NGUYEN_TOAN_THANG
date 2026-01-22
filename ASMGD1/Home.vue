<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Trang Chủ Blog</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="i in 3" :key="i">
        <div class="card h-100 shadow-sm">
          <img src="https://picsum.photos/300/200" class="card-img-top" alt="Blog Image">
          <div class="card-body">
            <h5 class="card-title">Tiêu đề bài viết {{ i }}</h5>
            <p class="card-text">Tóm tắt nội dung bài viết để người dùng dễ theo dõi.</p>
            <a href="#" class="btn btn-primary">Xem chi tiết</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>