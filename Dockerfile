FROM node:18-alpine

WORKDIR /app

# 1. Install pnpm globally
RUN npm install -g pnpm

# 2. Copy all files into the workspace
COPY . .

# 3. Force dependency hoisting so TypeScript finds all lib/* packages
ENV NODE_ENV=development
RUN pnpm install --shamefully-hoist --no-frozen-lockfile

# 4. Build the monorepo
RUN pnpm run build --if-present

# 5. Set production mode and expose start command
ENV NODE_ENV=production
EXPOSE 3000

CMD ["pnpm", "start"]
