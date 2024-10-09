<template>
 <div id="app">
  <router-view></router-view>
  </div>
  
</template>

<style>
.column h1{
  text-align: left;
}
.column1 {
  text-align: left;

  display: flex;
  flex-direction: column; 
  gap: 10px;              
}
.column1 a {
  text-decoration: none;  
  color: white;            
  padding: 5px;           
  border-radius: 5px;     
  transition: background-color 0.3s ease; 
  margin-left: 20px;
}


.footer{
  width: 100%;
  
  background: black;
}
.container {

  justify-content: space-between;
  gap: 10px;
  padding: 20px;
}

.column {
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;  
}

.footer-content{
  display: flex;
  color: #fff;
}
.hangbanchay {
  display: flex;               
  gap: 20px;                   
  justify-content: center;      
  padding: 10px;               
  border-radius: 10px;         
  
  background: #81b69e;
}

.hangbanchay a {
  text-decoration: none;       /* Bỏ gạch chân */
  color: #333;                 /* Màu chữ */
  padding: 5px 20px;          /* Thêm khoảng trống cho các liên kết */
  background-color: #fff;      /* Nền trắng cho các liên kết */
  border-radius: 5px;          /* Bo tròn các góc */
  transition: background-color 0.3s, transform 0.3s; /* Hiệu ứng mượt */
}

.hangbanchay a:hover {
  background-color: #42b983;   
  color: white;               
  transform: translateY(-3px); 
}

.divider {
  border: none;
  border-bottom: 2px solid #ccc; 
  margin: 0; 
}
.buttonshop {
  width: 40px !important;
  height: 40px !important;
}

.buttonshop img {
  max-width: 100% !important;
  max-height: 100% !important;
}


.search-container {
  display: flex;                     /* Sử dụng flexbox */
  justify-content: center;           /* Căn giữa theo chiều ngang */
  align-items: center; 
  gap: 15px;              /* Căn giữa theo chiều dọc */
}
.button1 img{
  height: 20px;
  width: 20px;
}
.buttonnew {
  width: 20px;
  height: 20px;

}

.input-box {
  width: 100%;
  max-width: 500px;
  min-width: 700px;
  font-size: 15px;
  border-radius: 15px; /* Bo tròn các góc */
  border: 1px solid #ccc; /* Đường viền */
  padding: 10px;
}

.button1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  gap: 20px;
  width: 30%
}

.button1 button {
  display: inline-flex; 
  justify-content: center;
  align-items: center;
  border: none;
  width: 100px;
  height: 100px;
  background: none;
  padding: 0;
}

.logo_text img {
  width: 100%; 
  height: 100px;
  max-width: 200px;
  object-fit: contain; 
}
.button1 img {
  width: 100%; /* Ảnh chiếm toàn bộ diện tích bên trong button */
  height: auto;
   
}
.header-two button {
  border: none;
  
  height: 100%;
  background: none;
  font-size: 30px;
  
}
.header-two {
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  height: 60%;
  width: 100%;
  margin-left: 20px;
}
.header-two img{
  
  height: 100%;
}

.icon-text{
  display: flex;
  padding: 20px;
}

.canlai{
  padding: 10px;
}
.container {
  
  justify-content: space-between;
  width: 100%;
  height: 100vh;
}
.header {
  width: 100%;
  height: 150px;
  background: linear-gradient(90deg, #81b69e, #9fcd74, #c3cc46);
  background-size: 300% 100%;
  animation: gradient-animation 5s ease-in-out infinite; /* Thời gian 5s và chạy vô hạn */
}

/* Định nghĩa animation */
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.header-top {
  width: 100%;
  height: 50px;
  background-color: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-group a {
 
  padding: 12px;
  margin-top:20px;
}
.right-group {
  display: flex;
  flex-direction: row;
}
.header-icon {
  padding: 12px;
  display: flex;
  align-items: center;
 
}
.header-icon img {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}
.header-2 {
  width: 100%;
  height: 100%;
  background-color: none;
}

#app {
  text-align: center;
  min-height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
router-view {
  flex: 1; 
  overflow-y: auto; 
}
</style>
