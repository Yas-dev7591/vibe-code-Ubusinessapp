FROM node:18-alpine

WORKDIR /app

# 1. Install pnpm globally
RUN npm install -g pnpm

# 2. Copy ALL project files first (so pnpm workspaces find every package.json)
COPY . .

# 3. Force install all dependencies across all workspaces
ENV NODE_ENV=development
RUN pnpm install --no-frozen-lockfile

# 4. Build the monorepo packages
RUN pnpm run build --if-present

# 5. Set production mode and start
ENV NODE_ENV=production
EXPOSE 3000

CMD ["pnpm", "start"]
