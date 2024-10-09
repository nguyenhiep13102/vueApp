const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // Tắt ESLint
  configureWebpack: {
    // Cấu hình Webpack tùy chỉnh
    devtool: 'source-map', // Thêm source maps cho dễ dàng gỡ lỗi
  },
  devServer: {
    port: 8086, // Thiết lập cổng cho server phát triển
    open: true, // Mở trình duyệt tự động khi server chạy
  },
});
