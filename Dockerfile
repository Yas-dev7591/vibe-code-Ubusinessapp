FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json pnpm-lock.yaml* ./

ENV NODE_ENV=development
RUN pnpm install --no-frozen-lockfile

COPY . .

RUN pnpm run build --if-present

ENV NODE_ENV=production

EXPOSE 3000

CMD ["pnpm", "start"]
