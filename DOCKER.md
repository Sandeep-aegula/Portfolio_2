# Docker Setup for Portfolio Project

This document explains how to build and run the portfolio application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (usually comes with Docker Desktop)

## Quick Start

### Production Build

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **Or build and run manually:**
   ```bash
   # Build the image
   docker build -t portfolio .
   
   # Run the container
   docker run -p 3000:3000 portfolio
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

### Development Build

For development with hot-reload:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

## Docker Commands

### Production

```bash
# Build and start services
docker-compose up --build

# Run in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs portfolio

# Rebuild only
docker-compose build
```

### Development

```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up --build

# Run in background
docker-compose -f docker-compose.dev.yml up -d

# Stop development services
docker-compose -f docker-compose.dev.yml down
```

### Manual Docker Commands

```bash
# Build production image
docker build -t portfolio:latest .

# Build development image
docker build -f Dockerfile.dev -t portfolio:dev .

# Run production container
docker run -p 3000:3000 --name portfolio-app portfolio:latest

# Run development container with volume mounts
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules --name portfolio-dev portfolio:dev

# Remove containers
docker rm portfolio-app
docker rm portfolio-dev

# Remove images
docker rmi portfolio:latest
docker rmi portfolio:dev
```

## Environment Variables

Create a `.env.docker` file for custom environment variables:

```env
NEXT_TELEMETRY_DISABLED=1
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0

# Add your custom variables
# API_URL=https://api.example.com
```

## File Structure

```
├── Dockerfile              # Production Docker configuration
├── Dockerfile.dev          # Development Docker configuration  
├── docker-compose.yml      # Production compose file
├── docker-compose.dev.yml  # Development compose file
├── .dockerignore           # Files to exclude from Docker context
└── .env.docker            # Docker environment variables
```

## Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Find process using port 3000
   netstat -ano | findstr :3000
   
   # Or use a different port
   docker run -p 3001:3000 portfolio
   ```

2. **Build fails due to dependency issues:**
   ```bash
   # Clean build without cache
   docker build --no-cache -t portfolio .
   ```

3. **Container stops immediately:**
   ```bash
   # Check logs for errors
   docker logs portfolio-app
   ```

### Performance Tips

1. **Use multi-stage builds** (already implemented)
2. **Optimize .dockerignore** to reduce build context
3. **Use specific Node.js versions** for consistency
4. **Enable BuildKit** for faster builds:
   ```bash
   export DOCKER_BUILDKIT=1
   ```

## Production Deployment

For production deployment, consider:

1. **Using a reverse proxy** (nginx, traefik)
2. **Setting up SSL/TLS certificates**
3. **Configuring health checks**
4. **Setting up monitoring and logging**
5. **Using secrets management** for sensitive data

### Health Check Example

Add to your docker-compose.yml:

```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
  interval: 30s
  timeout: 10s
  retries: 3
```

## Security Considerations

1. **Use non-root user** (already implemented)
2. **Keep dependencies updated**
3. **Scan images for vulnerabilities**
4. **Use official base images**
5. **Minimize attack surface** by using Alpine Linux