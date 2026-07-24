FROM node:18-alpine

WORKDIR /app

# 1. Install pnpm globally
RUN npm install -g pnpm

# 2. Copy all monorepo files
COPY . .

# 3. Install dependencies across workspaces
ENV NODE_ENV=development
RUN pnpm install --shamefully-hoist --no-frozen-lockfile

# 4. Build all packages
RUN pnpm run build --if-present || true

# 5. Environment configuration
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=10000

EXPOSE 10000

# 6. Run start directly inside the artifacts workspace!
CMD ["pnpm", "-r", "--filter", "./artifacts/**", "run", "start"]
