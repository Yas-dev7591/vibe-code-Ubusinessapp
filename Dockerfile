FROM node:22-slim

# Install system dependencies that PNPM and native packages need
RUN apt-get update && apt-get install -y python3 make g++ git ca-certificates && rm -rf /var/lib/apt/lists/*

# Enable PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package metadata
COPY package.json pnpm-lock.yaml* ./

# Copy all repository source code
COPY . .

# Install dependencies with verbose logs so we can see exact errors if it fails
RUN pnpm install --no-frozen-lockfile --loglevel=info

# Build application
RUN pnpm run build

# Expose server port
EXPOSE 5000

# Start server
CMD ["pnpm", "start"]
