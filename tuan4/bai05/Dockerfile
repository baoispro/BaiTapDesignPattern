FROM golang:1.20

WORKDIR /app

# Copy code
COPY . .

# Tạo go.mod nếu chưa có
RUN go mod init go-docker-app

# Build file Go
RUN go build -o main .

EXPOSE 8080

CMD ["./main"]
