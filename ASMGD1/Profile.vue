<template>
  <div class="container mt-5">
    <div class="card p-4 mx-auto" style="max-width: 600px;">
      <h4>Quản lý thông tin cá nhân</h4>
      <hr>
      <div class="text-center mb-3">
        <img src="https://via.placeholder.com/150" class="rounded-circle shadow" width="120">
      </div>
      <div class="mb-3">
        <label>Họ và tên:</label>
        <input type="text" class="form-control" value="Sinh viên FPT">
      </div>
      <div class="mb-3">
        <label>Email:</label>
        <input type="email" class="form-control" value="sv@fpt.edu.vn" disabled>
      </div>
      <button class="btn btn-success">Cập nhật thông tin</button>
    </div>
  </div>
</template>