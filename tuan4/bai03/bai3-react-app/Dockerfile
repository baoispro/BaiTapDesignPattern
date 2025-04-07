# 1. Dùng base image nhẹ
FROM node:18-alpine

# 2. Set thư mục làm việc
WORKDIR /app

# 3. Copy file vào container
COPY . .

# 4. Cài dependency
RUN npm install

# 5. Build ứng dụng React (ra thư mục build/)
RUN npm run build

# 6. Cài server tĩnh `serve`
RUN npm install -g serve

# 7. Mở port 3000 (serve sẽ dùng)
EXPOSE 3000

# 8. Khởi động ứng dụng bằng serve
CMD ["serve", "-s", "build"]
