# Thực hiện
1.  docker build -t my-postgres .
2.  docker run -e POSTGRES_PASSWORD=123456 -p 5432:5432 my-postgres
# Kết quả
Tạo ra container mới
![alt text](image.png)