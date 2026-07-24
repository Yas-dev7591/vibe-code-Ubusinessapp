FROM node:18-alpine
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build --if-present
EXPOSE 3000
CMD ["pnpm", "start"]