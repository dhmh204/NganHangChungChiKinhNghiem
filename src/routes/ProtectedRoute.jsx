import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // GIẢ LẬP KIỂM TRA ĐĂNG NHẬP
  // Trong thực tế, bạn sẽ lấy biến này từ Redux, Context API hoặc localStorage
  // Ví dụ: const isLoggedIn = localStorage.getItem('accessToken');
  const isLoggedIn = true; // Đổi thành false để test chức năng chặn

  // Nếu chưa đăng nhập -> Điều hướng về trang Login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Nếu đã đăng nhập -> Cho phép đi tiếp (hiển thị nội dung con)
  return <Outlet />;
};

export default ProtectedRoute;