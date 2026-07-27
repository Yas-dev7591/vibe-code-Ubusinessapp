FROM node:20-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy dependency configs
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy source code and workspace libraries
COPY . .

# Install all workspace dependencies recursively
RUN pnpm install --frozen-lockfile

# Build the application
RUN pnpm run build

# Expose server port
EXPOSE 5000

# Start server
CMD ["pnpm", "start"]
