FROM node:20-alpine
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy workspace and package files first
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./

# Copy all package directories so workspace resolution succeeds
COPY lib/ ./lib/
COPY artifacts/ ./artifacts/
COPY apps/ ./apps/ 2>/dev/null || true

# Install dependencies with workspace configuration
RUN pnpm install --frozen-lockfile || pnpm install

# Copy the rest of the source code
COPY . .

# Build the workspace project
RUN pnpm run build

# Expose port and start the application
EXPOSE 3000
CMD ["pnpm", "start"]
