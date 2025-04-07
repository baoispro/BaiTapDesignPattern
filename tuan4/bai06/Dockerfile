### Stage 1: Build stage ###
FROM node:18 AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Optional: Run build step (nếu có build script)
RUN npm run build


### Stage 2: Runtime stage ###
FROM node:18-alpine

WORKDIR /app

# Copy node_modules và code từ stage 1 sang
COPY --from=builder /app .

# Expose port and start app
EXPOSE 3000
CMD ["npm", "start"]
