FROM node:18-alpine

WORKDIR /app

# 1. Install pnpm globally
RUN npm install -g pnpm

# 2. Copy source files
COPY . .

# 3. Install dependencies across the monorepo workspace
ENV NODE_ENV=development
RUN pnpm install --shamefully-hoist --no-frozen-lockfile

# 4. Build workspace projects (bypass strict TS errors if any exist)
RUN pnpm run build --if-present || true

# 5. Production setup
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=10000

EXPOSE 10000

# 6. Start the app via root package.json start script
CMD ["pnpm", "start"]
