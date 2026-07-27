FROM node:20-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy dependency configs (using wildcard so optional files won't break the build)
COPY package.json pnpm-lock.yaml* ./

# Copy remaining source code
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build application
RUN pnpm run build

# Expose port
EXPOSE 5000

# Start server
CMD ["pnpm", "start"]
