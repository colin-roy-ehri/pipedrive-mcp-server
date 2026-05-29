# Multi-stage build for optimized image size
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY src ./src

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

# Install wget for healthcheck
RUN apk add --no-cache wget

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy built application from builder stage
COPY --from=builder /app/build ./build

# Set NODE_ENV to production
ENV NODE_ENV=production
# Default port — Cloud Run overrides this with its own PORT env var
ENV MCP_PORT=8080

EXPOSE 8080

# Run as non-root user for security
USER node

# Start the application
CMD ["node", "build/index.js"]
